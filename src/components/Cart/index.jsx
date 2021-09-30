import { useCartContext } from "../context/cartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartList, borrarProducto, borrarCarrito } = useCartContext()

    const [precio, setPrecio] = useState(0)

    const darPrecioTotal = () => {
        const precioArr = []
        let suma = 0
        for (let i = 0; i < cartList.length; i++) {
            precioArr[i] = cartList[i].item.precio * cartList[i].cantidad;
        }
        precioArr.forEach (function(num) {
            suma += num;
        })
        setPrecio(suma)
    }

    useEffect(() => { 
        darPrecioTotal()
    }, [cartList]);

    return(
        <>
            {
                Object.keys(cartList).length !== 0 ?
                <>
                    {cartList.map(item => <><h2>{item.item.titulo}</h2><span>{`$${item.item.precio} x `}</span><span>{item.cantidad}</span><button onClick={() => borrarProducto(item)}>Borrar producto</button></>)}
                    <br /><br />
                    {`El precio total es: $${precio}`}
                    <br /><br />
                    <button onClick={borrarCarrito}>Borrar carrito</button>
                </>:
                <>
                    <p>No hay productos en el carrito</p>
                    <Link to='/'>
                        <button>Regresar</button>
                    </Link>
                </>
            }
        </>
    )
}

export default Cart;