import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <section className='form'>
            <form action="">
                <div>
                    <h2 className='form-title'>Contactenos</h2>
                </div>
                <label className='form-label' htmlFor="nombre">Nombre</label>
                <input className='form-input' type="text" id='nombre' />
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-input' type="email" id='email' />
                <label className='form-label' htmlFor="telefono">Telefono</label>
                <input className='form-input' type="number" id='telefono' />
                <label className='form-label' htmlFor="consulta"></label>
                <textarea className='form-textarea' id="consulta" placeholder='Escriba su consulta...'></textarea>
                <input className='form-submit' type="submit" value="Enviar" />
            </form>
        </section>
    </div>
  )
}

export default Contact