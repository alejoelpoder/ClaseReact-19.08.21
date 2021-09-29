import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { ContextApp } from "../../App";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const { state } = useContext(ContextApp)

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(state)
        }, 2000) 
    });

    useEffect(() => {
        getProducts.then(response => setProduct(response));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                Object.keys(product).length !== 0? //Esto es para que se considere el largo del objeto y sea false para el condicional
                <div className="container">
                    {
                        product.filter(item => item.id == id).map((item) => (
                            <ItemDetail 
                                key={item.id}
                                titulo={item.titulo}
                                urlFoto={item.urlFoto}
                                descripcion={item.descripcion}
                                precio={item.precio}
                                item={item}
                            />
                        ))
                    }
                </div> :
                <p>Cargando producto...</p>
            }
            
        </>
    )
}

export default ItemDetailContainer;