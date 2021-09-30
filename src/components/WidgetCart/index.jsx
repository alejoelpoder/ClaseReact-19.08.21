import "./WidgetCart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { useState, useEffect } from "react";

const WidgetCart = () => {

    const { cartList } = useCartContext()

    const [cantidad, setCantidad] = useState()

    const darCantidad = () => {
        const cantidadArr = []
        let suma = 0
        for (let i = 0; i < cartList.length; i++) {
            cantidadArr[i] = cartList[i].cantidad;
        }
        cantidadArr.forEach (function(num) {
            suma += num;
        })
        console.log(suma)
        setCantidad(suma)
        console.log()
    }

    useEffect(() => { 
        darCantidad()
    }, [cartList]);

    return(
        <div className={`widgetCart ${cantidad? 'cart-open' : 'cart-close'}`}>
            <Link to={'/Cart'}>
                <img src="https://image.flaticon.com/icons/png/512/3144/3144456.png" alt="widget cart" />
            </Link>
            <span className="cantidadProductos">
                {cantidad}
            </span>
        </div>
    )
}

export default WidgetCart;