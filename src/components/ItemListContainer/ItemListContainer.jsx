import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Commons/Spinner/Spinner";

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig.jsx'

function ItemListContainer({ greeting, greetingText }) {
  const [products, setProducts] = useState([]);
  const { categoryID, subcategoryID } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    let collectionRef;
    if (categoryID) {
      collectionRef = query(collection(db, 'streetwear'), where('category', '==', categoryID));
    } else if (subcategoryID) {
      collectionRef = query(collection(db, 'streetwear'), where('subcategory', '==', subcategoryID));
    } else {
      collectionRef = collection(db, 'streetwear');
    }

    getDocs(collectionRef)
    .then(response => {
      const productAdapted = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProducts(productAdapted)
    })
    .catch(e =>{
      console.log(e)
    })
    .finally(() =>{
      setIsLoading(false)
    })
    
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