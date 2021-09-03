import "./ProductCard.css";
import { useState } from "react";

const ProductCard = ({titulo, stock}) => {

    const [qty, setQty] = useState(1)
    const [datastock, setDatastock] = useState(stock)

    const onAdd = () => {
        alert(`Agregaste ${qty} ${titulo}`)
        setDatastock(datastock - qty)
        setQty(1)
    }

    return(
        <article className="ProductCart">
            <img src="https://via.placeholder.com/300/09f/fff.png" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <span>{`stock: ${datastock}`}</span>
                <div className="qty">
                    <button
                        className="resta"
                        disabled={qty <= 1 ? 'disabled' : null}
                        onClick={() => setQty(qty - 1)}
                    ></button>
                    <input type="text" value={qty} readOnly />
                    <button
                        className="suma"
                        disabled={qty >= datastock ? 'disabled' : null}
                        onClick={() => setQty(qty + 1)}
                    ></button>
                </div>
            </div>
            <button
                disabled={datastock === 0 ? 'disabled' : null}
                className="addBtn"
                onClick={onAdd}
            >Agregar al carrito</button>
        </article>
    )
}

export default ProductCard;