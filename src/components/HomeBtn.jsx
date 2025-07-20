import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeBtn() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-screen bg-yellow-300">
      <button className="text-3xl text-gray-700 py-3 px-5  " onClick={handleGoBack}>
        Back
      </button>
    </div>
  );
}
