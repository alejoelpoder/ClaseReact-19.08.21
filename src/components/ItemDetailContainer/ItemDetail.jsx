import "./ItemDetail.css"
import ItemCount from "../general/ItemCount"
import { useState } from "react";
import { useCartContext } from "../context/cartContext";


const ItemDetail = ({titulo, urlFoto, descripcion, precio, item}) => {

    const [qty, setQty] = useState(1)
    const [datastock, setDatastock] = useState(10)
    const [buttoncart, setButtoncart] = useState(true)
    const {addToCart} = useCartContext()

    const onAdd = () => {
        if(buttoncart) {
            setDatastock(datastock - qty)
            setQty(1)
            setButtoncart(!buttoncart)
        }
        addToCart({item: item, cantidad: qty})
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
            </div>
        </div>
    )
}

export default ItemDetail;