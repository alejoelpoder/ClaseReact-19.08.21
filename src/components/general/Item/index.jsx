import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({titulo, urlFoto, precio, id}) => {

    return(
        <article className="ProductCart">
            <img src={urlFoto} alt="Mi producto de prueba"/>
            <h3>{titulo}</h3>
            <div>
                {/* <p>{descripcion}</p> */}
                <span className='item_precio'>{`$${precio}`}</span>
                <Link to={`/detail/${id}`}>
                    <button className="buttonVerMas">Ver detalle</button>
                </Link>
                {/* <span className='item_stock'>{`${stock} en existencia`}</span> */}
            </div>
        </article>
    )
}

export default Item;