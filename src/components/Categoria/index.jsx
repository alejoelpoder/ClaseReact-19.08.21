import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Item from "../general/Item"
import { getFirestore } from "../../services/getFirebase";

const Categoria = () => {

    const {cat} = useParams()

    const[items, setItems] = useState([])

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('items')

        traer.get().then(({docs}) => {
            setItems(docs.map(producto => ({id: producto.id, ...producto.data()})))
        })
        
    }, [])

    return(
        <div className="ItemList">
            {
                    items.length?
                    <>
                        <h2>Mejores productos de la categoría {cat}</h2>

                        <ul>
                            {
                                items.filter(item => item.categoria == cat).map(item => (
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

    return(
        <>
            <h1>{cat}</h1>
        </>
    )
}

export default Categoria;