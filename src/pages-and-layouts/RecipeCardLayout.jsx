import React from "react";
import RecipeCards from "./RecipeCards";
import FilterHeader from "../Headers/FilterHeader";
import Introduction from "../components/Introduction";

export default function RecipeCardsLayout() {
  return (
    <>
      <Introduction />
      <FilterHeader />
      <RecipeCards />
    </>
  );
}
