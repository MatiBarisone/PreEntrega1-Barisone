import React, { useEffect, useState } from "react";
import { getProductByID } from "../../serverMock/productMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Commons/Spinner/Spinner"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {itemID} = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getProductByID(parseInt(itemID))
      .then((response) => {
        setProduct(response);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, [itemID]);

  if (isLoading) return <Spinner isLoading={isLoading}/>

  return (
    <div className="itemList">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
