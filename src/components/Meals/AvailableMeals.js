import { useState } from "react";

import Burger from "../Meals/Categories/Burgers/Burger";
import "../Meals/Categories/Items.css";
import Drinks from "../Meals/Categories/Drinks/Drinks";
import Pizza from "../Meals/Categories/Pizza/Pizza";
import Steaks from "../Meals/Categories/Steaks/Steaks";
import classes from "./AvailableMeals.module.css";
import MealCategory from "./Categories/MealCategory";

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
          <MealCategory
            name={"PIZZA"}
            category={"pizza"}
            onClick={() => toggleSelectedCategory(PIZZA_CATEGORY_ID)}
            onClose={() => toggleSelectedCategory(PIZZA_CATEGORY_ID)}
          />
        )}
        {selectedCategory === STEAKS_CATEGORY_ID && (
          <MealCategory
            name={"STEAK"}
            category={"steaks"}
            onClick={() => toggleSelectedCategory(STEAKS_CATEGORY_ID)}
            onClose={() => toggleSelectedCategory(STEAKS_CATEGORY_ID)}
          />
        )}
        {selectedCategory === BURGER_CATEGORY_ID && (
          <MealCategory
            name={"BURGERS"}
            category={"burgers"}
            onClick={() => toggleSelectedCategory(BURGER_CATEGORY_ID)}
            onClose={() => toggleSelectedCategory(BURGER_CATEGORY_ID)}
          />
        )}
        {selectedCategory === DRINKS_CATEGORY_ID && (
          <MealCategory
            name={"DRINKS"}
            category={"drinks"}
            onClick={() => toggleSelectedCategory(DRINKS_CATEGORY_ID)}
            onClose={() => toggleSelectedCategory(DRINKS_CATEGORY_ID)}
          />
        )}
      </div>
    </>
  );
};

export default AvailableMeals;
