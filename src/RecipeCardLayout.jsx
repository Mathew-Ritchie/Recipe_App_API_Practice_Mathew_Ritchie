import React from "react";
import RecipeCards from "./RecipeCards";
import FilterHeader from "./FilterHeader";

export default function RecipeCardsLayout() {
  return (
    <>
      <FilterHeader />
      <RecipeCards />
    </>
  );
}
