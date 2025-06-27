import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import MainHeader from "./MainHeader";
import MainPageLayout from "./MainPageLayout";
import RecipeCards from "./RecipeCards";
import LetterSelector from "./LetterSelector";

import SelectedRecipe from "./SelectedRecipe";
import RecipePageLayout from "./RecipePageLayout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Navigate to="/recipes/a" replace />} />
            <Route path="/recipes/:letter" element={<MainPageLayout />}>
              <Route index element={<RecipeCards />} />
            </Route>
            <Route path="/recipe/:recipeid" element={<RecipePageLayout />}>
              <Route index element={<SelectedRecipe />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
