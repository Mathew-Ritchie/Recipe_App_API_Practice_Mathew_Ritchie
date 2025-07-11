import { create } from "zustand";
import SelectedRecipe from "./SelectedRecipe";

const useRecipeStore = create((set) => ({
  meals: [],
  loading: false,
  error: null,
  selectedRecipe: null,
  categories: [],

  fetchMealsByLetter: async (letter) => {
    set({ loading: true, error: null });

    const API_KEY = "1";
    const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;
    const LETTER_SEARCH = `search.php?f=${letter}`;

    try {
      const response = await fetch(`${BASE_URL}${LETTER_SEARCH}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      set({ meals: Array.isArray(data.meals) ? data.meals : [], loading: false });
    } catch (err) {
      console.error("Error fetching meals:", err);
      set({ error: "Failed to load meals. Please try again later.", loading: false });
    }
  },

  fetchMealsByCategory: async (categoryName) => {
    set({ loading: true, error: null });

    const API_KEY = "1";
    const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;
    const CATEGORY_SEARCH = `filter.php?c=${categoryName}`;

    try {
      const response = await fetch(`${BASE_URL}${CATEGORY_SEARCH}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      set({ meals: Array.isArray(data.meals) ? data.meals : [], loading: false });
    } catch (err) {
      console.error("Error fetching meals:", err);
      set({ error: "Failed to load meals. Please try again later.", loading: false });
    }
  },

  fetchMealById: async (id) => {
    set({ loading: true, error: null, selectedMeal: null });
    const API_KEY = "1";
    const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;
    const MEAL_ID_URL = `${BASE_URL}lookup.php?i=${id}`;

    try {
      const res = await fetch(MEAL_ID_URL);
      const data = await res.json();
      const meal = data.meals ? data.meals[0] : null;

      if (meal) {
        console.log(`Meal with ID '${id}' fetched successfully:`, meal.strMeal);
      } else {
        console.log(`No meal found with ID '${id}'.`);
      }

      set({ selectedRecipe: meal, loading: false });
    } catch (err) {
      set({ error: "Failed to load recipe details. Please try again.", loading: false });
    }
  },

  fetchCategories: async () => {
    set({ error: null });
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      set({ categories: Array.isArray(data.categories) ? data.categories : [] });
    } catch (err) {
      console.error("Error fetching categories:", err);
      set({ error: "Failed to load categories. Please try again later." });
    }
  },
}));

export default useRecipeStore;
