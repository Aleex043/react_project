import React, {Fragment, useState} from 'react'

const Contact = ({onConfirm}) => {

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
    <Fragment>
      <div className='container mt-5'>
        <h1>FORMULARIO</h1>
        <form className='row' onSubmit={handleConfirm}>

          <div className='col-md-3'>
            <input 
              type="text" 
              placeholder='Ingrese nombre'
              className='form-control' 
              value={name}
              onChange={({target}) => setName(target.value)} />
          </div>

          <div className='col-md-3'>
            <input 
              type="text" 
              placeholder='Ingrese Apellido'
              className='form-control' 
              value={phone}
              onChange={({target}) => setPhone(target.value)} 
              />
          </div>

          <div className='col-md-3'>
            <input 
              type="email" 
              placeholder='Ingrese Apellido'
              className='form-control' 
              value={email}
              onChange={({target}) => setEmail(target.value)} 
              />
          </div>

          <div className='col-md-3'>
            <button className='btn btn-primary' type='submit'>Crear orden</button>
          </div>
        </form>
      </div>

    </Fragment>
  )
}

export default Contact








// import React, {Fragment, useState} from 'react'

// const Contact = ({onConfirm}) => {

//   const [datos, setDatos] = useState({
//     nombre: '',
//     apellido:'',
//   })

//   const handleInputChange = (event) =>{
//     // console.log(event.target.value)
//     setDatos({
//       ...datos,
//       [event.target.name] : event.target.value
//     })
//   }

//   const enviarDatos = (event) => {
//     event.preventDefault();
//     console.log(datos.nombre + ' ' + datos.apellido)
//   }

//   return (
//     <Fragment>
//       <div className='container mt-5'>
//         <h1>FORMULARIO</h1>
//         <form className='row' onSubmit={enviarDatos}>

//           <div className='col-md-3'>
//             <input 
//               type="text" 
//               placeholder='Ingrese nombre'
//               className='form-control' 
//               name='nombre'
//               onChange={handleInputChange} />
//           </div>

//           <div className='col-md-3'>
//             <input 
//               type="text" 
//               placeholder='Ingrese Apellido'
//               className='form-control' 
//               name='apellido'
//               onChange={handleInputChange} 
//               />
//           </div>

//           <div className='col-md-3'>
//             <button className='btn btn-primary' type='submit'>Enviar</button>
//           </div>

//         </form>
//       </div>

//     <h3>{datos.nombre}-{datos.apellido}</h3>

//     </Fragment>
//   )
// }

// export default Contact