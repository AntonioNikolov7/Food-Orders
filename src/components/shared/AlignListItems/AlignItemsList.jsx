import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import "./addToCart.css";

export default function AlignItemsList({ items, source }) {
  const cartCtx = useContext(CartContext);

  const onItemClick = (item) => {
    if (source === "cart") {
      cartCtx.removeItem(item.id);
    } else {
      cartCtx.addItem(item);
    }
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {items.map((item) => (
        <div key={item.id} id={item.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={item.img}
                sx={{ width: 150, height: 150 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <span>{item.dsc}</span>
                </React.Fragment>
              }
            />
            {source === "cart" && (
              <div className="cart-quantity">
                <button>-</button>
                <input
                  className="cart-quantity_input"
                  type="number"
                  min="1"
                ></input>
                <button>+</button>
                <span>Items : {item.orderedAmount}</span>
              </div>
            )}
            <div className="addToCart" onClick={() => onItemClick(item)}>
              <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                {source === "cart" ? "REMOVE ITEM" : "ADD TO CART"}
              </Button>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
