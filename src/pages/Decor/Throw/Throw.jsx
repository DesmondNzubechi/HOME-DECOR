import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  aspenThrow from '../../../assets/Decor/Throw/aspen-throw.avif';
import  boucleThrow from '../../../assets/Decor/Throw/boucle-stripe-throw.avif';
import  brooklynThrow from '../../../assets/Decor/Throw/brooklyn-throw.avif';
import  gianaThrow from '../../../assets/Decor/Throw/giana-throw.avif';
import  piperThrow from '../../../assets/Decor/Throw/piper-throw.avif';
import  pompomThrow from '../../../assets/Decor/Throw/pom-pom-slub-throw.avif';
import  vukimiThrow from '../../../assets/Decor/Throw/yukimi-throw.avif';
import  zolaThrow from '../../../assets/Decor/Throw/zola-throw.avif';
import { CartContext } from "../../../components/CartContext/CartContext";






let ThrowArr = [
    {
        id: 61,
        Img : aspenThrow,
        name: 'aspen Throw',
        Price: 50,
        discount : 70,
    },
    {
        id: 62,
        Img : boucleThrow,
        name: 'boucle Throw',
        Price: 40,
        discount : 60,
    },
    {
        Img : brooklynThrow,
        name: 'brooklyn Throw',
        Price: 70,
        discount : 100,
    },
    {
        id: 63,
        Img : gianaThrow,
        name: 'giana Throw',
        Price: 65,
        discount : 100,
    },
   
    {
        id: 64,
        Img : piperThrow,
        name: 'piper Throw',
        Price: 80,
        discount : 130,
    },
    {
        id:65,
        Img : pompomThrow,
        name: 'pompom Throw',
        Price: 55,
        discount : 99,
    },
    {
        id:66,
        Img : vukimiThrow,
        name: 'vukimi Throw',
        Price: 70,
        discount : 100,
    },
    {
        id:67,
        Img : zolaThrow,
        name: 'zola Throw',
        Price: 50,
        discount : 100,
    }
]


export const Throw = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
ThrowArr.map(items => (



    
    <div key={items.id} className=" rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div className=" p-2 max-w-[150px] h-full ">
        <img src={items.Img} alt="" className="w-full h-full" />
        </div>
       <div className="flex w-full   bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
            <div>
            <h1 className="md:text-[17px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <p className=" top-2 left-2 text-[12px] self-start font-bold  text-slate-50 flex flex-row gap-2 "> <span className=" text-slate-500 line-through ">${items.discount}</span>${items.Price} <span></span></p>
        
            </div>
          
            <div className="flex flex-row gap-2 items-center">
            <AiFillHeart onClick={() => addToWishList(items)} className="text-[20px]   text-red-500 shadow rounded-full md:text-[30px]  "/>
    <AiFillShopping onClick={() => addToCart(items)} className="text-[20px] p-1 text-white bg-slate-500 rounded-full  md:text-[35px] "/>
            </div>
        </div>
    </div>
))
}
     </div>
       </div>
        </div>
    )
}