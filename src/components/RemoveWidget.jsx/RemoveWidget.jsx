import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./removeWidget.css";

function RemoveWidget({ itemID, quantity }) {
  const { updateItem, removeItem} = useContext(CartContext);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleRemove = () => {
    if (newQuantity > 0) {
      const updatedQuantity = newQuantity - 1;
      setNewQuantity(updatedQuantity);
      if (updatedQuantity === 0){
        removeItem(itemID)
      } else{
        updateItem(itemID, updatedQuantity);
      }
      
    }
  };

  return (
    <div className="containerRemoveIcon">
      <button onClick={handleRemove}>
        <RemoveIcon className="removeIcon" />
      </button>
    </div>
  );
}

export default RemoveWidget;
