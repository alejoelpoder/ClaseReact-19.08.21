import "./ItemListContainer.css";
import ProductCard from "../general/ProductCard";

const ItemListContainer = ({text}) => {
    return(
        <div className="ItemListContainer">
            <ProductCard titulo={'Casco soviético'} stock={17} />
            <ProductCard titulo={'Motór de propulsión'} stock={5} />
        </div>
    )
}

export default ItemListContainer;