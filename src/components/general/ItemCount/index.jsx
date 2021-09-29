import "./ItemCount.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({onadd, qty, datastock, setQty, buttoncart}) => {

    // onadd = (e) => {
    //     console.log(e)
    // }

    // const [qty, setQty] = useState(1)
    // const [datastock, setDatastock] = useState(stock)

    // const onAdd = () => {
    //     alert(`Agregaste ${qty} ${titulo}`)
    //     setDatastock(datastock - qty)
    //     setQty(1)
    // }
    
    

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
                    <button

                    >Ir al carrito</button>
                </Link>
                // <a href="../../Cart">
                //     <button
                //         disabled={datastock === 0 ? 'disabled' : null}
                //         className="addBtn"
                //         onClick={onadd}
                //     >Ir al carrito</button>
                // </a> 
            }
            
        </>
    )
}

export default ItemCount;