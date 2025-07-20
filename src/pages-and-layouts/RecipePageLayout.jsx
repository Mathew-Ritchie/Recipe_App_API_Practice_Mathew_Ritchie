import React from "react";
import SelectedRecipe from "./SelectedRecipe";
import { Outlet } from "react-router-dom";
import HomeBtn from "../components/HomeBtn";

export default function RecipePageLayout() {
  return (
    <div>
      <HomeBtn />
      <Outlet />
    </div>
  );
}
