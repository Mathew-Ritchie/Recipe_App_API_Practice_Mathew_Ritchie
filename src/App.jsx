import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import MainHeader from "./MainHeader";
import MainPageLayout from "./MainPageLayout";
import SelectedRecipe from "./SelectedRecipe";
import RecipePageLayout from "./RecipePageLayout";
import RecipeCardsLayout from "./RecipeCardLayout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Navigate to="/recipes/a" replace />} />
            <Route path="/recipes/:letter" element={<MainPageLayout />}>
              <Route index element={<RecipeCardsLayout />} />
              <Route path=":recipeid" element={<RecipePageLayout />}>
                <Route index element={<SelectedRecipe />} />
              </Route>
            </Route>
            <Route path="/recipes/category/:category" element={<MainPageLayout />}>
              <Route index element={<RecipeCardsLayout />} />
              <Route path=":recipeid" element={<RecipePageLayout />}>
                <Route index element={<SelectedRecipe />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
