import React from "react";
import LetterSelector from "./LetterSelector";
import { Outlet } from "react-router-dom";

export default function MainPageLayout() {
  return (
    <div>
      <LetterSelector />
      <Outlet />
    </div>
  );
}
