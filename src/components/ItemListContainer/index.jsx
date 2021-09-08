import "./ItemListContainer.css";
import ProductCard from "../general/ProductCard";
import ItemList from "../ItemList";

const ItemListContainer = () => {

    const products = [
        {
            id:1,
            titulo: 'producto1',
            descripcion: 'lorem ipsum bla bla bla este producto es muy bueno, comprelo, lleve joven, compre que está bien bonito.',
            precio: 300,
            urlFoto: 'https://via.placeholder.com/300/09f/fff.png',
            stock: 10
        },
        {
            id:2,
            titulo: 'producto2',
            descripcion: 'Este es el mejo producto del mundo porque fue forjado por los elfos noldor durante los días de la edad de los arboles.',
            precio: 400,
            urlFoto: 'https://via.placeholder.com/300/09f/fff.png',
            stock: 15
        },
        {
            id:3,
            titulo: 'producto3',
            descripcion: 'lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',
            precio: 750,
            urlFoto: 'https://via.placeholder.com/300/09f/fff.png',
            stock: 70
        }
    ]

    return(
        <div className="ItemListContainer">
            <div className="Itemcontainer">
                <ProductCard titulo={'Casco soviético'} stock={17} />
                <ProductCard titulo={'Motór de propulsión'} stock={5} />
            </div>
            <div className="Itemcontainer">
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;