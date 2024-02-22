import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({
  id,
  name,
  stock,
  category,
  subcategory,
  price,
  description,
  img,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={description} height="300" image={img} sx={{ padding: "1em 0 1em 0", objectFit: "contain"}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock Disponible: {stock}
        </Typography>
      </CardContent>
      <div className="detailContainer">
        <Link to={`/item/${id}`} >
          <button>Ver Detalle</button>
        </Link>
      </div>
    </Card>
  );
};

export default Item;
