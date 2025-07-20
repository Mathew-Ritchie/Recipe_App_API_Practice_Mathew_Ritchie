import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import MainHeader from "./Headers/MainHeader";
import MainPageLayout from "./pages-and-layouts/MainPageLayout";
import SelectedRecipe from "./pages-and-layouts/SelectedRecipe";
import RecipePageLayout from "./pages-and-layouts/RecipePageLayout";
import RecipeCardsLayout from "./pages-and-layouts/RecipeCardLayout";

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
