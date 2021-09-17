import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Item from "../general/Item"

const Categoria = () => {

    const products = [
        {
            id:1,
            titulo: 'Casco soviético',
            descripcion: 'Lorem ipsum bla bla bla este producto es muy bueno, comprelo, lleve joven, compre que está bien bonito.',
            precio: 300,
            urlFoto: 'https://preview.free3d.com/img/2020/05/2324859450445268195/zus32lda-900.jpg',
            stock: 10,
            categoria: 'cascos'
        },
        {
            id:2,
            titulo: 'Palantír',
            descripcion: 'Este es el mejo producto del mundo porque fue forjado por los elfos noldor en los días de la edad de los arboles.',
            precio: 400,
            urlFoto: 'https://i.pinimg.com/originals/f9/73/8a/f9738aa9f70100d28ad3a9088321d873.jpg',
            stock: 15,
            categoria: 'cascos'
        },
        {
            id:3,
            titulo: 'Casco de propulsión',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'cascos'
        },
        {
            id:4,
            titulo: 'Motor de propulsión',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'cohetes'
        },
        {
            id:5,
            titulo: 'Motor de Cohete',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'cohetes'
        },
        {
            id:6,
            titulo: 'Motor',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'motores'
        },
        {
            id:7,
            titulo: 'Motor 2',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'motores'
        },
        {
            id:8,
            titulo: 'Motor 3',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'motores'
        },
        {
            id:9,
            titulo: 'Motor 4',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'motores'
        },
        {
            id:10,
            titulo: 'Promo',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'ofertas'
        },
        {
            id:11,
            titulo: 'Traje de propulsión',
            descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',
            stock: 70,
            categoria: 'trajes'
        }
    ]

    const {cat} = useParams()

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

    console.log(items)

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