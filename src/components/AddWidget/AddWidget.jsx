import AddIcon from "@mui/icons-material/Add";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./addWidget.css";

function AddWidget({ itemID, quantity, stock }) {
  const { updateItem } = useContext(CartContext);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleAdd = () => {
    if (newQuantity < stock) {
      const updatedQuantity = newQuantity + 1;
      setNewQuantity(updatedQuantity);
      updateItem(itemID, updatedQuantity);
    }
  };

  return (
    <div className="containerAddIcon">
      <button onClick={handleAdd}>
        <AddIcon className="addIcon" />
      </button>
    </div>
  );
}

export default AddWidget;
