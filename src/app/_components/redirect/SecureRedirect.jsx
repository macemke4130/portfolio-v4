"use client";

import { useEffect } from "react";

export default function SecureRedirect() {
  useEffect(() => {
    const userProtocol = window.location.protocol;
    
    if (userProtocol !== "https:") {
      const userPath = window.location.pathname;
      
      if (window.location.hostname === "localhost") return;
      console.clear();
      window.location.replace(`https://www.lucasmace.com${userPath}`);
    }

  }, []);

  return <></>;
}
