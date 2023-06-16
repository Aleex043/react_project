import { useCartContext } from '../../context/CartContext';
import './ItemCart.css';
import React from 'react';

const ItemCart = ({product}) => {
const {removeProduct} = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div>
            <p>Nombre: {product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.price}</p>
            <p>Subtotal: ${product.quantity * product.price} </p>
            <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart