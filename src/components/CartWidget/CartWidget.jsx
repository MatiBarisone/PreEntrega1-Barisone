import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CardWidget(props) {
  const handleClick = () => {
    toast.info("Estamos trabajando en esto!", { position: "top-center" });
  };

  return (
    <div className="containerCart">
      <ShoppingCartIcon className="cartIcon" onClick={handleClick} />
      <span className="cartNumber">{props.number}</span>
      <ToastContainer />
    </div>
  );
}

export default CardWidget;
