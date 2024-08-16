import React from "react";

const Card = ({ recipe }) => {
  return (
    <>
      <div className="Card">
        <header>{recipe.name}</header>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
        <footer>
          <button>Add to Cart</button>
        </footer>
      </div>
    </>
  );
};
export default Card;
