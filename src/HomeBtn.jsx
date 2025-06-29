import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeBtn() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <button onClick={handleGoBack}>Back</button>;
}
