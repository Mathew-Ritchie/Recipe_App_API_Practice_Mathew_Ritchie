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
        <NavLink
          to={`/recipes/${letter}`}
          key={letter}
          className={({ isActive }) =>
            `py-2 px-4 rounded-md ${
              isActive ? "bg-blue-600 text-white font-bold" : "text-gray-500 hover:bg-gray-300"
            }`
          }
        >
          {letter}
        </NavLink>
      ))}
    </div>
  );
}
