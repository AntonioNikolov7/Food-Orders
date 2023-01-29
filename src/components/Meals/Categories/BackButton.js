import React from "react";
import "./CategoriesStyles.css";
const BackButton = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      X
    </button>
  );
};

export default BackButton;
