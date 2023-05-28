import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({data}) => {


  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades de ${data.name} al carrito`)
}

  return (
    <div className="details-container">
        <div className="detail">
            <img src={data.img} alt={data.name} className="detail-img" />
            <div className="detail-content">
              <h2 className='detail-title'>{data.name}</h2>
              <h2>{data.category}</h2>
              <h2>{data.description}</h2>
              <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
            </div>
        </div>
    </div>
    
  )
}

export default ItemDetail