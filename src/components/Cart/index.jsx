import { useCartContext } from "../context/cartContext";

const Cart = () => {

    const { cartList, borrarProducto, borrarCarrito } = useCartContext()

    return(
        <>
            {cartList.map(item => <><h2>{item.item.titulo}</h2><span>{item.cantidad}</span><button onClick={() => borrarProducto(item)}>Borrar producto</button></>)}
            <br />
            <button onClick={borrarCarrito}>Borrar carrito</button>
        </>
    )
}

export default Cart;