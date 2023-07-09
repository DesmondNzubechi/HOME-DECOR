import React, { createContext, useReducer, useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// Create a context for the cart
export const CartContext = createContext();

export const CartPro = (props) => {

  const notification = () => toast('bbhh');

  // Cart reducer function to handle cart item updates
  const cartReducer = (cartItems, action) => {
    switch (action.type) {
      case "Add_To_Cart": {
        // Check if the product already exists in the cart
        const existingProduct = cartItems.find(
          (product) => product.id === action.payload.id
        );

        // If the product exists, increase its quantity by 1
        if (existingProduct) {
          const noti = () => toast(`Quantity of ${action.payload.name} in the cart 🛒 increased by 1️⃣`);

          noti();
          return cartItems.map((pro) =>
            pro.id === action.payload.id ? { ...pro, quantity: pro.quantity + 1 } : pro
          );
        } else {
          // If the product doesn't exist, add it to the cart with a quantity of 1
          const noti = () => toast(`${action.payload.name} added to the cart 🛒`);

          noti();
          return [...cartItems, { ...action.payload }];
        }
      }

      case "Remove_From_Cart": {
        // Remove a product from the cart based on its ID
        const updatedCartItems = cartItems.filter((product) => product.id !== action.payload.id);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      }

      case "Update_Quantity": {
        // Increase the quantity of a product in the cart by 1
        const noti = () => toast(`Quantity of ${action.payload.name} increased by 1️⃣`);

        noti();
        return cartItems.map((pro) =>
          pro.id === action.payload.id ? { ...pro, quantity: pro.quantity + 1 } : pro
        );
      }

      case "Reduce_Quantity": {
        // Decrease the quantity of a product in the cart by 1, minimum quantity is 1
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
 
  // Wishlist reducer function to handle wishlist updates
  const wishListReducer = (wishList, action) => {
    switch (action.type) {
      case "Add_To_WishList":
        // Check if the product already exists in the wishlist
        const isProductInWishlist = wishList.some(item => item.id === action.favObj.id);
      
        if (isProductInWishlist) {
        const noti = () => toast(`${action.favObj.name} already added to the wishlist`);

       noti();
         // notification(`${action.favObj.name} already added to the wishlist`)

         // alert(`${action.favObj.name} already added to the wishlist`);
          // Product already exists, do not add to wishlist
          return wishList;
        } else {
          // Product does not exist, add it to the wishlist
          const noti = () => toast(`${action.favObj.name} added to the wishlist`);

       noti();
          return [...wishList, action.favObj];
          }
      
      case "Remove_Wish":
        // Remove a product from the wishlist
        return wishList.filter((removeIt) => removeIt.id !== action.favObj.id);
      default:
        return wishList;
    }
  };

  // Initialize cartItems state with values from localStorage or an empty array
  const [cartItems, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem("cartItems")) || []);

  // Initialize wishList state with values from localStorage or an empty array
  const [wishList, dispatchWishList] = useReducer(wishListReducer, JSON.parse(localStorage.getItem('wishList')) || []);

  // State for displaying the cart and wishlist
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWishList] = useState(false);

  // State for storing full product details and their display status
  const [fullDetail, setFullDetail] =  useState(JSON.parse(localStorage.getItem('fullDetail')) || []);
  const [details, setDetails] = useState("top-[-3000px]");

  // State for storing search input and its display status
  const [Search, setSearch] = useState("top-[-3000px]");

  // State for storing form inputs related to checkout process
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


  ///Update localstorage product page when a particular product is clicked
  useEffect(() => {
    localStorage.setItem('fullDetail', JSON.stringify(fullDetail));
  }, [fullDetail]);


  // Update localStorage when cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Clean up localStorage when the component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem("cartItems");
    };
  }, []);

  // Update localStorage when wishList state changes
  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }, [wishList]);

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

  const showCartItems = () => {
    // Show cart items
    setShowCart(true);
    setIconColors({
      ...iconColors,
      cartIcon: 'bg-green-500'
    })
  };

  const showWishList = () => {
    // Show wishlist
    setShowWishList(true);
    setIconColors({
      ...iconColors,
      loveIcon: 'bg-green-500'
    })
  };

  const hideWishList = () => {
    // Hide wishlist
    setShowWishList(false);
    setIconColors({
      ...iconColors,
      loveIcon: 'bg-slate-50'
    })
  };

  const hideCartItems = () => {
    // Hide cart items
    setShowCart(false);
    setIconColors({
      ...iconColors,
      cartIcon: 'bg-slate-50'
    })
  };

  const showFullDetail = (items) => {
    // Show full detail of a product
    setFullDetail([items]);
  };

  const HideDetails = () => {
    // Hide product details
    setDetails("top-[-3000px]");
  };

  const showSearch = (items) => {
    // Show search
    setSearch("top-0");
    setIconColors({
      ...iconColors,
      searchIcon: 'bg-green-500'
    })
  };

  const HideSearch = () => {
    // Hide search
    setSearch("top-[-3000px]");
    setIconColors({
      ...iconColors,
      cartIcon: 'bg-slate-50'
    })
  };

  const emailProceed = () => {
    // Proceed with email step
    setFormInputs({
      ...formInputs,
      email: "",
    });
  };

  ////icons color
  const [iconColors, setIconColors] = useState({
    searchIcon : 'text-slate-50',
    loveIcon :  'text-slate-50',
    cartIcon:  'text-slate-50',
  })

  return (
    // Provide the cart context to the children components
    <CartContext.Provider
      value={{
        HideSearch,
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
