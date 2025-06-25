import React from "react";
import "./App.css";
import LetterSelector from "./LetterSelector";
import RecipeCards from "./RecipeCards";
import MainHeader from "./MainHeader";

export default function App() {
  return (
    <div>
      <MainHeader />
      <LetterSelector />
      <RecipeCards />
    </div>
  );
}
