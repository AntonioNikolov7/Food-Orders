import { useState } from "react";
import MenuIcon from "../Layout/MenuIcon";
import AvailableMeals from "./AvailableMeals";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  const [showMeals, setShowMeals] = useState(false);

  const mealsToggle = () => {
    setShowMeals(!showMeals);
  };

  return (
    <>
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To Your Door!</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>

      {showMeals ? <AvailableMeals /> : <MenuIcon onToggle={mealsToggle} />}
    </>
  );
};

export default MealsSummary;
