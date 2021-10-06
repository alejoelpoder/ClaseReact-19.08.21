import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../services/getFirebase";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('items')

        traer.get().then(({docs}) => {
            setProduct(docs.map(producto => ({id: producto.id, ...producto.data()})))
        })
        
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