import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./useRecipeStore";

export default function CategoriesList() {
  const { fetchCategories, error, categories } = useRecipeStore();

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);

  return (
    <div>
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-5 mx-10">
          {categories.map((category) => (
            <Link key={category.idCategory}>
              <p>{category.strCategory}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
