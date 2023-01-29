import React from "react";
import SteaksImage from "../../../../assets/Steaks.jpg";
import "../CategoriesStyles.css";
const Steaks = ({ onClick }) => {
  return (
    <div className="centered" onClick={onClick}>
      <img src={SteaksImage} alt=" Steaks"></img>
      <p> Steaks</p>
    </div>
  );
};

export default Steaks;
