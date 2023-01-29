import { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import AlignItemsList from "../shared/AlignListItems/AlignItemsList";

const Cart = ({ onCloseCart }) => {
  const { items, removeItem } = useContext(CartContext);

  console.log(items);

  return (
    <Modal onCloseCartHandler={onCloseCart}>
      <div style={{ height: "400px", overflow: "auto" }}>
        <AlignItemsList items={items} source={"cart"} />
      </div>
    </Modal>
  );
};

export default Cart;
