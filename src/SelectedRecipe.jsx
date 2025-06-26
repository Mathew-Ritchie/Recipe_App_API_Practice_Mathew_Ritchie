import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "./useRecipeStore";
import RecipeIngredients from "./RecipeIngredients";

export default function SelectedRecipe() {
  const { recipeid } = useParams();
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);
  const fetchMealById = useRecipeStore((state) => state.fetchMealById);

  useEffect(() => {
    fetchMealById(recipeid);
  }, [recipeid]);
  console.log(selectedRecipe);
  if (loading) {
    return <h2 className="text-center text-gray-500 text-2xl font-bold pt-20">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500 text-2xl font-bold pt-20">{error}</h2>;
  }

  if (!selectedRecipe) {
    return <h2 className="text-center text-gray-500 text-2xl font-bold pt-20">Meal not found.</h2>;
  }

  return (
    <div className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{selectedRecipe.strMeal}</h1>
      <img
        src={selectedRecipe.strMealThumb}
        alt={selectedRecipe.strMeal}
        className="mx-auto rounded-lg shadow-lg mb-4 w-full max-w-md"
      />
      <div className="mb-8">
        <RecipeIngredients recipe={selectedRecipe} />
      </div>
      <h2 className="text-3xl font-bold mb-4">Instructions:</h2>
      <p className="text-lg text-gray-700">{selectedRecipe.strInstructions}</p>
      <div className="mt-8">
        <a
          href={selectedRecipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
