"use client";

import { useEffect } from "react";

export default function Console() {
  useEffect(() => {
    const style = `
    padding: 2rem;
    background-color: rgba(83, 4, 23); 
    color: #dcb78d; 
    font-weight: bold;  
    font-size: 20px; 
    text-align: center;
    line-height: 50px;
`;

    console.info("%c Thanks for inspecting my console!", style);
    console.info("%c Did you find what you were looking for?", style);
  }, []);

  return <></>;
}
