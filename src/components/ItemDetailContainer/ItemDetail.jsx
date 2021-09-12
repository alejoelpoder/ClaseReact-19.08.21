import "./ItemDetail.css"


const ItemDetail = ({titulo, urlFoto, descripcion, precio}) => {

    return(
        <div className="productDetail">
            <div className="productDetailRow">
                <h3>{titulo}</h3>
                <img src={urlFoto} alt="Mi producto de prueba"/>
            </div>
            <div className="productDetailRow">
                <p>{descripcion}</p>
                <span className='ItemDetail_precio'>{`$${precio}`}</span>
                <a href="../carrito"><button className="buttonAgregarCarrito">Agregar al carrito</button></a>
            </div>
        </div>
    )
}

export default ItemDetail;