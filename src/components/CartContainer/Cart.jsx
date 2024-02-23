import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Form from "../Form/Form";
import "./cart.css";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function Cart() {
  const { cart, clearCart, sumQuantities, sumPrice } = useContext(CartContext);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (sumQuantities(cart) === 0) {
    return (
      <div className="cartList">
        <h1>¡No hay items en el carrito!</h1>
        <p className="text">
          Debes agregar algún producto para poder seguir con la transacción
        </p>
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
          <div>
            <button onClick={handleClickOpen}>Terminar Compra</button>
          </div>
        </div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Form items={cart} toClose={handleClose} />
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}

export default Cart;
