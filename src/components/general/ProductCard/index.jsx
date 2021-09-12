import "./ProductCard.css";
import ItemCount from "../ItemCount";

const ProductCard = ({titulo, stock, urlFoto}) => {

    return(
        <article className="ProductCart">
            <img src={urlFoto} alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <ItemCount titulo={titulo} stock={stock}  />
            </div>
        </article>
    )
}

export default ProductCard;