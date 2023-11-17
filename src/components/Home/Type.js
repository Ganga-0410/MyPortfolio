import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "CSE Final Year Student",
          "Enthusiastic FrontEnd Developer",
          "Ex-Project Trainee At BARC"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
