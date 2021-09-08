import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({titulo, stock}) => {

    const [qty, setQty] = useState(1)
    const [datastock, setDatastock] = useState(stock)

    const onAdd = () => {
        alert(`Agregaste ${qty} ${titulo}`)
        setDatastock(datastock - qty)
        setQty(1)
    }

    return(

        <>
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
            <button
                disabled={datastock === 0 ? 'disabled' : null}
                className="addBtn"
                onClick={onAdd}
            >Agregar al carrito</button>
        </>
    )
}

export default ItemCount;