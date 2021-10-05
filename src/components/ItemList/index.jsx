import "./ItemList.css";
import { useState, useEffect } from 'react';
import Item from "../general/Item";

const ItemList = ({products}) => {

    const[items, setItems] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    useEffect(() => {
        getProducts.then(res => setItems(res))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="ItemList">
            {
                    items.length?
                    <>
                        <h2>Mejores productos</h2>

                        <ul>
                            {
                                items.map(item => (
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