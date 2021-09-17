import "./ItemDetail.css"
import ItemCount from "../general/ItemCount"
import { useState } from "react";


const ItemDetail = ({titulo, urlFoto, descripcion, precio}) => {

    const [qty, setQty] = useState(1)
    const [datastock, setDatastock] = useState(10)
    const [buttoncart, setButtoncart] = useState(true)

    const onAdd = (e) => {
        if(buttoncart) {
            alert(`Agregaste ${qty} ${titulo}`)
            setDatastock(datastock - qty)
            setQty(1)
            setButtoncart(!buttoncart)
        }
    }

    return(
        <div className="productDetail">
            <div className="productDetailRow">
                <h3>{titulo}</h3>
                <img src={urlFoto} alt="Mi producto de prueba"/>
            </div>
            <div className="productDetailRow">
                <p>{descripcion}</p>
                <span className='ItemDetail_precio'>{`$${precio}`}</span>
                <ItemCount titulo={titulo} stock={10} onadd={onAdd} qty={qty} datastock={datastock} setQty={setQty} buttoncart={buttoncart} />
                {/* <a href="../carrito"><button className="buttonAgregarCarrito">Agregar al carrito</button></a> */}
            </div>
        </div>
    )
}

export default ItemDetail;