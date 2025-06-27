import React from "react";

/**
 * @typedef {object} Recipe
 * @property {string} strMeal - The name of the meal.
 * @property {string} strMealThumb - The URL of the meal's thumbnail image.
 * @property {string} strInstructions - The cooking instructions for the meal.
 * // ... and so on for all other properties you might use
 * // Dynamically add properties for ingredients and measures
 * @property {string} strIngredient1 - The first ingredient.
 * @property {string} strMeasure1 - The measurement for the first ingredient.
 * // Add more as needed, e.g., strIngredient2, strMeasure2, up to 20
 */

/**
 * A React functional component that displays a list of ingredients and their measurements
 * for a given recipe. It iterates through 'strIngredient' and 'strMeasure' properties
 * of the recipe object.
 *
 * @param {object} props - The component's props.
 * @param {Recipe} props.recipe - The recipe object containing ingredient and measurement data.
 * @returns {JSX.Element} A div element containing an h3 heading and an unordered list of ingredients.
 */
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
    <div className="text-left">
      <h3 className="font-bold text-xl">Ingredients:</h3>
      <ul>{ingredientsList.length > 0 ? ingredientsList : <li>No ingredients listed.</li>}</ul>
    </div>
  );
}
