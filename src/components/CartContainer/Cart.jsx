import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"
import "./cart.css";

function Cart() {
  const { cart, clearCart, sumQuantities, sumPrice } = useContext(CartContext);

  if (sumQuantities(cart) === 0) {
    return (
      <div className="cartList">
        <h1 className="text">¡No hay items en el carrito!</h1>
        <div className="detailContainer">
          <Link to="/">
            <button>Volver al inicio</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="cartList">
        <h1 className="text">Tu carrito actual contiene:</h1>
        {<CartItem items={cart} />}
      </div>
      
      <div className="cartListTotal">
        <div className="detailContainer">
          <div className="flex-container">
            <div>
              <h2 className="totalPrice">Total: ${sumPrice(cart)}</h2>
            </div>
            <div>
              <button onClick={() => clearCart()}>Limpiar Carrito</button>
            </div>
          </div>
        </div>
        <div className="detailContainer">
          <Link to="/checkout">
            <button>Terminar Compra</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Cart;
