import "./ProductCard.css";
import ItemCount from "../ItemCount";

const ProductCard = ({titulo, stock}) => {

    return(
        <article className="ProductCart">
            <img src="https://via.placeholder.com/300/09f/fff.png" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <ItemCount titulo={titulo} stock={stock}  />
            </div>
        </article>
    )
}

export default ProductCard;