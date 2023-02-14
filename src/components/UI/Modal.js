import React from "react";
import classes from "./Modal.module.css";

const Backdrop = ({ onCloseCart }) => {
  return <div className={classes.backdrop} onClick={onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>;
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onCloseCart={props.onCloseCartHandler} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
