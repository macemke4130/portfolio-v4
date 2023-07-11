"use client";

import { useRef, useState } from "react";

import styles from "./background.module.css";
import Image from "next/image";

import meInTree from "./meintree.jpg";

export default function Background() {
  const [streamBackground, setStreamBackground] = useState(false);
  const videoElement = useRef();
  const stream = useRef(null);

  const getUserMedia = async (constraints) => {
    const userMediaOptions = {
      audio: false,
      video: {
        facingMode: { exact: "environment" },
      },
    };
    try {
      stream.current = await navigator.mediaDevices.getUserMedia(
        userMediaOptions
      );
      videoElement.current.srcObject = stream.current;
      setStreamBackground(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopUserMedia = async () => {
    const videoTrack = await stream.current.getTracks()[0];
    videoTrack.stop();
    videoElement.current.srcObject = null;
    setStreamBackground(false);
  };

  const handleBackgroundChange = () => {
    streamBackground ? stopUserMedia() : getUserMedia();
  };

  return (
    <>
      <button
        onClick={handleBackgroundChange}
        className={styles.backgroundButon}
      >
        {`Use ${streamBackground ? "Default" : "environment as"} background`}
      </button>
      <div className={styles.backgroundContainer}>
        <Image
          src={meInTree}
          alt=""
          loading="eager"
          className={styles.backgroundImage}
          style={{ display: `${streamBackground ? "none" : "block"}` }}
        />
        <video
          ref={videoElement}
          autoPlay={true}
          className={styles.videoBackground}
        ></video>
      </div>
    </>
  );
}
