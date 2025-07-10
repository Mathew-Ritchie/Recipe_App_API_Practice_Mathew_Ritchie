import React from "react";
import { NavLink } from "react-router-dom";

export default function AlphabetSelector({ toggleAlphabetVisibility }) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="flex flex-wrap gap-1.5 justify-center mx-10">
      {alphabet.map((letter) => (
        <NavLink
          onClick={toggleAlphabetVisibility}
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
