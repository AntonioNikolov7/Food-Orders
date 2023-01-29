import React, { useEffect, useState } from "react";
import "../Items.css";
import BackButton from "../BackButton";

import AlignItemsList from "../../../shared/AlignListItems/AlignItemsList";

const PizzaItem = ({ onClose }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const resData = await fetch("http://localhost:5000/food/pizza")
        .then((res) => res.json())
        .then((data) => data);
      setItems(resData);
    })();
  }, []);

  return (
    <>
      <div className="item">
        <div className="item-header">
          <span>PIZZA PAGE</span>
          <BackButton onClick={onClose}></BackButton>
        </div>
        <div>
          <AlignItemsList items={items} />
        </div>
      </div>
    </>
  );
};

export default PizzaItem;
