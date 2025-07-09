import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiSortAlphabeticallyOutline, TiSortAlphabetically } from "react-icons/ti";

import HomeBtn from "./HomeBtn";
import CategoriesList from "./CategoriesList";

export default function LetterSelector() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [isAlphabetVisible, setIsAlphabetVisible] = useState(false);

  const toggleAlphabetVisibility = () => {
    setIsAlphabetVisible((prev) => !prev);
  };

  return (
    <div className="shadow-md  z-30 relative w-screen bg-yellow-300">
      <div className="flex justify-end item-center mx-5">
        <button className="py-3" onClick={toggleAlphabetVisibility}>
          {isAlphabetVisible ? (
            <TiSortAlphabeticallyOutline className="text-5xl text-gray-700" />
          ) : (
            <TiSortAlphabetically className="text-5xl text-gray-700" />
          )}
        </button>
        <CategoriesList />
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
