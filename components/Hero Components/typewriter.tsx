"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
function TypeWriterCustom() {
  return (
    <>
      <Typewriter
        words={[
          "UI/UX Designer",
          "Frontend Developer",
          "Backend Developer",
          "Fullstack Developer",
        ]}
        loop={true}
        deleteSpeed={50}
        delaySpeed={2000}
        cursor={true}
        cursorStyle="|"
        cursorBlinking={false}
      />
    </>
  );
}

export default TypeWriterCustom;
