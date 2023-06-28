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
      <Link className="btn-checkout" to='/checkout'>Checkout</Link>
    </>
  )
}

export default Cart