import "./ProductCard.css";
import ItemCount from "../ItemCount";
import { useState } from "react";

const ProductCard = ({titulo, stock, urlFoto}) => {

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
        <article className="ProductCart">
            <img src={urlFoto} alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <ItemCount titulo={titulo} stock={stock} onadd={onAdd} qty={qty} datastock={datastock} setQty={setQty} buttoncart={buttoncart} />
            </div>
        </article>
    )
}

export default ProductCard;