import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";

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
      <ItemCount
        inicial={0}
        stock={stock}
        onAdd={(quantity) => console.log("cantidad agregada", quantity)}
      />
    </Card>
  );
};

export default ItemDetail;
