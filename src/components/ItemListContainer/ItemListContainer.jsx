import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'products');
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    }, [])

  return (
    <>
        <div>{greeting}</div>
        <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer