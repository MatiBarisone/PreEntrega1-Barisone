import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../../serverMock/productMock";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting , greetingText }) {
  const [products, setProducts] = useState([]);

  const {categoryID} = useParams();

  useEffect(() => {
    
    const asyncFunc = categoryID ? getProductByCategory : getProducts
    
    asyncFunc(categoryID)
      .then((response) => {
        setProducts(response);
        console.log(response)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [categoryID]);

  return (
    <div className="itemList">
      <div>
        <h1>{greeting}</h1>
      </div>
      <div>
        <p>{greetingText}</p>
      </div>
      <div>
        <ItemList products={products} />
      </div>
    </div>
  );
}

export default ItemListContainer;
