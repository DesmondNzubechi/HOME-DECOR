import React, { useState } from "react";
import { useContext } from "react";
import { NewArrContext } from "../New Arrival/NewArrival";
import { newArrivalObj } from "../New Arrival/NewArrival";
import { CartContext } from "../../components/CartContext/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';









export const Product = () => {

    const {HideSearch, showSearch, Search, addToCart, addToWishList, showFullDetail, fullDetail, HideDetails, details,} = useContext(CartContext);
    

    return(
      
   <div className={` ease-in-out  duration-500 pt-[130px] px-[20px]  py-[70px]   bg-slate-100 `}>
        { 
fullDetail.map(items => {
    return (
      
        <div className="bg-slate-100 flex md:flex-row flex-col gap-5 justify-around relative  rounded-lg overflow-y-auto  ">
     
<div className="">
  <img src={items.Img} alt=""  className="w-full h-full"/>
</div>
        <div className=" flex flex-col gap-5">
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
                <p className="text-slate-600 text-[15px] max-w-[400px] font-fonty" >{items.descr}</p>
            </div>
            <div className="grid grid-cols-1 gap-2 my-5">
    <button onClick={() => addToCart(items)} className="bg-slate-800 w-fit px-[22px] py-[10px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100  rounded text-[14px] md:text-[17px] text-slate-50 border ">Addd to Cart</button>
    <button onClick={() => addToWishList(items)} className=" border w-fit  px-[15px] py-[10px] border-slate-800 rounded transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 text-slate-800 text-[14px] md:text-[17px]">Add to Wishlist</button>
</div>
        </div>
    </div>
    )
})
       }
        
     </div>
    )
}