import "./ItemList.css";
import { useState, useEffect } from 'react';
import Item from "../general/Item";
import { getFirestore } from "../../services/getFirebase";

const ItemList = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('items')

        traer.get().then(({docs}) => {
            setItem(docs.map(producto => ({id: producto.id, ...producto.data()})))
        })
        
    }, [])

    return(
        <div className="ItemList">
            {
                    item.length?
                    <>
                        <h2>Mejores productos</h2>

                        <ul>
                            {
                                item.map(item => (
                                    <li key={item.id}>
                                        <Item 
                                            titulo={item.titulo}
                                            urlFoto={item.urlFoto}
                                            descripcion={item.descripcion}
                                            precio={item.precio}
                                            stock={item.stock}
                                            id={item.id}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando items ...</p>
                }
        </div>
    )
}

export default ItemList;