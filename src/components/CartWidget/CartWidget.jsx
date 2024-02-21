import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CardWidget(props) {
  const { cart, sumQuantities } = useContext(CartContext);
  return (
    <div className="containerCart">
      <Link to="/cart">
        <ShoppingCartIcon className="cartIcon" />
      </Link>
      <span className="cartNumber">{sumQuantities(cart)}</span>
    </div>
  );
}

export default CardWidget;
