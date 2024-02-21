import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
  descrption,
  img,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
      stock,
    }
    addItem(item, quantity)
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={descrption} height="300" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoria: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripción: {descrption}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock Disponible: {stock}
        </Typography>
      </CardContent>
      <div>
        {quantityAdded > 0 ? (
          <div className="counter">
            <Link to="/cart" className="goCart">
              Ver Carrito
            </Link>
          </div>
        ) : (
          <ItemCount inicial={0} stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </Card>
  );
};

export default ItemDetail;
