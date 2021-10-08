import firebase from "firebase"
import 'firebase/firestore'
import { useCartContext } from "../context/cartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

const Cart = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })

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

    const generarOrden = (e) => {

        e.preventDefault()

        let order = {};

        order.fecha = firebase.firestore.Timestamp.fromDate( new Date() );
        order.buyer = formData
        order.total = precio
        order.items = cartList.map(cartItem => {
            const id = cartItem.item.id
            const titulo = cartItem.item.titulo
            const precio = cartItem.item.precio

            return {id, titulo, precio}
        })
        console.log(order)

        const db = getFirestore();
        db.collection('orders').add(order)
        .then(res => console.log(res.id))
        .catch(err => console.log(err))
        .finally(setFormData({
            nombre: '',
            telefono: '',
            email: ''
        }))
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }
    console.log(formData)

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
                    <form id="form-checkout" action=""
                        onSubmit={generarOrden}
                        onChange={handleOnChange}
                    >
                        <input id='form-checkout-nombre' type="text" name='nombre' placeholder='Nombre' value={formData.nombre} />
                        <input type="text" name='telefono' placeholder='Telefono' value={formData.Telefono}/>
                        <input type="text" name='email' placeholder='Email' value={formData.Email}/>
                        <button>Ver orden</button>
                    </form>
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