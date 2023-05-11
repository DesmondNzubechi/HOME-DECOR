import React from "react";
import { useReducer, createContext } from "react";

export const CartContext = createContext();



const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': 
     const checkProduct = state.find(product => product.id === action.payload.id);
     if (checkProduct) {
        return state.map(product => product.id === action.payload.id ?
            {...product, quantity: product.quantity + 1}:
            product
            );
        } else {
        return [...state, {...action.payload, quantity: 1}]
     }
     break;
     case 'removeFromCart':
        return state.filter(product => product.id !== action.payload);
    
            break;
    
        default:
           return state;
    }
}


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}