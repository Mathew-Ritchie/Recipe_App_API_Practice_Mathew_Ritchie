import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import MainHeader from "./MainHeader";
import MainPageLayout from "./MainPageLayout";
import RecipeCards from "./RecipeCards";
import LetterSelector from "./LetterSelector";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<LetterSelector />} />
            <Route path="/:letter" element={<MainPageLayout />}>
              <Route index element={<RecipeCards />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
