import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="pageContent">
      <div className="purpleCard">
        <h3>Biography</h3>
        <p>Hello! My name is Lucas.</p>
        <p>
          I have over 7 years of professional front end development experience.
          I am a Full Stack Web Developer with an expanding focus on Page Speed
          and Performance, SEO, Accessibility and Reusable code.
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
