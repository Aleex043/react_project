import './App.css'
import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={<Banner/>} />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App