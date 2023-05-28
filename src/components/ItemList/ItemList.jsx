import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({data = []}) => {
  return (
    <div className='item-list'>
        {data.map(prod => <Item key={prod.id} info={prod}/>)}
    </div>
  )
}

export default ItemList