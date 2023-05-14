

import React, { createContext, useReducer, useState } from "react";

export const CartContext = createContext();


export const CartPro = (props) => {


  const cartReducer = (cartItems, action) => {
    switch (action.type) {
      case "Add_To_Cart":{

        const existingProduct = cartItems.find(
          (product) => product.id === action.payload.id
        );

if (existingProduct) {
  return cartItems.map(pro => (
    pro.id === action.payload.id?
    {...pro, quantity: pro.quantity + 1}:
    pro
  ));
} else {
  return [...cartItems, 
    {
      ...action.payload,
     
    }
  ];
}

      }
        break;
      case "Remove_From_Cart":
        return cartItems.filter(product => product.id !== action.payload.id);
        break;
        case 'Update_Quantity':{
         
          return cartItems.map(pro => (
            pro.id === action.payload.id?
            {...pro, quantity: pro.quantity + 1}:
            pro
          ));
      
        };
        
        break;
        case 'Reduce_Quantity': {
          return cartItems.map((item) => (
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity > 1? item.quantity - 1: item.quantity }
              : item
          ));
        }
        
        break;
      default:
        return cartItems;
    }
  };

  const wishListReducer = (wishList, action) => {
    switch (action.type) {
      case 'Add_To_WishList':{
       const checkList = wishList.find(fav => (
           fav.id === action.favObj.id
         ))
       
      }
        break;
        case 'Remove_Wish':{
   return wishList.filter(removeIt => removeIt.id !== action.favObj.id);
        };
        break;
    
      default:
        return wishList;
        break;
    }
  }


  const [cartItems, dispatch] = useReducer(cartReducer, []);
   const [wishList, dispatchWishList] = useReducer(wishListReducer, []);

  const addToCart = (items) => {
    let quantity;
    dispatch({
      type: 'Add_To_Cart',
      payload: {...items, quantity: 1,},
    })
  };
const increaseCart = (product) => {
  dispatch({
    type: 'Update_Quantity',
    payload: product,
  })
};
const reduceQuantity = (product) => {
  dispatch({
    type:'Reduce_Quantity',
    payload: product,
  })
};
const removeFromCart = (product) => {
  dispatch({
    type:'Remove_From_Cart',
    payload: product,
  })
}

  const addToWishList = (items) => {
    dispatchWishList({
      type: 'Add_To_WishList',
      favObj: items,
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
    <CartContext.Provider value={{ cartItems, dispatch, addToCart, showCart, hideCartItems, showCartItems, addToWishList, removeFromCart, increaseCart, reduceQuantity }}>
      {props.children}
    </CartContext.Provider>
  );

};


