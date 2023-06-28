import {Timestamp, addDoc, collection, getFirestore, writeBatch} from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useState } from 'react';

const Checkout = () => {
  const {cart, totalPrice, clearCart} = useCartContext();

  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)

  const db = getFirestore();
  const batch = writeBatch(db);

  const createOrder = async({name,phone,email})=>{
    setLoading(true)

    try{
      const objOrder = {
        buyer:{
          name,phone,email
        },
        items:cart.map(product => ({id:product.id, name:product.name,price:product.price,quantity:product.quantity})) ,
        total: totalPrice() ,
        date: Timestamp.fromDate(new Date())
      }

      if(cart.length !== 0){
        await batch.commit()

        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()
      }

    } catch (error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  if(loading){
    return <h1>se esta generando su orden...</h1>
  }

  if(orderId){
    return <h1> el id de su orden es {orderId}</h1>
  }

  return (
    <CheckoutForm onConfirm={createOrder} />
  )
}

export default Checkout