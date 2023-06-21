import styles from "./resume.module.css";

export default function ResumePage() {
  return (
    <div className="pageContent">
      <div className="purpleCard">
        <h3 className={styles.pageTitle}>Resume</h3>
      </div>
      <a
        href="/lucas-mace-web-dev-resume.pdf"
        download="lucas-mace-web-dev-resume.pdf"
        className={styles.downloadResume}
      >
        Download PDF
      </a>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>Skills</h4>
        <p>
          React, GraphQL, TypeScript, JavaScript, Next JS, UX/UI, MySQL, Node
          JS, Express JS, VTEX, JSON, JQuery, REST, HTML5, CSS3, Styled
          Components, SPAs, GitHub, Salesforce / Heroku, Adobe Suite
        </p>
      </div>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>Experience</h4>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>Erik's Bike Shop</p>
          <p className={styles.jobTitle}>
            Lead Front End Web, React and UX/UI Developer
          </p>
          <p className={styles.jobDates}>
            November 2021 - Present / Minneapolis, MN
          </p>
          <p className={styles.jobDesc}>
            Development, testing and implementation of all aspects of our
            websites while focusing on site speed and performance. Create custom
            React components to fit our unique needs. SEO and web accessibility
            management. Create internal tools to increase productivity. Use
            creative CSS skills to bring beauty to the websites. Launch new
            standalone brand websites. Design and implement new webpage
            features. <span className="noWrap">UX/UI management.</span>
          </p>
        </div>
        <hr></hr>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>The Rave / Eagles Club</p>
          <p className={styles.jobTitle}>Assistant Website Administrator</p>
          <p className={styles.jobDates}>
            March 2010 - April 2012 / Milwaukee, WI
          </p>
          <p className={styles.jobDesc}>
            Website management and development. Photographing and filming music
            videos, artist interviews, private musical sessions, and live
            concerts. E-Commerce maintenance. Print and animated graphic
            creation. Copywriting. Technical direction and vision mixing of live
            webcasts.
          </p>
        </div>
        <hr></hr>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>Vision Production</p>
          <p className={styles.jobTitle}>
            Web and Game Developer, Graphic Designer
          </p>
          <p className={styles.jobDates}>
            October 2005 - April 2009 / Pontiac, MI
          </p>
          <p className={styles.jobDesc}>
            Web and Game development. E-Commerce integration. Online sales
            training module creation. Touch screen kiosk development. Email
            newsletter deployment. Print media creation. Video post production
            and graphic animation. On site event production and graphic
            director.
          </p>
        </div>
        <hr></hr>
        <div className={styles.jobContainer}>
          <p className={styles.employer}>The Hub Bicycle Co-Op</p>
          <p className={styles.jobTitle}>Service Manager and Head Mechanic</p>
          <p className={styles.jobDates}>
            March 2016 - August 2018 / Minneapolis, MN
          </p>
          <p className={styles.jobDesc}>
            Management of service mechanic team of 30+, quality control of
            bicycles, maintaining service department tools and budget, setting
            worker schedules and maintaining labor budget, inventory control,
            service writing and repair, maintaining and updating service
            policies and procedures, writing and leading training sessions for
            workers, hiring, Steering Committee member.
          </p>
        </div>
      </div>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>Education</h4>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>Covalence.io Bootcamp</p>
          <p className={styles.employer}>Full Stack Development Graduate</p>
          <p className={styles.jobDates}>October 2020 - March 2021</p>
        </div>
        <hr></hr>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>
            Oakland Schools Technical Campus - SouthWest
          </p>
          <p className={styles.employer}>
            Visual Imaging and Computer Programming Graduate
          </p>
          <p className={styles.jobDates}>2005 - 2006</p>
        </div>
      </div>
      <div className="purpleCard">
        <h4 className={styles.resumeTitle}>References</h4>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>Brennan Kreiman</p>
          <p className={styles.employer}>
            Customer Solutions Engineer at Stripe
          </p>
          <p className={styles.jobDates}>
            <a href="mailto:brennank@stripe.com">brennank@stripe.com</a>
          </p>
        </div>
        <hr></hr>
        <div className={styles.schoolContainer}>
          <p className={styles.jobTitle}>Luke Przekwas</p>
          <p className={styles.employer}>Instructor at Covalence</p>
          <p className={styles.jobDates}>
            <a href="mailto:luke@covalence.io">luke@covalence.io</a>
          </p>
        </div>
      </div>
    </div>
  );
}
