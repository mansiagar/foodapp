import React from "react";
import "./Fooditem.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt=""></img>
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart([id])}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeCart([id])}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart([id])}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt=""></img>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
