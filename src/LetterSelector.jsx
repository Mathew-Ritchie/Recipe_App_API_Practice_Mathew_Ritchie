import React from "react";
import { NavLink } from "react-router-dom";

export default function LetterSelector() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
      className="mx-10 justify-center mb-10"
    >
      {alphabet.map((letter) => (
        <NavLink to={`/${letter}`} key={letter}>
          {letter}
        </NavLink>
      ))}
    </div>
  );
}
