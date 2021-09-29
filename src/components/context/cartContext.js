import { useState, createContext, useContext } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const existeEnCarrito = (id) => cartList.find(item => item.item.id === id)

    const addToCart = (item) => {

        const nuevoCartList = [...cartList];

        const verificarProducto = existeEnCarrito((item.item.id))

        console.log(verificarProducto)

        if(verificarProducto) {
            nuevoCartList[nuevoCartList.findIndex(item => item.item.id === verificarProducto.item.id)].cantidad = nuevoCartList[nuevoCartList.findIndex(item => item.item.id === verificarProducto.item.id)].cantidad + item.cantidad
            setCartList(nuevoCartList)

            console.log(cartList)

            return;
        }

        // item.cantidad = 1;

        setCartList([...nuevoCartList, item])
        // setCartList([...cartList, item])
    }

    const borrarProducto = (item) => {
        const nuevoCartList = [...cartList];

        const verificarProducto = existeEnCarrito((item.item.id))
        
        const productosRestantes = nuevoCartList.filter(item => item.item.id !== verificarProducto.item.id)

        setCartList(productosRestantes)
    }

    const borrarCarrito = () => setCartList([])

    // console.log(cartList)

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            borrarProducto,
            borrarCarrito
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
