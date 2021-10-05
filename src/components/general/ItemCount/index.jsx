import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({onadd, qty, datastock, setQty, buttoncart}) => {
    
    return(
        <>
            <span>{`stock: ${datastock}`}</span>
            {
                buttoncart?
                <>
                    <div className="qty">
                        <button
                            className="resta"
                            disabled={qty <= 1 ? 'disabled' : null}
                            onClick={() => setQty(qty - 1)}
                        ></button>
                        <input type="text" value={qty} readOnly />
                        <button
                            className="suma"
                            disabled={qty >= {datastock} ? 'disabled' : null}
                            onClick={() => setQty(qty + 1)}
                        ></button>
                    </div>
                    <button
                        disabled={datastock === 0 ? 'disabled' : null}
                        className="addBtn"
                        onClick={onadd}
                    >Agregar al carrito</button>
                </>
                :
                <Link to={'/Cart'}>
                    <button>Ir al carrito</button>
                </Link>
            }
        </>
    )
}

export default ItemCount;