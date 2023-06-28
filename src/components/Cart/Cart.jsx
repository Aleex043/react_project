import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="empty-car">
        <p>No hay productos en el carrito</p>
        <Link to='/productos'>Ir a productos</Link>
      </div>
    )
  }

  return (
    <>
      {cart.map(product => <ItemCart key={product.id} product={product} /> )}
      <p className="precioTotal">Total a pagar: ${totalPrice()}</p>
      <Link to='/checkout'>Ir a productos</Link>
    </>
  )
}

export default Cart

















// import {addDoc, collection, getFirestore} from 'firebase/firestore'
// import { Link } from "react-router-dom";
// import { useCartContext } from "../../context/CartContext";
// import ItemCart from "../ItemCart/ItemCart";

// const Cart = () => {
//   const {cart, totalPrice} = useCartContext();

//   const order = {
//     buyer:{
//       name: 'Alexis',
//       email: 'alexis@gmail.com',
//       phone: '12121212',
//       address: 'asdasdasdasd'
//     },
//     items:cart.map(product => ({id:product.id, name:product.name,price:product.price,quantity:product.quantity})) ,
//     total: totalPrice() ,
//   }
//   const clickBuy = () =>{
//     const db = getFirestore();
//     const ordersCollection = collection(db, 'orders');
//     addDoc(ordersCollection,order)
//     .then(({id}) => alert("el id de su orden es: " + id)) 
//   }

//   if (cart.length === 0) {
//     return (
//       <div className="empty-car">
//         <p>No hay productos en el carrito</p>
//         <Link to='/productos'>Ir a productos</Link>
//       </div>
//     )
//   }

//   return (
//     <>
//       {cart.map(product => <ItemCart key={product.id} product={product} /> )}
//       <p className="precioTotal">Total a pagar: ${totalPrice()}</p>
//       <div className='buyContainer'>
//         <button className='clickBuy' onClick={clickBuy}>Emitir Compra</button>
//       </div>
//     </>
//   )
// }

// export default Cart