import React from "react";
import { Outlet } from "react-router-dom";
import Introduction from "./Introduction";

export default function MainPageLayout() {
  return (
    <div>
      <Introduction />
      <Outlet />
    </div>
  );
}
