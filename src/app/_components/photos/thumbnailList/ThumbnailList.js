import styles from "./thumbnailList.module.css";

export default function ThumbnailList(props) {
  return (
    <div className={styles.thumbnailList}>
      {props.imageFileNames.map((image) => (
        <button
          key={"index-" + image.index}
          onClick={props.handleThumbnailClick}
          className={styles.thumbnailButton}
        >
          <img
            data-index={image.index}
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
