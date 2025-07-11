import React, { useState } from "react";
import { TiSortAlphabeticallyOutline, TiSortAlphabetically } from "react-icons/ti";

import CategoriesList from "./CategoriesList";
import AlphabetSelector from "./AlphabetSelector";

export default function FilterHeader() {
  const [isAlphabetVisible, setIsAlphabetVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const toggleAlphabetVisibility = () => {
    if (isCategoryVisible) {
      toggleCategoryVisibility();
      setIsAlphabetVisible((prev) => !prev);
    } else {
      setIsAlphabetVisible((prev) => !prev);
    }
  };

  const toggleCategoryVisibility = () => {
    if (isAlphabetVisible) {
      toggleAlphabetVisibility();
      setIsCategoryVisible((prev) => !prev);
    } else {
      setIsCategoryVisible((prev) => !prev);
    }
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
        <button onClick={toggleCategoryVisibility}>Categories</button>
      </div>
      <div className={`${isAlphabetVisible ? "flex" : "hidden"}`}>
        <AlphabetSelector toggleAlphabetVisibility={toggleAlphabetVisibility} />
      </div>
      <div className={`${isCategoryVisible ? "flex" : "hidden"}`}>
        <CategoriesList toggleCategoryVisibility={toggleCategoryVisibility} />
      </div>
    </div>
  );
}
