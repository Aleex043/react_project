import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  return (
    <article className='cards'>
        <header>
            <h2 className='cards-name'>{info.name}</h2>
        </header>
        <picture>
            <img className='cards-img' src={info.img} alt={info.name} />
        </picture>
        <section>
            <p className='cards-info'>Precio: ${info.price}</p>
            <p className='cards-info'>Stock disponible: {info.stock}</p>
        </section><br />
        <footer>
            <Link to={`/detalle/${info.id}`} className='cards-details'>Ver detalles</Link>
        </footer>
    </article>
  )
}

export default Item