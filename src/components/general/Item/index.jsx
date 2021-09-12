import "./Item.css";

const Item = ({titulo, stock, urlFoto, descripcion, precio, id}) => {

    return(
        <article className="ProductCart">
            <h3>{titulo}</h3>
            <img src={urlFoto} alt="Mi producto de prueba"/>
            <div>
                <p>{descripcion}</p>
                <span className='item_precio'>{`$${precio}`}</span>
                <a href={`./detail/${id}`}><button className="buttonVerMas">Ver más</button></a>
                <span>{`stock: ${stock}`}</span>
            </div>
        </article>
    )
}

export default Item;