"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./background.module.css";
import Image from "next/image";

import meInTree from "./meintree.jpg";

export default function Background() {
  const [streamBackground, setStreamBackground] = useState(false);
  const timer = useRef();
  const videoElement = useRef();
  const stream = useRef(null);

  const getUserMedia = async (constraints) => {
    const deviceIsMobile = window.innerWidth < 1026;

    const userMediaOptions = {
      audio: false,
      video: { facingMode: "user" },
    };

    const environmentMediaOptions = {
      audio: false,
      video: {
        facingMode: { exact: "environment" },
      },
    };

    try {
      stream.current = await navigator.mediaDevices.getUserMedia(
        deviceIsMobile ? environmentMediaOptions : userMediaOptions
      );
      videoElement.current.srcObject = stream.current;
      setStreamBackground(true);
    } catch (e) {
      console.error(e);
    }
  };

  // After much research, I have not been able to find
  // a "user has turned their camera off" event to
  // listen for. This is a workaround that I am not
  // proud of. This prevents the video background from
  // freezing on the final captured frame if the user
  // turns off their camera. - LM
  useEffect(() => {
    if (!streamBackground) return;

    timer.current = setInterval(() => {
      if (!stream.current.active) stopUserMedia();
    }, 2000);

    return () => {
      clearInterval(timer.current);
    };
  });

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
        {`Use ${streamBackground ? "default" : "environment as"} background`}
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
