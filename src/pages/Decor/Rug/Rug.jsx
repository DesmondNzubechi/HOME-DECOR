import React, { useContext, useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  aggyRug from '../../../assets/Decor/rug/aggy-rug.avif';
import  ainaRug from '../../../assets/Decor/rug/aina-rug.avif';
import  azrusRug from '../../../assets/Decor/rug/azrus-rug.avif';
import  casperRug from '../../../assets/Decor/rug/casper-outdoor-rug.avif';
import  eloiseRug from '../../../assets/Decor/rug/eloise-rug.avif';
import  jayaRug from '../../../assets/Decor/rug/jaya-rug.avif';
import  orsonRug from '../../../assets/Decor/rug/orson-rug.avif';
import  prismRug from '../../../assets/Decor/rug/prism-washable-rug.avif';
import { CartContext } from "../../../components/CartContext/CartContext";






let RugArr = [
    {
        id:61,
        Img : aggyRug,
        name: 'aggy Rug',
        Price: 100,
        discount : 170,
    },
    {
        id:62,
        Img : ainaRug,
        name: 'aina Rug',
        Price: 70,
        discount : 100,
    },
    {
        id:63,
        Img : azrusRug,
        name: 'azrus Rug',
        Price: 100,
        discount : 130,
    },
    {
        id:64,
        Img : casperRug,
        name: 'casper Rug ',
        Price: 65,
        discount : 100,
    },
   
    {
        id:65,
        Img : eloiseRug,
        name: 'eloise Rug',
        Price: 110,
        discount : 250,
    },
    {
        id:66,
        Img : jayaRug,
        name: 'jaya Rug',
        Price: 155,
        discount : 270,
    },
    {
        id:67,
        Img : orsonRug,
        name: 'orson Rug',
        Price: 100,
        discount : 250,
    },
    {
        id:68,
        Img : prismRug,
        name: 'prism Rug',
        Price: 80,
        discount : 150,
    }
]


export const Rug = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
RugArr.map(items => (



    
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