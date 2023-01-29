import { useContext } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <AddShoppingCartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
