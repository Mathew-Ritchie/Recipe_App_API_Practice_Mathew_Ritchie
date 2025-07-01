import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiSortAlphabeticallyOutline, TiSortAlphabetically } from "react-icons/ti";

import HomeBtn from "./HomeBtn";

export default function LetterSelector() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [isAlphabetVisible, setIsAlphabetVisible] = useState(false);

  const toggleAlphabetVisibility = () => {
    setIsAlphabetVisible((prev) => !prev);
  };

  return (
    <div className="shadow-md pb-5 z-30 relative">
      <div className="flex justify-between item-center mx-5">
        <HomeBtn />
        <button onClick={toggleAlphabetVisibility}>
          {isAlphabetVisible ? (
            <TiSortAlphabeticallyOutline className="text-5xl text-gray-700" />
          ) : (
            <TiSortAlphabetically className="text-5xl text-gray-700" />
          )}
        </button>
      </div>
      <div
        style={{ flexWrap: "wrap", gap: "5px" }}
        className={`mx-10 justify-center  ${isAlphabetVisible ? "flex" : "hidden"}`}
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
