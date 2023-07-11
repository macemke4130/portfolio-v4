"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./photos.module.css";

import PhotoThumbnails from "./thumbnailList/ThumbnailList";
import LightBox from "./lightbox/LightBox";

export default function Photos() {
  const openGate = useRef(true);
  const [imageFileNames, setImageFileNames] = useState([]);
  const [bigImage, setBigImage] = useState(-1); // Truthy placeholder.
  const [bigImageSrc, setBigImageSrc] = useState();

  // Run once on mount.
  useEffect(() => {
    if (!openGate.current) return;
    openGate.current = false;

    gatherPhotos();
  });

  // Keyboard Listener.
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  // Since a mouse click and an arrow navigation
  // controls the big image displayed to the user,
  // a side effect seemed the cleanest way to approach
  // this functionality. - LM
  useEffect(() => {
    setBigImageSrc(imageFileNames[bigImage]);
  }, [bigImage]);

  const handleKeyUp = (e) => {
    const leftArrow = e.keyCode === 37;
    const rightArrow = e.keyCode === 39;
    const escKey = e.keyCode === 27;

    if (leftArrow) navigateLeft();
    if (rightArrow) navigateRight();
    if (escKey) closeLightBox();
  };

  // Gets all photos in their respective directories and builds an
  // array with the various filenames. Sets that array to state. - LM
  const gatherPhotos = () => {
    const highresImages = require.context("./images/highres/", false);
    const medresImages = require.context("./images/medres/", false);
    const thumbnails = require.context("./images/thumbnails/", false);

    const hrList = highresImages.keys().map((image) => highresImages(image));
    const mrList = medresImages.keys().map((image) => medresImages(image));
    const thumbList = thumbnails.keys().map((image) => thumbnails(image));

    const tempImageFileNames = [];

    for (let index = 0; index < hrList.length; index++) {
      const hrSrc = hrList[index].default.src;
      const mrSrc = mrList[index].default.src;
      const thumbSrc = thumbList[index].default.src;

      const tempFileNameObject = {
        index,
        hrSrc,
        mrSrc,
        thumbSrc,
      };

      tempImageFileNames.push(tempFileNameObject);
    }

    setImageFileNames(tempImageFileNames);
  };

  const handleThumbnailClick = (e) => {
    setBigImage(Number(e.target.dataset.index));
  };

  const closeLightBox = () => {
    setBigImage(-1);
  };

  const navigateLeft = () => {
    setBigImage(bigImage === 0 ? imageFileNames.length - 1 : bigImage - 1);
  };

  const navigateRight = () => {
    setBigImage(bigImage === imageFileNames.length - 1 ? 0 : bigImage + 1);
  };

  return (
    <>
      <PhotoThumbnails
        imageFileNames={imageFileNames}
        handleThumbnailClick={handleThumbnailClick}
      />
      <LightBox
        bigImage={bigImage}
        bigImageSrc={bigImageSrc}
        closeLightBox={closeLightBox}
        navigateLeft={navigateLeft}
        navigateRight={navigateRight}
      />
    </>
  );
}
