import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Commons/Spinner/Spinner"
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig.jsx'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {itemID} = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    const docRef = doc(db, 'streetwear', itemID)

    getDoc(docRef)
    .then(response =>{
      const data = response.data()
      const productAdapted = { id: response.id, ...data }
      setProduct(productAdapted)
    })
    .catch(e => {
      console.log(e)
    }).finally(()=>{
      setIsLoading(false)
    })

  }, [itemID]);

  if (isLoading) return <Spinner isLoading={isLoading}/>

  return (
    <div className="itemList">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
