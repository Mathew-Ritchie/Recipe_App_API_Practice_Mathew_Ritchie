import React, { useEffect, useState } from "react";
import "./App.css";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./useRecipeStore";

export default function RecipeCards() {
  const { letter } = useParams();
  const { meals, loading, error, fetchMealsByLetter } = useRecipeStore();

  useEffect(() => {
    fetchMealsByLetter(letter);
  }, [letter, fetchMealsByLetter]);

  if (loading) {
    return <h2 className="text-center text-gray-500 text-2xl font-bold pt-20">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500 text-2xl font-bold pt-20">{error}</h2>;
  }
  console.log("meals:", meals);
  return (
    <div>
      {Array.isArray(meals) && meals.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-5 mx-10">
          {meals.map((meal) => (
            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
              <div className="w-80 h-96 flex flex-col justify-between items-start">
                <h2 className="text-gray-800 text-3xl font-bold truncate w-80">{meal.strMeal}</h2>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  // style={{ width: "100px", height: "100px", marginRight: "10px" }}
                  className="w-80 h-80"
                />
                <p className="text-gray-400">{meal.strArea}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-gray-500 text-2xl font-bold pt-20">
          There are no recipes starting with '{letter}' Please pick another letter
        </h1>
      )}
    </div>
  );
}
