/*import React from "react";
import { useReducer, createContext } from "react";
export const cartContext = createContext();


const reducerFxn = (state, action) => {
   switch (action.type) {
    case "Add_To_Cart":
        return [...state,  { ...action.payload }];
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
}



import React from "react";
import { useReducer, createContext } from "react";
export const cartContext = createContext();

const reducerFxn = (cartItems, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return [...cartItems, { ...action.payload }];
    default:
      return cartItems;
  }
};

export const ContextPro = (props) => {
  const [cartItems, dispatch] = useReducer(reducerFxn, []);
  console.log(cartItems);

  return (
    <cartContext.Provider value={{ cartItems, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
};



import React from "react";
import { createContext, useReducer } from "react";


export const CartContext = createContext();

const cartReducer = (cartItems, action) => {
  switch (action.type) {
    case "Add_To_Cart":{
        return[...cartItems, {action.payload}],
    };
        
        break;
        case 'Remove_From_Cart': {
            return {
                cartItems.filter(product => product.id !== action.payload.id )
            }
        };
        break;
  
    default:
        return cartItems;
        break;
  }
}


export const CartPro = (props) => {

const [cartItems, dispatch] = useReducer(cartReducer, []);
console.log(cartItems);

    return(
        <CartContext.Provider value={{cartItems, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}
*/

import React, { createContext, useReducer } from "react";

export const CartContext = createContext();


export const CartPro = (props) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  
const cartReducer = (cartItems, action) => {
    switch (action.type) {
      case "Add_To_Cart":
        return [...cartItems, action.payload];
        break;
      case "Remove_From_Cart":
        return cartItems.filter(product => product.id !== action.payload.id);
      default:
        return cartItems;
    }
  };

  console.log(cartItems);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );

};




