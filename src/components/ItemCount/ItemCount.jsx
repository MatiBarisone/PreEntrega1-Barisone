import React, { useState } from "react";
import "./itemCount.css"

function ItemCount({ stock, inicial, onAdd }) {
  const [quantity, setQuantity] = useState(inicial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
        <div className="controls">
            <button onClick={decrement}> - </button>
            <h4> {quantity} </h4>
            <button onClick={increment}> + </button>
        </div>
        <div>
            <button className="addButton" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al Carrito
            </button>
        </div>
    </div>
  );
}

export default ItemCount;
