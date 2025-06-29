import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

export default function MainHeader() {
  return (
    <div className="bg-yellow-500">
      <h1 className="text-6xl text-center p-10 lemon-regular">My Recipe Book</h1>
      <Outlet />
    </div>
  );
}
