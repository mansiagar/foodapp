import React, { useState, useEffect } from "react";
import Card from "./card";
export const CardBox = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  }, []);
  return (
    <>
      <div className="CardBox">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};
