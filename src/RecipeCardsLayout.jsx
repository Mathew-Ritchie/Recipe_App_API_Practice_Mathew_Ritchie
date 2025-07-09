import React from "react";
import LetterSelector from "./LetterSelector";
import RecipeCards from "./RecipeCards";

export default function recipeCardsLayout() {
  return (
    <>
      <LetterSelector />
      <RecipeCards />
    </>
  );
}
