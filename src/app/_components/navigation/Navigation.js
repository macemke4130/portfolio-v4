"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import VoiceNav from "../voice/VoiceNav";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const navigationOverlay = useRef();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (!openMenu) setOverlayActive(true);
  };

  const navigate = () => {
    if (openMenu) setOpenMenu(false);
  };

  const handleOverlay = (e) => {
    const isActive = e.target.dataset.active === "true";
    setOverlayActive(isActive ? true : false);
  };

  useEffect(() => {
    navigationOverlay.current?.addEventListener("transitionend", handleOverlay);

    return () => {
      navigationOverlay.current?.removeEventListener(
        "transitionend",
        handleOverlay
      );
    };
  });

  return (
    <div className={styles.siteNavigation}>
      <button
        ref={navigationOverlay}
        aria-label="Close Navigation Menu"
        tabIndex="-1"
        onClick={toggleMenu}
        data-active={openMenu ? "true" : "false"}
        className={styles.overlay}
        style={{
          width: overlayActive ? "auto" : "0",
          height: overlayActive ? "auto" : "0",
        }}
      ></button>
      <button
        aria-controls="navigationDrawer"
        aria-expanded={openMenu}
        onClick={toggleMenu}
        aria-label={`${openMenu ? "Close" : "Open"} Navigation Menu`}
        className={styles.navButton}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      <div
        className={styles.navDrawer}
        id="navigationDrawer"
        aria-hidden={!openMenu}
      >
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/"
                tabIndex={openMenu ? "0" : "-1"}
                onClick={navigate}
              >
                Biography
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                tabIndex={openMenu ? "0" : "-1"}
                onClick={navigate}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                tabIndex={openMenu ? "0" : "-1"}
                onClick={navigate}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                tabIndex={openMenu ? "0" : "-1"}
                onClick={navigate}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                tabIndex={openMenu ? "0" : "-1"}
                onClick={navigate}
              >
                Contact
              </Link>
            </li>
            <li>
              <VoiceNav toggleMenu={toggleMenu} />
            </li>
          </ul>
        </nav>
        <button onClick={navigate} className={styles.closeNavButton}>
          Close Navigation
        </button>
      </div>
    </div>
  );
}
