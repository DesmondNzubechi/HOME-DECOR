import React, { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

export const CartPro = (props) => {
  // CART REDUCER FUNCTION
  const cartReducer = (cartItems, action) => {
    switch (action.type) {
      case "Add_To_Cart": {
        // Check if the product already exists in the cart
        const existingProduct = cartItems.find(
          (product) => product.id === action.payload.id
        );

        if (existingProduct) {
          // Increase the quantity of the existing product in the cart
          return cartItems.map((pro) =>
            pro.id === action.payload.id ? { ...pro, quantity: pro.quantity + 1 } : pro
          );
        } else {
          // Add the product to the cart if it's not already in the cart
          return [...cartItems, { ...action.payload }];
        }
      }

      case "Remove_From_Cart":
        // Remove the product from the cart when the remove button is clicked
        return cartItems.filter((product) => product.id !== action.payload.id);

      case "Update_Quantity": {
        // Increase the quantity of the product in the cart when the increment button is clicked
        return cartItems.map((pro) =>
          pro.id === action.payload.id ? { ...pro, quantity: pro.quantity + 1 } : pro
        );
      }

      case "Reduce_Quantity": {
        // Decrease the quantity of the product in the cart when the decrement button is clicked
        return cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
            : item
        );
      }

      default:
        return cartItems;
    }
  };

  // WISHLIST REDUCER FUNCTION
  const wishListReducer = (wishList, action) => {
    switch (action.type) {
      case "Add_To_WishList":
        // Add a product to the wishlist when the heart icon button is clicked
        return [...wishList, action.favObj];

      case "Remove_Wish":
        // Remove a product from the wishlist when the remove button is clicked
        return wishList.filter((removeIt) => removeIt.id !== action.favObj.id);

      default:
        return wishList;
    }
  };

  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const [wishList, dispatchWishList] = useReducer(wishListReducer, []);

  const addToCart = (items) => {
    // Add a product to the cart
    dispatch({
      type: "Add_To_Cart",
      payload: { ...items, quantity: 1 },
    });
  };

  const increaseCart = (product) => {
    // Increase the quantity of a product in the cart
    dispatch({
      type: "Update_Quantity",
      payload: product,
    });
  };

  const reduceQuantity = (product) => {
    // Decrease the quantity of a product in the cart
    dispatch({
      type: "Reduce_Quantity",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    // Remove a product from the cart
    dispatch({
      type: "Remove_From_Cart",
      payload: product,
    });
  };

  const addToWishList = (items) => {
    // Add a product to the wishlist
    dispatchWishList({
      type: "Add_To_WishList",
      favObj: items,
    });
  };

  const removeFromWishList = (items) => {
    // Remove a product from the wishlist
    dispatchWishList({
      type: "Remove_Wish",
      favObj: items,
    });
  };

  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWishList] = useState(false);
  const [fullDetail, setFullDetail] = useState([]);
  const [details, setDetails] = useState("top-[-3000px]");
  const [Search, setSearch] = useState("top-[-3000px]");
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    stree: "",
    state: "",
    city: "",
    apartment: "",
    company: "",
    zipCode: "",
    phone: "",
    email: "",
    cardName: "",
    cardNumber: "",
    cardExpiryDate: "",
    cardCVC: "",
    firstNameErr: "",
    lastNameErr: "",
    streeErr: "",
    cityErr: "",
    stateErr: "",
    apartmentErr: "",
    companyErr: "",
    zipCodeErr: "",
    phoneErr: "",
    emailErr: "",
    cardNameErr: "",
    cardNumberErr: null,
    cardExpiryDateErr: null,
    cardCVCErr: null,
    addressLink: "/checkoutEmail",
    paymentLink: "/checkoutAddress",
  });

  const showCartItems = () => {
    setShowCart(true);
  };

  const showWishList = () => {
    setShowWishList(true);
  };

  const hideWishList = () => {
    setShowWishList(false);
  };

  const hideCartItems = () => {
    setShowCart(false);
  };

  const showFullDetail = (items) => {
    setFullDetail([items]);
  };

  const HideDetails = () => {
    setDetails("top-[-3000px]");
  };

  const showSearch = (items) => {
    setSearch("top-0");
  };

  const HideSearch = () => {
    setSearch("top-[-3000px]");
  };

  const emailProceed = () => {
    setFormInputs({
      email: "",
    });
  };

  const PaymentProceed = () => {
    setFormInputs({
      firstName: "",
      lastName: "",
      stree: "",
      state: "",
      city: "",
      apartment: "",
      company: "",
      zipCode: "",
      phone: "",
    });
  };

  console.log(wishList);

  return (
    <CartContext.Provider
      value={{
        HideSearch,
        PaymentProceed,
        emailProceed,
        formInputs,
        setFormInputs,
        showSearch,
        Search,
        cartItems,
        showFullDetail,
        dispatch,
        addToCart,
        showCart,
        hideCartItems,
        showCartItems,
        addToWishList,
        removeFromCart,
        increaseCart,
        reduceQuantity,
        showWish,
        hideWishList,
        showWishList,
        wishList,
        removeFromWishList,
        HideDetails,
        details,
        fullDetail,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
