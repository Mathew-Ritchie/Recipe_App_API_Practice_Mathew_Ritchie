import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useRecipeStore from "./useRecipeStore";

export default function CategoriesList({ toggleCategoryVisibility }) {
  const { fetchCategories, error, categories } = useRecipeStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-5 mx-10">
          {categories.map((category) => (
            <NavLink
              to={`/recipes/category/${category.strCategory}`}
              key={category.idCategory}
              onClick={toggleCategoryVisibility}
              className={({ isActive }) =>
                `py-2 px-4 rounded-md text-lg ${
                  isActive ? "bg-blue-600 text-white font-bold" : "text-gray-500 hover:bg-gray-300"
                }`
              }
            >
              <p>{category.strCategory}</p>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
