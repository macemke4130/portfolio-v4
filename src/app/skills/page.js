import styles from "./skills.module.css";

export default function SkillsPage() {
  return (
    <div className="pageContent">
      <div className="purpleCard">
        <h3>Skills</h3>
        <div className={styles.skillsContainer}>
          <div className={styles.skill}>React JS 18</div>
          <div className={styles.skill}>Next JS 13</div>
          <div className={styles.skill}>GraphQL</div>
          <div className={styles.skill}>TypeScript</div>
          <div className={styles.skill}>JavaScript</div>
          <div className={styles.skill}>UX / UI</div>
          <div className={styles.skill}>MySQL</div>
          <div className={styles.skill}>Node JS</div>
          <div className={styles.skill}>Express JS</div>
          <div className={styles.skill}>VTEX</div>
          <div className={styles.skill}>JSON</div>
          <div className={styles.skill}>JQuery</div>
          <div className={styles.skill}>REST</div>
          <div className={styles.skill}>HTML 5</div>
          <div className={styles.skill}>CSS 3</div>
          <div className={styles.skill}>Styled Components</div>
          <div className={styles.skill}>SPAs</div>
          <div className={styles.skill}>Responsive Web Development</div>
          <div className={styles.skill}>GitHub</div>
          <div className={styles.skill}>Salesforce / Heroku</div>
          <div className={styles.skill}>Adobe Suite</div>
        </div>
      </div>
    </div>
  );
}
