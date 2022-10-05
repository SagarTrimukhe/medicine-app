import { createContext, useContext, useState } from "react";

const cartContext = createContext({});

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    return(
        <cartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCartItems = () =>{
     const {cartItems, setCartItems} = useContext(cartContext)
     return [cartItems, setCartItems]
}