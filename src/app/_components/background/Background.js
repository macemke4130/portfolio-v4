import styles from "./background.module.css";
import Image from "next/image";

import meInTree from "./meintree.jpg";

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
