import styles from "./skills.module.css";

import { skillset } from "../ssot";

export default function SkillsPage() {
  return (
    <div className="pageContent">
      <div className="purpleCard">
        <h3>Skills</h3>
        <div className={styles.skillsContainer}>
          {skillset.map((skill) => (
            <div key={skill} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
