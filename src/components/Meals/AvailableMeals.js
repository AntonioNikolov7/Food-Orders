import { useState } from "react";

import Burger from "../Meals/Categories/Burgers/Burger";
import BurgersItem from "../Meals/Categories/Burgers/BurgersItem";
import Drinks from "../Meals/Categories/Drinks/Drinks";
import DrinksItem from "../Meals/Categories/Drinks/DrinksItem";
import Steaks from "../Meals/Categories/Steaks/Steaks";
import SteaksItems from "../Meals/Categories/Steaks/SteaksItems";
import Pizza from "../Meals/Categories/Pizza/Pizza";
import PizzaItem from "../Meals/Categories/Pizza/PizzaItem";
import classes from "./AvailableMeals.module.css";

const PIZZA_CATEGORY_ID = "pizza-category";
const STEAKS_CATEGORY_ID = "steaks-category";
const BURGER_CATEGORY_ID = "burger-category";
const DRINKS_CATEGORY_ID = "drinks-category";

const AvailableMeals = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleSelectedCategory = (newSelectedCategory) => {
    let finalValue = null;

    if (newSelectedCategory !== selectedCategory) {
      finalValue = newSelectedCategory;
    }

    setSelectedCategory(finalValue);
  };

  return (
    <>
      <div className={classes.meals}>
        <Pizza onClick={() => toggleSelectedCategory(PIZZA_CATEGORY_ID)} />
        <Steaks onClick={() => toggleSelectedCategory(STEAKS_CATEGORY_ID)} />

        <Burger onClick={() => toggleSelectedCategory(BURGER_CATEGORY_ID)} />
        <Drinks onClick={() => toggleSelectedCategory(DRINKS_CATEGORY_ID)} />
      </div>
      <div>
        {selectedCategory === PIZZA_CATEGORY_ID && (
          <PizzaItem
            onClick={() => toggleSelectedCategory(PIZZA_CATEGORY_ID)}
          />
        )}
        {selectedCategory === STEAKS_CATEGORY_ID && (
          <SteaksItems
            onClick={() => toggleSelectedCategory(STEAKS_CATEGORY_ID)}
          />
        )}
        {selectedCategory === BURGER_CATEGORY_ID && (
          <BurgersItem
            onClick={() => toggleSelectedCategory(BURGER_CATEGORY_ID)}
          />
        )}
        {selectedCategory === DRINKS_CATEGORY_ID && (
          <DrinksItem
            onClick={() => toggleSelectedCategory(DRINKS_CATEGORY_ID)}
          />
        )}
      </div>
    </>
  );
};

export default AvailableMeals;
