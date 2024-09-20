import Link from "next/link";

import ExperienceTimer from "./_components/experienceTimer/ExperienceTimer";

export default function Home() {
  return (
    <div className="pageContent">
      <div id="bio" className="purpleCard">
        <h3>Biography</h3>
        <p>Hello! My name is Lucas.</p>
        <p>
          I am a full stack web developer with over <ExperienceTimer /> <span className="noWrap">of experience.</span>
        </p>
        <p>
          I am proficient in a variety of web technologies, including React, Typescript / Javascript, MySQL, GraphQL, HTML, CSS and more. I prefer to focus
          efforts on results based development, rather than what “feels” right. I love to learn new technologies and believe highly in continuing education.
        </p>
        <p>
          I know that there are often many ways to achieve a desired outcome and am always looking for new and innovative ways to improve the users' experience.
          I am passionate about creating websites that are accessible to everyone, regardless of their ability. I am also committed to optimizing for search
          engines and page load speeds.
        </p>
        <p>
          I work as a Front End Web Developer for{" "}
          <Link href="https://www.starkey.com/" target="_blank" rel="noreferrer">
            Starkey Hearing
          </Link>
          , the leader in hearing technologies on the planet.
        </p>
        <p>
          In my free time, I enjoy fixing bicycles, but they're much more fun to ride. I also love coffee, hiking, camping, skateboarding, photography, live
          music, bookbinding and reading science fiction.
        </p>
        <p>
          If you have a project you would like to discuss, I would love to hear all about it. I work on a sliding scale for web development, especially for
          non-profit or community based orginizations. Please reach out to me at <a href="mailto: lucasmace4130@gmail.com">lucasmace4130@gmail.com</a>
        </p>
        <p>
          Please check out my <Link href="/resume">resume</Link> for more information.
        </p>
      </div>
    </div>
  );
}
