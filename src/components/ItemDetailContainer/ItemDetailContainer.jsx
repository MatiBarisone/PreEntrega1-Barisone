import React, { useEffect, useState } from "react";
import { getProductByID } from "../../serverMock/productMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const {itemID} = useParams();

  useEffect(() => {
    getProductByID(parseInt(itemID))
      .then((response) => {
        setProduct(response);
        console.log(typeof itemID)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [itemID]);

  return (
    <div className="itemList">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
