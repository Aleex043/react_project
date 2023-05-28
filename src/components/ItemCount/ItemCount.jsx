import './ItemCount.css';
import { useState, useEffect } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const[count,setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(()=> {
        setCount(parseInt(initial));
    }, [initial])


  return (
    <>
        <div className='btn'>
            <button disabled={count<=1} onClick={decrease} className='btn-counter'>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase} className='btn-counter'>+</button> 
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className='btn-add'>Agregar al carrito</button>
            </div>
        </div>
    </>
  )
}

export default ItemCount