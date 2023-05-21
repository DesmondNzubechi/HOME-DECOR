import React, { createContext, useReducer, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartPro = (props) => {
  const cartReducer = (cartItems, action) => {
    switch (action.type) {
      case "Add_To_Cart": {
        const existingProduct = cartItems.find(
          (product) => product.id === action.payload.id
        );

        if (existingProduct) {
          return cartItems.map((pro) =>
            pro.id === action.payload.id ? { ...pro, quantity: pro.quantity + 1 } : pro
          );
        } else {
          return [...cartItems, { ...action.payload }];
        }
      }

      case "Remove_From_Cart": {
        const updatedCartItems = cartItems.filter((product) => product.id !== action.payload.id);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      }

      case "Update_Quantity": {
        return cartItems.map((pro) =>
          pro.id === action.payload.id ? { ...pro, quantity: pro.quantity + 1 } : pro
        );
      }

      case "Reduce_Quantity": {
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

  const wishListReducer = (wishList, action) => {
    switch (action.type) {
      case "Add_To_WishList":
        return [...wishList, action.favObj];
      case "Remove_Wish":
        return wishList.filter((removeIt) => removeIt.id !== action.favObj.id);
      default:
        return wishList;
    }
  };

  const [cartItems, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem("cartItems")) || []);
  const [wishList, dispatchWishList] = useReducer(wishListReducer, JSON.parse(localStorage.getItem('wishList')) || []);
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

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("cartItems");
    };
  }, []);

useEffect(() => {
  return () => {
    localStorage.removeItem('wishList')
  }
}, [])

useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
}, [wishList]);

  const addToCart = (items) => {
    dispatch({
      type: "Add_To_Cart",
      payload: { ...items, quantity: 1 },
    });
  };

  const increaseCart = (product) => {
    dispatch({
      type: "Update_Quantity",
      payload: product,
    });
  };

  const reduceQuantity = (product) => {
    dispatch({
      type: "Reduce_Quantity",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "Remove_From_Cart",
      payload: product,
    });
  };

  const addToWishList = (items) => {
    dispatchWishList({
      type: "Add_To_WishList",
      favObj: items,
    });
  };

  const removeFromWishList = (items) => {
    dispatchWishList({
      type: "Remove_Wish",
      favObj: items,
    });
  };

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
      ...formInputs,
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
