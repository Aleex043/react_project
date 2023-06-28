import '../CheckoutForm/CheckoutForm.css'
import React, {useState} from 'react'

const CheckoutForm = ({onConfirm}) => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleConfirm = (event) =>{
    event.preventDefault()
    const userData = {
      name,phone,email
    }
    onConfirm(userData)
  }

  return (
    <>
        <div className='checkout-form'>
            <form className='form' onSubmit={handleConfirm}>
                <h1 className='form-title'>Checkout</h1>
                <div>
                    <label className='form-label'>Nombre</label>
                    <input 
                    type="text" 
                    className='form-input' 
                    value={name}
                    onChange={({target}) => setName(target.value)} />
                </div>
                <div>
                    <label className='form-label'>Telefono</label>
                    <input 
                    type="text" 
                    className='form-input' 
                    value={phone}
                    onChange={({target}) => setPhone(target.value)} />
                </div>
                <div>
                    <label className='form-label'>Email</label>
                    <input 
                    type="email" 
                    className='form-input' 
                    value={email}
                    onChange={({target}) => setEmail(target.value)} />
                </div>
                <div>
                    <button className='form-submit' type='submit'>Crear orden</button>
                </div>
        </form>
      </div>
    </>
  )
}

export default CheckoutForm