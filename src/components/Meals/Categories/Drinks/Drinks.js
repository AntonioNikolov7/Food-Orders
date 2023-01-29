import React from "react";
import DrinksImage from "../../../../assets/drinks.jpg";
import "../CategoriesStyles.css";
const Drinks = ({ onClick }) => {
  return (
    <div className={"centered"} onClick={onClick}>
      <img src={DrinksImage} alt="cool drinks"></img>
      <p>Variety of Drinks</p>
    </div>
  );
};

export default Drinks;
