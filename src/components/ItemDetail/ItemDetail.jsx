import './ItemDetail.css';
import React, {useState} from 'react';
import {useCartContext} from '../../context/CartContext'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
}

  return (
    <div className="details-container">
        <div className="detail">
            <img src={data.img} alt={data.name} className="detail-img" />
            <div className="detail-content">
              <h2 className='detail-title'>{data.name}</h2>
              <h2>{data.category}</h2>
              <h2>{data.description}</h2>
              {
                goToCart
                  ? <div>
                      <Link to='/cart' className='finish-buying'>Terminar Compra</Link>
                      <Link to='/productos' className='finish-buying'>Seguir comprando</Link>
                    </div>
                  : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
              }
            </div>
        </div>
    </div>
    
  )
}

export default ItemDetail