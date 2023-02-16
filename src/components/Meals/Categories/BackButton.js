import React from "react";
import "./CategoriesStyles.css";
const BackButton = (props) => {
  return (
    <button className="button-del" onClick={props.onClick}>
      X
    </button>
  );
};

export default BackButton;
