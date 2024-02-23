import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import "./form.css";
import { Link } from "react-router-dom";

const Form = ({ items, toClose }) => {
  const [orderID, setOrderID] = useState(null);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { clearCart } = useContext(CartContext);
  const db = getFirestore();

  const handleClick = (e) => {
    toClose();
    clearCart();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ordersCollection = collection(db, "orden");
    const order = {
      buyerData: {
        name,
        lastname,
        phone,
        email,
      },
      cart: items,
    };

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderID(id);
    });
  };

  if (orderID !== null) {
    return (
      <div className="formContainer">
        <div className="text">
          <h2> El ID de tu compra es:</h2>
        </div>
        <div className="orderText">
          <h1> {orderID} </h1>
        </div>
        <div className="text">
          <p>Se te enviará un mail para poder continuar con la compra.</p>
          <p>Este ID te permitirá retirar tu compra en cualquiera de nuestras sucursales</p>
          <p>y no te preocupes este ID se te enviará a tu mail al finalizar la compra!</p>
        </div>
        <div className="text">
          <p>¡Vuelve a la pagina de inicio para seguir navengando!</p>
        </div>
        <div>
          <Link to="/">
            <button onClick={handleClick} className="generalButton">Volver al inicio</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text">
        Complete los siguientes campos para completar la transacción:
      </h2>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="inputField">
          <TextField
            id="name"
            label="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputField">
          <TextField
            id="lastname"
            label="Apellido"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="inputField">
          <TextField
            id="phone"
            label="Teléfono"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="inputField">
          <TextField
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="inputField submit" onSubmit={handleSubmit}>
            Confirmar
          </button>
          <button type="exit" onClick={toClose} className="inputField cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
