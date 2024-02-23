import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  name,
  stock,
  category,
  subcategory,
  price,
  description,
  img,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
      stock,
    };
    addItem(item, quantity);
  };

  return (
    <div className="flexContainer">
      <div style={{ padding: "0 3em 0 0" }}>
        <CardMedia
          component="img"
          alt={description}
          height="500"
          image={img}
          sx={{
            padding: "1em 0 1em 0",
            objectFit: "contain",
            borderRadius: "10px",
            boxShadow:
              "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)",
          }}
        />
      </div>
      <div>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <div>
          <Typography
            color="text.secondary"
            sx={{ padding: "1em 0 1em 0", textAlign: "left" }}
          >
            Descripción: {description}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ padding: "0 0 1em 0", textAlign: "left" }}
          >
            Stock Disponible: {stock}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${price}
          </Typography>
        </div>

        <div>
          {quantityAdded > 0 ? (
            <div className="controls">
              <Link to="/cart" className="goCart">
                Ver Carrito
              </Link>
            </div>
          ) : (
            <ItemCount inicial={0} stock={stock} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
