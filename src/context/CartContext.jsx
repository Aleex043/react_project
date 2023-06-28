import React, {useState, useContext} from 'react';

const CartContex = React.createContext([]);

export const useCartContext = () => useContext(CartContex);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, 'quantity': newQuantity}) //ver si borrar comillas
        setCart(newCart)
    }
   console.log('carrito: ', cart);
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);


    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !==id));


    
  return (
    <CartContex.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContex.Provider>
  )
}

export default CartProvider