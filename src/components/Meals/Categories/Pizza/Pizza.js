import React from "react";
import PizzaImage from "../../../../assets/pizza.jpg";
import "../CategoriesStyles.css";
const Pizza = ({ onClick }) => {

  return (
    <div className="centered" onClick={onClick}>
      <img src={PizzaImage} alt="delicious pizza"></img>
      <p>Delicious Pizza</p>
    </div>
  );
};

export default Pizza;
