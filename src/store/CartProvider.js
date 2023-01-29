import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let itemsCopy = [...state.items];
    const index = itemsCopy.findIndex((item) => item.id === action.item.id);

    if (index > -1) {
      //we have ordered this pizzas
      let pizza = itemsCopy[index];
      pizza.orderedAmount = pizza.orderedAmount + 1;

      //update final items array
      itemsCopy[index] = pizza;
    } else {
      //the pizza has not been ordered
      itemsCopy = state.items.concat({ ...action.item, orderedAmount: 1 });
    }

    return {
      items: itemsCopy,
    };
  } else if (action.type === "REMOVE") {
    return {
      items: state.items.filter((item) => item?.id !== action.id),
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
