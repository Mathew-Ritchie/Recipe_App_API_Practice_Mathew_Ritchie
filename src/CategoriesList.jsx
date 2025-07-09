import React, { useEffect } from "react";
import useRecipeStore from "./useRecipeStore";

export default function CategoriesList() {
  const { fetchCategories, error, categories } = useRecipeStore();

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
