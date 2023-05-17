import React, { useState } from "react";
import { useContext } from "react";
import { NewArrContext } from "../New Arrival/NewArrival";
import { newArrivalObj } from "../New Arrival/NewArrival";
import { CartContext } from "../../components/CartContext/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import { Beds } from "../../pages/Bedroom/Bed/Bed";
import { Dresser } from "../../pages/Bedroom/Dresser/Dresser";
import { Nightstand } from "../../pages/Bedroom/Nightstand/Nightstand";
import { LightArr } from "../../pages/Decor/Light/Light";
import { PillowArr } from "../../pages/Decor/pillow/Pillow";
import { RugArr } from "../../pages/Decor/Rug/Rug";
import { ThrowArr } from "../../pages/Decor/Throw/Throw";
import { CabinetArr } from "../../pages/Dinningroom/Cabinet/cabinet";
import { ChairArr } from "../../pages/Dinningroom/Chair/Chair";
import { TableArr } from "../../pages/Dinningroom/Table/Table";
import { KitchenArr } from "../../pages/Kitchen/Kitchen";
import { ChairArrL } from "../../pages/Livingroom/Chair/Chair";
import { SofaArr } from "../../pages/Livingroom/Sofa/Sofa";
import { TableArrL } from "../../pages/Livingroom/Table/Table";










export const SearchP = () => {

    return(
      
   <div className={`fixed ease-in-out  duration-500  h-full px-[20px]  py-[20px] flex flex-row justify-center z-[100] ${Search} left-0 right-0 w-full bg-Icon `}>
        { 
fullDetail.map(items => {
    return (
        <div className={`fixed px-[40px] bg-Tp py-[20px] ease-in-out  duration-500 flex flex-row justify-center    left-0 right-0 w-full h-[100vh]  ${details} z-[50] `}>
        <div className="bg-slate-100 relative p-4 rounded-lg overflow-y-auto  max-w-[400px] ">
        <HiOutlineXMark onClick={HideDetails}  className="text-[40px] transition ease-in delay-150  hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl absolute left-[10px]    z-[20] top-1 rounded-full p-1 text-red-500  "/>
<div  >
<div className="">
  <img src={items.Img} alt=""  className="w-full h-full"/>
</div>
    <div className="grid grid-cols-2 gap-2 my-5">
    <button onClick={() => addToCart(items)} className="bg-slate-800  px-[10px] py-[5px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100  rounded text-[14px] md:text-[17px] text-slate-50 border ">Addd to Cart</button>
    <button onClick={() => addToWishList(items)} className=" border border-slate-800 rounded transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 text-slate-800 text-[14px] md:text-[17px]">Add to Wishlist</button>
</div>
</div>
        <div>
            <h1 className="uppercase font-myfont text-[22px] ">{items.name}</h1>
            <div className="flex flex-row gap-5 ">
                <p className="text-slate-800 font-bold text-[15px] ">${items.Price}</p>
                <p className="text-slate-400 line-through font-bold text-[15px] ">${items.discount}</p>
            </div>
            <div>
                <h1 className="uppercase font-myfont text-[16px] text-slate-800">DEscription</h1>
                <p className="text-slate-600 text-[15px]  font-fonty" >{items.descr}</p>
            </div>
          
        </div>
    </div>
    </div>
    )
})
       }
        
     </div>
    )
}