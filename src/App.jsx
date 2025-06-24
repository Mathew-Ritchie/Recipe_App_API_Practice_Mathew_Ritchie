import React, { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "1"; // Using the public test key
const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;
const LETTER_SEARCH = `search.php?f=g`;

export default function App() {
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
        <div>
          {meals.map((meal) => (
            <div>
              <h2>{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100px", height: "100px", marginRight: "10px" }}
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
