import { createPortal } from "react-dom";
import styles from "./lightbox.module.css";

import ArrowCircle from "../../../icons/arrow-circle.svg";

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
              aria-label="Previous Photo"
            >
              <img src={ArrowCircle.src} className={styles.navArrow} />
            </button>
            <button
              onClick={props.navigateRight}
              className={styles.rightNavButton}
              aria-label="Next Photo"
            >
              <img src={ArrowCircle.src} className={styles.navArrow} />
            </button>
            <div
              className={styles.wrapper}
              // Uses thumbnail image as background as the higher res photo is loaded in - LM
              style={{
                backgroundImage:
                  props.bigImage > -1 &&
                  `url(${props.imageFileNames[props.bigImage].thumbSrc})`,
              }}
            >
              <img src={props.bigImageSrc?.hrSrc} className={styles.bigImage} />
            </div>
          </>,
          document.body
        )}
      </>
    );
  } else return <></>;
}
