import styles from "./projects.module.css";
import Image from "next/image";

import ntp from "../../../public/ntp.jpg";
import dt from "../../../public/dt.jpg";
import dn from "../../../public/dn.jpg";
import tcsi from "../../../public/tcsi.jpg";
import wsg from "../../../public/wsg.jpg";
import cbp from "../../../public/cbp.jpg";
import gpd from "../../../public/gpd.jpg";
import ghr from "../../../public/ghr.jpg";
import ebsw from "../../../public/ebsw.jpg";
import rbw from "../../../public/rbw.jpg";

export default function ProjectsPage() {
  return (
    <div className="pageContent">
      <div className="purpleCard">
        <h3 className="pageTitle">Projects</h3>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Erik's Bike Board and Ski Website</h4>
          <Image className={styles.projectImage} alt="Preview of Erik's Bike Shop Website." loading="eager" src={ebsw} />
          <p>
            Retail website for Erik's Bike, Board and Ski. The largest independently owned outdoor shop in America. Built on VTEX's platform, the website
            handles search, purchasing, shipping and many other aspects critical to having an online store as well as 30+ physical retail locations around the
            country.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">React, VTEX, Vanilla JS, CSS Modules</p>
          <p>
            <a href="https://www.eriksbikeshop.com/" target="_blank" rel="noreferrer">
              Live Project
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Rampar Bikes Website</h4>
          <Image className={styles.projectImage} alt="Preview of Rampar Bikes Website." loading="lazy" src={rbw} />
          <p>
            Website for Rampar Bicycles. Rampar is a bicycle company that is exclusively sold in stores but required a website in order to showcase its products
            and add credibility to the brand.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">React, VTEX</p>
          <p>
            <a href="https://www.ramparbikes.com/" target="_blank" rel="noreferrer">
              Live Project
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Name That Part</h4>
          <Image className={styles.projectImage} alt="Preview of Name That Part Website." loading="lazy" src={ntp} />
          <p className="projectReview">
            "Name That Part is a fun, and surprisingly tough game." -{" "}
            <a href="https://bikerumor.com/think-youre-a-knowledgeable-bike-mechanic-prove-it-with-name-that-part-game/" target="_blank" rel="noreferrer">
              BikeRumor
            </a>
          </p>
          <p className="projectReview">
            "Challenging." -{" "}
            <a
              href="https://theradavist.com/2022/03/radar-roundup-reeb-full-suspension-sustainable-cambium-giro-flat-latch-engin-cranks-and-colored-xc-iii/"
              target="_blank"
              rel="noreferrer"
            >
              The Radavist
            </a>
          </p>
          <p className="projectReview">
            "This one is pure sadism." -{" "}
            <a
              href="https://www.pinkbike.com/news/slack-randoms-moto-inspired-hooligan-ebike-fixed-gear-skateboard-bikes-jet-engine-go-karts-and-more.html"
              target="_blank"
              rel="noreferrer"
            >
              PinkBike
            </a>
          </p>
          <p>
            A game designed for bicycle nerds, by a bicycle nerd. Users are shown a small bicycle part and 4 options to choose from. Images are loaded in
            advance on each selection to keep the game play inturrupted. Stats are collected at the end of each game and sent to the database.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">React, GraphQL, Express, MySQL, Styled Components, React Router</p>
          <p>
            <a href="http://www.namethatpart.com/" target="_blank" rel="noreferrer">
              Live Project
            </a>
          </p>
          <p>
            <a href="https://github.com/macemke4130/Bicycle-Mechanic-Game-v3" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Dynamic Comparison Table Component</h4>
          <Image className={styles.projectImage} alt="Preview of Dynamic Comparison Table Component." loading="lazy" src={dt} />
          <p>
            A scaling and dynamically loaded HTML table. JSON data is fed in, a fully dynamic comparison table is displayed. Controlled by a single prop object.
            Columns and Rows highlight to the table cell that is moused over.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">React</p>
          <p>
            <a href="https://github.com/macemke4130/Dynamic-React-Table-Component" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Dynamic Navigation</h4>
          <Image className={styles.projectImage} alt="Preview of Dynamic Navigation Component." loading="lazy" src={dn} />
          <p>A scaling and self routing navigation menu. JSON data is fed in, a fully dynamic navigation is displayed, complete with submenus.</p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">React, React Router</p>
          <p>
            <a href="https://github.com/macemke4130/Navigation-Menu" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Twin Cities Send It</h4>
          <Image className={styles.projectImage} alt="Preview of Twin Cities Send It Website." loading="lazy" src={tcsi} />
          <p>
            Database of all grass hills in the Twin Cities and greater surrounding areas that are suitable to ride your bicycle down. Why? Because it's really
            fun. I built this project to familiarize myself with GraphQL. Complete with photos, videos and maps to each hill, this has become a favorite passion
            project of mine.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">Vanilla JS, GraphQL, Express, MySQL</p>
          <p>
            <a href="https://github.com/macemke4130/Twin-Cities-Send-It" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>What's Still Good?</h4>
          <Image className={styles.projectImage} alt="Preview of What's Still Good Web App" loading="lazy" src={wsg} />
          <p>
            Full Stack Application for personal use listing the expiration dates of all the food in my kitchen so I may better plan my meals and reduce food
            waste.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">React, GraphQL, Express, MySQL, Day.js</p>
          <p>
            <a href="https://github.com/macemke4130/whats-good" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Grams Per Dollar Calculator App</h4>
          <Image className={styles.projectImage} alt="Preview of Grams Per Dollar Calculator Web App." loading="lazy" src={gpd} />
          <p>
            Sometimes deciding to upgrade your bike can be a difficult decision. This calculator will give you the dollars per gram (or ounces) for a supplied
            component upgrade.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">Vanilla JS, Express</p>
          <p>
            <a href="https://github.com/macemke4130/Grams-Per-Dollar" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>Coffee Brewing Profile App</h4>
          <Image className={styles.projectImage} alt="Preview of Coffee Brewing Profile Web App." loading="lazy" src={cbp} />
          <p>
            Proof of concept tool to help at home baristas to keep track of and maintain their coffee brewing techniques. Choose your preferred brewing method
            and the app frontloads your previous brew into the input fields to cut down on redundancies.
          </p>
          <p className={styles.techStackTitle}>Tech Stack</p>
          <p className="techStack">React JS, TypeScript, Express, Passport, BCrypt, MySQL, WebPack, React Router</p>
          <p>
            <a href="https://github.com/macemke4130/Coffee-Brew-Profiler" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <div className={styles.projectContainer}>
          <h4>GitHub</h4>
          <Image className={styles.projectImage} alt="Github Logo" loading="lazy" src={ghr} />
          <p>My GitHub Profile. Please keep in mind that most of my work lately has been with my current contract account.</p>
          <p>
            <a href="https://github.com/macemke4130?tab=repositories" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
