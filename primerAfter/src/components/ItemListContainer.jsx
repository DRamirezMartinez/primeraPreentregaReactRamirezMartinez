/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import Carrousel from "./Carrousel";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
              resolve(id ? arrayProductos.filter(item => item.categoria === id): arrayProductos);  
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);            
        })
    }, [id]);


    return (
        <>
         {id ? "" : <Carrousel/> }
        <ItemList items= {items} />        
        </>
      
           
    )
}
export default ItemListContainer; 