

import React, { createContext, useReducer, useState } from "react";





export const CartContext = createContext();


export const CartPro = (props) => {

 
  //CART REDUCER FUNCTION
  //THIS FUNCTION CHECK THE TYPE OF ACTION THAT IS TAKEN AND THEN CARRYOUT THE NECESSARY 
  const cartReducer = (cartItems, action) => {
    switch (action.type) {
      case "Add_To_Cart":{
// THIS CHECK IF THE PRODUCT ALREADY EXIST IN THE CART
        const existingProduct = cartItems.find(
          (product) => product.id === action.payload.id
        );

if (existingProduct) {
  //INCREASING THE QUANTITY OF PRODUCT IN THE CART IF THE PRODUCT ALREADY EXIST IN THE CART
  return cartItems.map(pro => (
    pro.id === action.payload.id?
    {...pro, quantity: pro.quantity + 1}:
    pro
  ));
} else {
  //ADDING THE PRODUCT TO CART IF IT IS NOT IN THE CART
  return [...cartItems, 
    {...action.payload,}
  ];
} }
        break;
        //THIS REMOVE PRODUCT IN THE CART WHEN REMOVE BUTTON IS CLICKED
      case "Remove_From_Cart":
        return cartItems.filter(product => product.id !== action.payload.id);
        break;
        //THIS INCREASE THE QUANTITY OF PRODUCT IN THE CART WHEN INCREAMENT BUTTON IS CLICKED
        case 'Update_Quantity':{
          return cartItems.map(pro => (
            pro.id === action.payload.id?
            {...pro, quantity: pro.quantity + 1}:
            pro
          ));
        };
        break;
        //THIS DECREASE THE QUANTITY OF PRODUCT IN THE CART WHEN DECREAMENT BUTTON IS CLICKED
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
  //WISHLIST REDUCER FUNCTION
  //THIS FUNCTION CHECK THE TYPE OF ACTION THAT IS TAKEN AND THEN CARRYOUT THE NECESSARY 
  const wishListReducer = (wishList, action) => {
    switch (action.type) {
      case 'Add_To_WishList':{
      

  return [...wishList, action.favObj]

     /* if (checkList) {
         return wishList.map(n => (
          n.name === action.favObj.name?
          alert(`${n.name} is already in your wishlist`):
          n
         ))
      } else {
        return [...wishList, action.favObj]
      };*/
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
// CART REDUCER
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  //WISHLIST REDUCER
   const [wishList, dispatchWishList] = useReducer(wishListReducer, []);
/// ADD TO CART FUNCTION 
  const addToCart = (items) => {
    dispatch({
      type: 'Add_To_Cart',
      payload: {...items, quantity: 1,},
    })
  };
  ///THIS FUNCTION INCREASE THE QUANTITY OF THE PRODUCT IN THE CART WHEN THE PLUS BUTTON IS CLICKED
const increaseCart = (product) => {
  dispatch({
    type: 'Update_Quantity',
    payload: product,
  })
};
///THIS FUNCTION DECREASE THE QUANTITY OF THE PRODUCT IN THE CART WHEN THE MINUS BUTTON IS CLICKED
const reduceQuantity = (product) => {
  dispatch({
    type:'Reduce_Quantity',
    payload: product,
  })
};
///THIS FUNCTION REMOVE THE PRODUCT IN THE CART WHEN THE REMOVE BUTTON IS CLICKED
const removeFromCart = (product) => {
  dispatch({
    type:'Remove_From_Cart',
    payload: product,
  })
}
///THIS FUNCTION ADD  PRODUCT IN THE WISHLIST WHEN THE HEART ICON BUTTON IS CLICKED
  const addToWishList = (items) => {
    dispatchWishList({
      type: 'Add_To_WishList',
      favObj: items,
    })
  };
const removeFromWishList = (items) => {
  dispatchWishList({
    type: 'Remove_Wish',
    favObj: items,
  })
}
//this set cart page invisible
  const [showCart, setShowCart] = useState(false);
  //this set wishlist page invisible
const [showWish, setShowWishList] = useState(false);

//THIS FUNCTION SET CART PAGE VISIBLE WHEN THE CART ICON IS CLICKED
  const showCartItems = () => {
    setShowCart(true);
  };
//THIS FUNCTION SET CART PAGE VISIBLE WHEN THE HEART ICON IS CLICKED
  const showWishList = () => {
    setShowWishList(true);
  };
//THIS FUNCTION SET WISHLIST PAGE INVISIBLE WHEN THE X ICON IS CLICKED
  const hideWishList = () => {
    setShowWishList(false);
  };
//THIS FUNCTION SET CART PAGE INVISIBLE WHEN THE X ICON IS CLICKED
  const hideCartItems = () => {
    setShowCart(false);
  }
  //SHOW PRODUCT FULL DETAIL
  const [fullDetail, setFullDetail] = useState([]);
  const [details, setDetails] = useState('top-[-3000px]');
const showFullDetail = (items) => {
  setFullDetail([{...items}]);
  setDetails('top-0')
}
const HideDetails = () => {
  setDetails('top-[-3000px]')
}


const [Search, setSearch] = useState('top-[-3000px]');
const showSearch = (items) => {
  setSearch('top-0')
}
const HideSearch = () => {
  setSearch('top-[-3000px]')
}

  console.log(wishList);
  return (
    <CartContext.Provider value={{HideSearch, showSearch, Search, cartItems, showFullDetail, dispatch, addToCart, showCart, fullDetail, hideCartItems, showCartItems, addToWishList, removeFromCart, increaseCart, reduceQuantity, showWish, hideWishList,  showWishList, wishList, removeFromWishList, HideDetails, details,  }} >
      {props.children}
    </CartContext.Provider>
  );

};


