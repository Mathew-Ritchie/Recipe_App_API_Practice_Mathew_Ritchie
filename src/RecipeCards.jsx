import React, { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "1"; // Using the public test key
const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;
const LETTER_SEARCH = `search.php?f=g`;

export default function RecipeCards() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_URL}${LETTER_SEARCH}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data.meals) {
          setMeals(data.meals);
          console.log("Meals starting with 'a' fetched successfully:", data.meals);
        } else {
          setMeals([]);
          console.log("No meals found starting with 'a'.");
        }
      } catch (err) {
        console.error("Error fetching meals:", err);
        setError("Failed to load meals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [LETTER_SEARCH]);

  return (
    <div>
      {meals.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-5 mx-10">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="w-44 h-72 flex flex-col justify-between items-center">
              <h2 className="text-green-500 truncate w-44">{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                // style={{ width: "100px", height: "100px", marginRight: "10px" }}
                className="w-44 h-44"
              />
              <p>{meal.strCategory}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
