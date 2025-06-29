import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";

export default function LetterSelector() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [isAlphabetVisible, setIsAlphabetVisible] = useState(false);

  const toggleAlphabetVisibility = () => {
    setIsAlphabetVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-end mx-5">
        <button onClick={toggleAlphabetVisibility}>
          <TiSortAlphabeticallyOutline className="text-5xl text-gray-700" />
        </button>
      </div>
      <div
        style={{ flexWrap: "wrap", gap: "5px" }}
        className={`mx-10 justify-center mb-10 ${isAlphabetVisible ? "flex" : "hidden"}`}
      >
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
    </div>
  );
}
