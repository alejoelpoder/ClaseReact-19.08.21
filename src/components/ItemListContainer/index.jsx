import "./ItemListContainer.css";
import ProductCard from "../general/ProductCard";
import ItemList from "../ItemList";

const ItemListContainer = () => {

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

    return(
        <div className="ItemListContainer">
            <div className="Itemcontainer">
                <ProductCard titulo={'Casco soviético'} stock={17} urlFoto={'https://preview.free3d.com/img/2020/05/2324859450445268195/zus32lda-900.jpg'}/>
                <ProductCard titulo={'Motór de propulsión'} stock={5} urlFoto={'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg'} />
            </div>
            <div className="Itemcontainer">
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;