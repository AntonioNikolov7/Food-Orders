import { useState } from "react";

import HeaderCartButton from "./HeaderCartButton";
import restaurantImg from "../../assets/Restaurant.JPG";
import classes from "./Header.module.css";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Cart from "../Cart/Cart";

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };
  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      {cartIsOpen && <Cart onCloseCart={closeCartHandler} />}
      <header className={classes.header}>
        <h1>Antonio's Meals</h1>
        <div className={classes.menu_icon}>
          <RestaurantMenuIcon />
        </div>

        <HeaderCartButton onClick={openCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={restaurantImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
