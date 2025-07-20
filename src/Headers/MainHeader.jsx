import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";

export default function MainHeader() {
  return (
    <div className="bg-yellow-50">
      <h1 className="text-6xl text-center p-10 lemon-regular bg-yellow-500">My Recipe Book</h1>
      <Outlet />
      <Footer />
    </div>
  );
}
