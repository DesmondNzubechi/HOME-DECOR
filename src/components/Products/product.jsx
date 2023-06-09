import React, { useState } from "react";
import { useContext } from "react";
import { NewArrContext } from "../New Arrival/NewArrival";
import { newArrivalObj } from "../New Arrival/NewArrival";
import { CartContext } from "../../components/CartContext/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai'
export const Product = () => {

    const [button, setButton] = useState({
        cart: 'Add To Cart',
        wishlist: "Add To Wishlist",
        cartBg: 'bg-slate-800',
        wishlistBorder: 'border-slate-800',
    })

    const {
         addToCart,
          addToWishList,
            fullDetail,
                      } = useContext(CartContext);
    return(
   <div className={` ease-in-out  duration-500 pt-[130px] px-[20px]  py-[70px]   bg-slate-100 `}>
        { 
fullDetail.map(items => {
    return (
        <div className="bg-slate-100 md:items-center flex md:flex-row flex-col gap-5 justify-around relative  rounded-lg overflow-y-auto  ">
<div className="max-w-[600px] ">
  <img src={items.Img} alt=""  className="w-full  "/>
</div>
        <div className=" flex flex-col gap-2">
            <div>
        <h1 className="uppercase font-myfont text-[16px]  text-slate-800">Name:</h1>
            <h1 className="uppercase font-bold text-[22px] ">{items.name}</h1>
            </div>
            <div className="flex flex-col gap-1 ">
            <h1 className="uppercase font-myfont  text-[16px]  text-slate-800">Price:</h1>
            <div class="flex flex-row gap-5">
            <p className="text-slate-800 font-bold text-[15px] ">${items.Price}</p>
                <p className="text-slate-400 line-through font-bold text-[15px] ">${items.discount}</p>
            </div>
             </div>
            <div>
                <h1 className="uppercase font-myfont text-[16px]  text-slate-800">DEscription:</h1>
                <p className="text-slate-600 text-[15px] max-w-[500px] font-fonty" >{items.descr}</p>
            </div>
            <div className="flex flex-row gap-2 my-5">
    <button 
    onClick={() => {
        addToCart(items);
        setButton({
            ...button,
             cart: 'Added To cart',
             cartBg: 'bg-green-500',
            });
    }}
    className={`${button.cartBg} w-fit px-[22px] py-[10px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100  rounded text-[14px] md:text-[17px] text-slate-50 border `}>{button.cart}</button>
    <button 
    onClick={() => {
        addToWishList(items);
        setButton({
            ...button, 
            wishlist: 'Added To Wishlist',
            wishlistBorder: 'border-green-500'
        })
    }}
 className={` border w-fit  px-[15px] py-[10px] ${button.wishlistBorder} rounded transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 text-slate-800 text-[14px] md:text-[17px]`}>{button.wishlist}</button>
</div>
        </div>
    </div>
    )}) }
        
     </div>
    )
}