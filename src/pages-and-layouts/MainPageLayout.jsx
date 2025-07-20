import React from "react";
import { Outlet } from "react-router-dom";
import Introduction from "../components/Introduction";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

export default function MainPageLayout() {
  return (
    <div>
      <Outlet />
      <ScrollToTopBtn />
    </div>
  );
}
