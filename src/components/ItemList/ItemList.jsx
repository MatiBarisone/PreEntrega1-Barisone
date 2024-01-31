import React from "react";
import "./itemList.css";
import Item from "../Item/Item";

function ItemList({products}) {
  return (
    <div className="listGroup">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default ItemList;
