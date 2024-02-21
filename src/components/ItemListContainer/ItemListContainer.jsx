import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import {
  getProducts,
  getProductByCategory,
  getProductBySubcategory
} from "../../serverMock/productMock";
import { useParams } from "react-router-dom";
import Spinner from "../Commons/Spinner/Spinner";

function ItemListContainer({ greeting, greetingText }) {
  const [products, setProducts] = useState([]);
  const { categoryID, subcategoryID } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let asyncFunc;

    if (categoryID) {
      asyncFunc = getProductByCategory;
    } else if (subcategoryID) {
      asyncFunc = getProductBySubcategory;
    } else {
      asyncFunc = getProducts;
    }

    setIsLoading(true);
    asyncFunc(categoryID || subcategoryID)
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, [categoryID, subcategoryID, setIsLoading]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

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
