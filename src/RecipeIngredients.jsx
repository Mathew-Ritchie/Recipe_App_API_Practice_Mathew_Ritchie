import React from "react";

export default function RecipeIngredients({ recipe }) {
  if (!recipe) {
    return <p>No recipe data available.</p>;
  }

  const ingredientsList = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    const ingredient = recipe[ingredientKey];
    const measure = recipe[measureKey];

    if (ingredient && ingredient.trim() !== "" && measure && measure.trim() !== "") {
      ingredientsList.push(
        <li key={i}>
          {ingredient}: {measure}
        </li>
      );
    } else if (ingredient && ingredient.trim() !== "" && (!measure || measure.trim() === "")) {
      ingredientsList.push(<li key={i}>{ingredient}</li>);
    }
  }

  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>{ingredientsList.length > 0 ? ingredientsList : <li>No ingredients listed.</li>}</ul>
    </div>
  );
}
