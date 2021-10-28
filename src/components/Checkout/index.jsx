import './Checkout.css'
import { useCartContext } from "../context/cartContext";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase"
import 'firebase/firestore'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {

    const [pedidos, setPedidos] = useState([])
    const [endCheckout, setEndCheckout] = useState(true)
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    })
    const [precio, setPrecio] = useState(0)

    const { orderId, cartList, xd, borrarCarrito } = useCartContext()

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
            const cantidad = cartItem.cantidad

            return {id, titulo, precio, cantidad}
        })
        

    const db = getFirestore();
        db.collection('orders').add(order)
        .then((res) => xd(res.id))
        .catch(err => console.log(err))
        .finally(() =>
            setFormData({
                nombre: '',
                apellido: '',
                telefono: '',
                email: ''
            })
        )

        setEndCheckout(false)
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('orders')

        traer.get().then(({docs}) => {
            setPedidos(docs.map(producto => ({id: producto.id, ...producto.data()})))
        })
        console.log('pedidos')
        console.log(pedidos)
    }, [endCheckout])

    useEffect(() => { 
        darPrecioTotal()
    }, [cartList]);

    return (
        endCheckout?
        <>
            
            {
                <div className="checkout-box">
                    <div className='cont-ch'>
                        <h2>Checkout</h2>
                        <form id="form-checkout" action=""
                            onSubmit={generarOrden}
                            onChange={handleOnChange}
                        >
                            <input required type="text" name='nombre' placeholder='Nombre' value={formData.nombre} />
                            <input required type="text" name='apellido' placeholder='Apellido' value={formData.apellido} />
                            <input required type="text" name='telefono' placeholder='Telefono' value={formData.telefono}/>
                            <input required type="text" name='email' placeholder='Email' value={formData.email}/>
                            <input required type="text" name='second-email' placeholder='Repetir Email'/>
                            <button>Generar orden</button>
                        </form>
                    </div>
                    <div className='cont-ch'>
                        <h2>Detalles del pedido</h2>
                        {cartList.map(item => 
                            <>
                                <div>
                                    <p><b>{item.item.titulo}</b> x <b>{item.cantidad}</b>: <b>${item.item.precio * item.cantidad}</b>, <b>${item.item.precio}</b> cada uno</p>
                                </div>
                            </>)}
                        <p>Envio <b>gratuito</b></p>
                        <p>Precio total: <b>${precio}</b></p>
                    </div>
                </div>
            }
        </>:
        orderId?
        <>
            <div className="detalles-de-orden">
                <h2>Detalles de tu orden</h2>
                    <p className="detalles-de-orden-subt">Cliente</p>
                    {
                        pedidos.filter(item => item.id === orderId).map(item => (
                            <>
                                <p>ID de la order: <b>{item.id}</b></p>
                                <p>Nombre del cliente: <b>{item.buyer?.nombre} {item.buyer?.apellido}</b></p>
                                <p>Email del cliente: <b>{item.buyer?.email}</b></p>
                                <p>Teléfono del cliente: <b>{item.buyer?.telefono}</b></p>
                            </>
                        ))
                    }
                    <p className="detalles-de-orden-subt">Productos</p>
                    {
                        pedidos.filter(item => item.id === orderId).map(item => (
                            <div>
                                {item.items.map(items => (
                                    <div className="detalles-sub-box">
                                        <p>Nombre del producto: <b>{items.titulo}</b></p>
                                        <p>Cantidad: <b>{items.cantidad}</b></p>
                                        <p>Precio por unidad: <b>${items.precio}</b></p>
                                    </div>
                                ))}

                                <p className="total-a-pagar-ch">
                                    Total a pagar: <b>${item.total}</b>
                                </p>
                            </div>
                        ))
                    }
            </div>
            <Link to='/'>
                <button className="regresar-ch-btn" onClick={borrarCarrito}>Regresar</button>
            </Link>
        </>:
        <p>Creando orden...</p>
    )
}

export default Checkout