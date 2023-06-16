import React from 'react'
import { useCartContext } from '../../context/CartContext'


export const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <i className="bi bi-cart3"><span className='cart-counter'>{totalProducts() || ''}</span></i>
  )
}

export default CartWidget