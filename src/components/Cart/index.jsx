import './Cart.css'
import 'firebase/firestore'
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
        <div className='cart-process-cont'>
            {
                Object.keys(cartList).length !== 0 ?
                <>
                    {cartList.map(item => 
                        <>
                            <div className="elemento-cart">
                                <img src={item.item.urlFoto} alt="" />
                                <h2>{`Producto: ${item.item.titulo}`}</h2>
                                <p className="cart-item-cargos">{`Precio: $${item.item.precio}`}</p>
                                <p className="cart-item-cargos">{`Cantidad: ${item.cantidad}`}</p>
                                <p className="cart-item-cargos">{`Total: $${item.item.precio * item.cantidad}`}</p>
                                <button onClick={() => borrarProducto(item)}>Borrar producto</button>
                            </div>
                        </>)}
                    <div className="precio-total">
                        <p>{`Precio total: $${precio}`}</p>
                    </div>
                    <div className="end-cart">
                        <Link to='./Checkout'>
                            <button>Checkout</button>
                        </Link>
                        <button onClick={borrarCarrito}>Borrar carrito</button>
                    </div>
                </>:
                <>
                    <p>No hay productos en el carrito</p>
                    <Link to='/'>
                        <button>Regresar</button>
                    </Link>
                </>
            }
        </div>
    )
}

export default Cart;