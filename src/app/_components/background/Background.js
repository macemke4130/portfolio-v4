import styles from "./background.module.css";
import Image from "next/image";

import meInTree from "./meInTree.jpg";

export default function Background() {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={meInTree}
        alt=""
        loading="eager"
        className={styles.backgroundImage}
      />
    </div>
  );
}
