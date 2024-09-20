import { Fragment } from "react";
import styles from "./resume.module.css";

import { skillset } from "../ssot";

export default function ResumePage() {
  return (
    <div className="pageContent">
      <div className="purpleCard">
        <h3 className={styles.pageTitle}>Resume</h3>
      </div>
      <a href="/lucas-mace-web-dev-24.pdf" download="lucas-mace-web-dev-resume.pdf" className={styles.downloadResume}>
        Download PDF
      </a>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>Skills</h4>
        <p>
          {skillset.map((skill, index) => (
            <Fragment key={skill}>{`${skill}${index === skillset.length - 2 ? " and " : index === skillset.length - 1 ? "." : ", "}`}</Fragment>
          ))}
        </p>
      </div>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>Experience</h4>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>Starkey Hearing</p>
          <p className={styles.jobTitle}>Front End Web Developer</p>
          <p className={styles.jobDates}>September 2024 - Present / Eden Prairie, MN</p>
          <p className={styles.jobDesc}>
            Develop and maintain multiple consumer and professional product and corporate websites using HTML, CSS, and JavaScript to build responsive and
            cross-browser compatible designs while prioritizing accessibility and user experience.
          </p>
        </div>
        <hr></hr>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>Erik's Bike Shop</p>
          <p className={styles.jobTitle}>Front End Web Developer</p>
          <p className={styles.jobDates}>November 2021 - September 2024 / Minneapolis, MN</p>
          <p className={styles.jobDesc}>
            Develop and maintain responsive customer facing web applications and components using React / Next / Javascript, HTML, CSS and more. Work with the
            marketing team to bring new web features to life. Design and implement new features and UX/UI interfaces. A B Testing of pages and components. Test
            new and existing pages for performance and optimize for page speed. Focus on building for SEO, web accessibility and mobile{" "}
            <span className="noWrap">first performance.</span>
          </p>
        </div>
        <hr></hr>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>The Rave / Eagles Club</p>
          <p className={styles.jobTitle}>Website Administrator</p>
          <p className={styles.jobDates}>March 2010 - April 2012 / Milwaukee, WI</p>
          <p className={styles.jobDesc}>
            Develop and maintain customer facing web applications and components using Javascript, HTML and CSS. Develop back end CRUD applications for front
            end management. Database management and optimization. Implement and optimize video content for the web. E-Commerce development. Work with the
            marketing team to bring new web features to life. Print and animated graphic creation and manipulation using{" "}
            <span className="noWrap">Adobe's Suite.</span>
          </p>
        </div>
        <hr></hr>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>Vision Production</p>
          <p className={styles.jobTitle}>Web and Game Developer, Graphic Designer</p>
          <p className={styles.jobDates}>October 2005 - April 2009 / Pontiac, MI</p>
          <p className={styles.jobDesc}>
            Develop and maintain websites and web components using Javascript, HTML and CSS. Develop interactive, animated games, training modules and websites
            using Adobe Flash and Actionscript. Develop, deploy and maintain recipient lists for <span className="noWrap">Email newsletters.</span>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>Education</h4>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>Covalence Technical Trade School</p>
          <p className={styles.employer}>Full Stack Development Graduate</p>
          <p className={styles.jobDates}>October 2020 - March 2021</p>
        </div>
        <hr></hr>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>Oakland Schools Technical Campus - SouthWest</p>
          <p className={styles.employer}>Visual Imaging and Computer Programming Graduate</p>
          <p className={styles.jobDates}>2005 - 2006</p>
        </div>
      </div>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>References</h4>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>Brennan Kreiman</p>
          <p className={styles.employer}>Customer Solutions Engineer at Stripe</p>
          <p className={styles.jobDates}>
            <a href="mailto:brennank@stripe.com">brennank@stripe.com</a>
          </p>
        </div>
        <hr></hr>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>Graeme Bloor</p>
          <p className={styles.employer}>VP of Digital & Information Technologies at Erik's Bike Board and Ski</p>
          <p className={styles.jobDates}>
            <a href="mailto:gbloor@eriksbikeshop.com">gbloor@eriksbikeshop.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
