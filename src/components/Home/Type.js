import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "WEB DEVELOPER",
          "FRONTEND DEVELOPER",
          "DATA ANALYTICS ENTHUSIAST",
          "POWERBI ENTHUSIAST",
          "Open TO WORK",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
