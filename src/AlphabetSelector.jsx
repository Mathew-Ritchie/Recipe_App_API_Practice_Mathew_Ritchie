import React, { useState } from "react";

const LetterSelector = ({ onSelectLetter }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    if (onSelectLetter) {
      onSelectLetter(letter);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleLetterClick(letter)}
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: selectedLetter === letter ? "#007bff" : "#f0f0f0",
            color: selectedLetter === letter ? "white" : "black",
            cursor: "pointer",
            fontWeight: selectedLetter === letter ? "bold" : "normal",
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default LetterSelector;
