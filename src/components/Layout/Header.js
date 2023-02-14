import { useState, useContext } from "react";

import HeaderCartButton from "./HeaderCartButton";
import restaurantImg from "../../assets/Restaurant.JPG";
import classes from "./Header.module.css";
import Cart from "../Cart/Cart";

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartToggle = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <>
      {cartIsOpen && <Cart onCloseCart={cartToggle} />}

      <header className={classes.header}>
        <h1>Antonio's Meals</h1>
        <HeaderCartButton onClick={cartToggle} />
      </header>
      <div className={classes["main-image"]}>
        <img src={restaurantImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
