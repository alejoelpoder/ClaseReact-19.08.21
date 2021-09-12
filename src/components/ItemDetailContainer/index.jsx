import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    const products = [
        {
            id:1,
            titulo: 'Casco soviético',
            descripcion: 'Lorem ipsum bla bla bla este producto es muy bueno, comprelo, lleve joven, compre que está bien bonito.',
            precio: 300,
            urlFoto: 'https://preview.free3d.com/img/2020/05/2324859450445268195/zus32lda-900.jpg',
            stock: 10
        },
        {
            id:2,
            titulo: 'Palantír',
            descripcion: 'Este es el mejo producto del mundo porque fue forjado por los elfos noldor en los días de la edad de los arboles.',
            precio: 400,
            urlFoto: 'https://i.pinimg.com/originals/f9/73/8a/f9738aa9f70100d28ad3a9088321d873.jpg',
            stock: 15
        },
        {
            id:3,
            titulo: 'Motór de propulsión',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
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