import React from "react";
import BurgerImage from "../../../../assets/burger.jpg";
import "../CategoriesStyles.css";
const Burger = ({ onClick }) => {
  return (
    <div className={"centered"} onClick={onClick}>
      <img src={BurgerImage} alt="delicious burger"></img>
      <p>Tasty Burgers</p>
    </div>
  );
};

export default Burger;
