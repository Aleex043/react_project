import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={<Banner/>} />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App