import { createPortal } from "react-dom";
import styles from "./lightbox.module.css";

export default function LightBox(props) {
  if (props.bigImageSrc) {
    return (
      <>
        {createPortal(
          <>
            <button
              aria-label="Close Image"
              onClick={props.closeLightBox}
              className={styles.overlay}
            ></button>
            <button
              onClick={props.navigateLeft}
              className={styles.leftNavButton}
            >
              ⏴
            </button>
            <button
              onClick={props.navigateRight}
              className={styles.rightNavButton}
            >
              ⏵
            </button>
            <div className={styles.wrapper}>
              <img src={props.bigImageSrc?.hrSrc} className={styles.bigImage} />
            </div>
          </>,
          document.body
        )}
      </>
    );
  } else return <></>;
}
