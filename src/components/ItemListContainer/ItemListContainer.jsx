import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"


export const products = [
    {
        id: 1,
        name: 'RUTINI',
        price: 5200,
        category: 'Categoria: Vino tinto Malbec',
        img: '/src/assets/vino.png',
        stock: 23,
        description: 'Rojo violáceo muy profundo. Los intensos aromas frutados se presentan entremezclados con otros propios de la crianza en roble nuevo (vainilla, ahumados, tostados).'
    },
    {
        id: 2,
        name: 'ABSOLUT',
        price: 6300,
        category: 'Categoria: Destilado',
        img:'/src/assets/vodka.png',
        stock: 15,
        description: 'Absolut Vodka Original Elaborado Con Ingredientes Naturales, Sin Azucares Añadidos En Presentación Botella Cilíndrica Transparente, Contenido 750 ML 40.0 % De Alcohol'
    },
    {
        id: 3,
        name: 'CORONA',
        price: 650,
        category: 'Categoria: Cerveza',
        img:'/src/assets/cerveza.png',
        stock: 54,
        description: 'Corona es la cerveza mexicana de mayor venta en el mundo y la marca más valiosa de Latinoamérica. Es una cerveza tipo Pilsner de 4.5º de alcohol. Se enfoca en la gente que busca relajarse y refrescarse.'
    },
    {
        id: 4,
        name: 'JOHNNIE WALKER',
        price: 13500,
        category: 'Categoria: WHISKY',
        img:'/src/assets/whisky.png',
        stock: 31,
        description: 'Johnnie Walker Black Label fue creado usando sólo whiskies con un mínimo de 12 años de añejamiento de los 4 rincones de Escocia, tiene un inconfundible carácter profundo, suave y complejo.'
    }
];


const ItemListContainer = ({greeting}) => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products);
            },500);
        })
        getData.then(res => setData(res))
    }, [])

  return (
    <>
        <div>{greeting}</div>
        <ItemList data={data}/> 
    </>
  )
}

export default ItemListContainer