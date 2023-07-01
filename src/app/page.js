import Link from "next/link";
import styles from "./page.module.css";

import ExperienceTimer from "./_components/experienceTimer/ExperienceTimer";

export default function Home() {
  return (
    <div className="pageContent">
      <div id="bio" className="purpleCard">
        <h3>Biography</h3>
        <p>Hello! My name is Lucas.</p>
        <p>
          I am a full stack web developer with over <ExperienceTimer />{" "}
          <span className="noWrap">of experience.</span>
        </p>
        <p>
          I am proficient in a variety of web technologies, including React,
          Next, Typescript / Javascript, MySQL, GraphQL, HTML, CSS and more. I
          prefer to focus efforts on results based development, rather than what
          “feels” right. I love to learn new technologies and believe highly in
          continuing education.
        </p>
        <p>
          I know that there are often many ways to achieve a desired outcome and
          am always looking for new and innovative ways to improve the users'
          experience. I am passionate about creating websites that are
          accessible to everyone, regardless of their ability. I am also
          committed to optimizing for search engines and page load speeds.
        </p>
        <p>
          I currently work as the Lead Front End Web, React, UX/UI and VTEX
          Developer for{" "}
          <Link
            href="https://www.eriksbikeshop.com/"
            target="_blank"
            rel="noreferrer"
          >
            Erik's Bike Shop
          </Link>
          , one of the largest bicycle and Winter sports shops in America.
        </p>
        <p>
          My favorite tech stack at the moment is React, GraphQL, Express and
          MySQL. If you're a bicycle nerd, you may enjoy my{" "}
          <Link
            href="https://www.namethatpart.com/"
            target="_blank"
            rel="noreferrer"
          >
            Name That Part
          </Link>{" "}
          game that utilizes those technologies.
        </p>
        <p>
          In my free time, I enjoy fixing bicycles, but they're much more fun to
          ride. I also love coffee, hiking, camping, skateboarding, photography,
          live music and reading science fiction.
        </p>
        <p>
          Please check out my <Link href="/resume">resume</Link> and my{" "}
          <Link href="/skills">skills</Link> list for more information.
        </p>
      </div>
    </div>
  );
}
