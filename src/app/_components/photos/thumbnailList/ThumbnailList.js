import styles from "./thumbnailList.module.css";

export default function ThumbnailList(props) {
  return (
    <div className={styles.thumbnailList}>
      {props.imageFileNames.map((image) => (
        <button
          key={"index-" + image.index}
          // Inactivate button focus ability while lightbox is open - LM
          tabIndex={props.bigImage > -1 ? "-1" : "0"}
          data-index={image.index}
          onClick={props.handleThumbnailClick}
          className={styles.thumbnailButton}
        >
          <img
            src={image.thumbSrc}
            width={150}
            height={150}
            className={styles.thumbnailImage}
          />
        </button>
      ))}
    </div>
  );
}
