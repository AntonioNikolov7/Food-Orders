import React from "react";
import Button from "../UI/Button";
import classes from "./MenuIcon.module.css";

function MenuIcon({ onToggle }) {
  const menuClickHandler = () => {
    onToggle();
  };
  return (
    <div className={classes.menu}>
      <Button onClick={menuClickHandler}>Show Menu</Button>
    </div>
  );
}

export default MenuIcon;
