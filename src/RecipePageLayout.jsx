import React from "react";
import SelectedRecipe from "./SelectedRecipe";
import { Outlet } from "react-router-dom";

export default function RecipePageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
