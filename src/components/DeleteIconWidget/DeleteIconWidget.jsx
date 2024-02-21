import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./deleteIconWidget.css";

function DeleteIconWidget({ itemID }) {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="containerDeleteIcon">
      <button onClick={() => removeItem(itemID)}>
        <DeleteIcon className="deleteIcon" />
      </button>
    </div>
  );
}

export default DeleteIconWidget;
