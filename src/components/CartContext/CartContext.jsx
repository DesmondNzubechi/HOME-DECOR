

import React, { createContext, useReducer, useState } from "react";

export const CartContext = createContext();


export const CartPro = (props) => {


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


  const [cartItems, dispatch] = useReducer(cartReducer, []);


  const addToCart = (items) => {
    dispatch({
      type: 'Add_To_Cart',
      payload: items,
    })
  }

  const [showCart, setShowCart] = useState(false);

  const showCartItems = () => {
    setShowCart(true);
  };

  
  const hideCartItems = () => {
    setShowCart(false);
  }

  console.log(cartItems);


  return (
    <CartContext.Provider value={{ cartItems, dispatch, addToCart, showCart, hideCartItems, showCartItems }}>
      {props.children}
    </CartContext.Provider>
  );

};


