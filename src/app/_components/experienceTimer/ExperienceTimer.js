"use client";

import { useState, useEffect } from "react";

import styles from "./experienceTimer.module.css";

// Hard coded for server side SEO
const blankExperience = {
  years: 8,
  months: 0,
  days: 18,
  hours: 4,
  minutes: 58,
  seconds: 11.548,
};

const msInSecond = 1000;
const msInMinute = 60000;
const msInHour = 3.6e6;
const msInDay = 8.64e7;
const msInMonth = msInDay * 30;
const msInYear = 3.154e10;

const visionMonths = 41;
const raveMonths = 25;
const legacyMS = (visionMonths + raveMonths) * msInMonth;

const eriksHireDate = "2021-11-01";
const eriksHireDateMS = Date.parse(eriksHireDate);

export default function ExperienceTimer() {
  const [experience, setExperience] = useState(blankExperience);

  useEffect(() => {
    const intervalController = setInterval(() => {
      const rightNow = Date.now();
      const eriksExperienceMS = rightNow - eriksHireDateMS;

      const currentExperienceMS = eriksExperienceMS + legacyMS;

      const years = Math.floor(currentExperienceMS / msInYear);
      const yearsRemainder = currentExperienceMS % msInYear;

      const months = Math.floor(yearsRemainder / msInMonth);
      const monthsRemainder = yearsRemainder % msInMonth;

      const days = Math.floor(monthsRemainder / msInDay);
      const daysRemainder = monthsRemainder % msInDay;

      const hours = Math.floor(daysRemainder / msInHour);
      const hoursRemainder = daysRemainder % msInHour;

      const minutes = Math.floor(hoursRemainder / msInMinute);
      const minutesRemainder = hoursRemainder % msInMinute;

      const seconds = (minutesRemainder / msInSecond).toFixed(3);

      setExperience({ years, months, days, hours, minutes, seconds });
    }, 150);

    return () => {
      clearInterval(intervalController);
    };
  });

  return (
    <span className={styles.experienceTimer}>
      {experience.years} years, {` `}
      {experience.months} {`month${experience.months !== 1 ? "s" : ""}`},{` `}
      {experience.days} {`day${experience.days !== 1 ? "s" : ""}`},{` `}
      {experience.hours} {`hour${experience.hours !== 1 ? "s" : ""}`},{` `}
      {experience.minutes} {`minute${experience.minutes !== 1 ? "s" : ""}`} and{` `}
      <span className="noWrap">
        {experience.seconds} {`second${experience.seconds !== 1 ? "s" : ""}`}
      </span>
    </span>
  );
}
