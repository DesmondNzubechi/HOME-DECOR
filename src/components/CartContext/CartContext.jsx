import React from "react";
import { useReducer, createContext } from "react";
export const cartContext = createContext();

/*
const reducerFxn = (state, action) => {
   switch (action.type) {
    case "Add_To_Cart":{
        return
            [...state, 
              ...action.payload,
            ]
            
    };
        
        break;
   
    default:
        return state;
        break;
   }
}

export const ContextPro = (props) => {
    const [cartItems, dispatch] = useReducer(reducerFxn, []);
console.Console(cartItems);
    return(
<cartContext.Provider  value={{cartItems, dispatch}}>
{props.children}
</cartContext.Provider>
    )
}*/