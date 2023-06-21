"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

import styles from "./voiceNav.module.css";

const defaultDisplayWords = "Waiting for voice input";

export default function VoiceNav(props) {
  const openGate = useRef(true);
  const router = useRouter();
  const [displayWord, setDisplayWord] = useState(defaultDisplayWords);
  const [speechAvailable, setSpeechAvailable] = useState(false);
  const [requestMicAccess, setRequestMicAccess] = useState(false);
  const [showMicrophoneModal, setShowMicrophoneModal] = useState(false);

  useEffect(() => {
    // First Render checks to see if browser supports Speech Recognition.

    if (!openGate.current) return;
    openGate.current = false;

    const speechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!speechRecognition) return;

    setSpeechAvailable(true);
  });

  useEffect(() => {
    // Handles Speech Recognition instance and event listeners.
    // requestMicAccess is given after the user selects the button
    // in the modal.

    if (!requestMicAccess) return;

    const speechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new speechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;

    const handleSpeech = (e) => {
      const fullTranscript = e.results[0][0].transcript;
      const singleWords = fullTranscript.split(" ");
      const finalWord = singleWords[singleWords.length - 1];

      setDisplayWord(finalWord);
      checkNav(finalWord.toLowerCase());
    };

    const haltSpeech = () => {
      setRequestMicAccess(false);
      setDisplayWord(defaultDisplayWords);
    };

    recognition.start();

    recognition.addEventListener("result", handleSpeech);
    recognition.addEventListener("end", haltSpeech);

    return () => {
      recognition.removeEventListener("result", handleSpeech);
      recognition.removeEventListener("end", haltSpeech);
    };
  });

  const checkNav = (finalWord) => {
    // List of possible matches and where to route if
    // a match is found.

    if (
      finalWord === "biography" ||
      finalWord === "by" ||
      finalWord === "bayou" ||
      finalWord === "but" ||
      finalWord === "viagra"
    )
      router.push("/");
    if (finalWord === "skills" || finalWord === "skip" || finalWord === "skill")
      router.push("/skills");
    if (
      finalWord === "résumé" ||
      finalWord === "resume" ||
      finalWord === "read"
    )
      router.push("/resume");
    if (
      finalWord === "projects" ||
      finalWord === "garage" ||
      finalWord === "play" ||
      finalWord === "price"
    )
      router.push("/projects");
    if (finalWord === "contact" || finalWord === "can" || finalWord === "call")
      router.push("/contact");
  };

  const handleVoiceClick = () => {
    // User selected Voice Navigation from navigation menu.

    props.toggleMenu(); // Close menu.
    setShowMicrophoneModal(true);
  };

  const requestMicrophoneAccess = () => {
    // Activates Speech Recognition useEffect.
    setRequestMicAccess(true);
  };

  const closeMicophoneConsentModal = (e) => {
    if (e.target.id === "micOverlayBackground") setShowMicrophoneModal(false);
  };

  const MicrophoneConsentModal = () => (
    <div
      id="micOverlayBackground"
      onClick={closeMicophoneConsentModal}
      className={styles.overlay}
    >
      <div className={styles.modalWindow}>
        <p>
          After giving your microphone permission, try saying: "Skills",
          "Résumé", or "Contact". The transcript will appear as the browser
          hears it at the bottom of your screen.
        </p>
        <p>This is a beta feature and won't work in all browsers.</p>
        <ul>
          <li>Safari on desktop - Works best.</li>
          <li>Chrome - Works well enough for beta.</li>
          <li>Firefox - Not yet supported.</li>
          <li>Brave - Not yet supported.</li>
        </ul>
        <button onClick={requestMicrophoneAccess}>
          Request Microphone Access
        </button>
      </div>
    </div>
  );

  const TranscriptDisplay = () => (
    <div className={styles.displayWordContainer}>
      <span>Transcript</span>[ {displayWord} ]
    </div>
  );

  if (speechAvailable) {
    return (
      <>
        {!requestMicAccess && (
          <button
            onClick={handleVoiceClick}
            className={styles.enableVoiceButton}
          >
            Enable Voice Navigation
          </button>
        )}
        {requestMicAccess && createPortal(<TranscriptDisplay />, document.body)}

        {showMicrophoneModal &&
          createPortal(<MicrophoneConsentModal />, document.body)}
      </>
    );
  } else {
    return <></>;
  }
}
