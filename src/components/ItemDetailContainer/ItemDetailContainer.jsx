import ItemDetail from '../ItemDetail/ItemDetail';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../ItemListContainer/ItemListContainer';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(()=>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products);
            },10);
        });
        getData.then(res => setData(res.find(prod => prod.id === parseInt(detalleId))))
    }, [])

  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer