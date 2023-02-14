import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import AlignItemsList from "../shared/AlignListItems/AlignItemsList";
import CloseIcon from "@mui/icons-material/Close";
import "./Cart.css";

const Cart = ({ onCloseCart }) => {
  const { items } = useContext(CartContext);

  if (items.length < 1) {
    return (
      <Modal onCloseCartHandler={onCloseCart}>
        <h3 className="empty-message">
          YOUR CART IS EMPTY. YOU CAN SELECT ITEMS FROM THE MENU.
        </h3>
      </Modal>
    );
  }

  return (
    <Modal onCloseCartHandler={onCloseCart}>
      <div className="closeCart-btn" onClick={onCloseCart}>
        <CloseIcon />
      </div>
      <div style={{ height: "400px", overflow: "auto" }}>
        <AlignItemsList items={items} source={"cart"} />
      </div>
    </Modal>
  );
};

export default Cart;
