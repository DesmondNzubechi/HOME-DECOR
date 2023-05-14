import React, { useContext, useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  BlackPillow from '../../../assets/Decor/pillow/blsck pillow.avif';
import  jivePillow from '../../../assets/Decor/pillow/jive-pillow.avif';
import  MinkaLumbar from '../../../assets/Decor/pillow/minka-lumbar-pillow.avif';
import  minkaPleat from '../../../assets/Decor/pillow/minka-pleated-round-pillow.avif';
import  peacock from '../../../assets/Decor/pillow/peacock-decorative-knife-edge-pillows.avif';
import  pillow from '../../../assets/Decor/pillow/pillow1.avif';
import  squarePIllow from '../../../assets/Decor/pillow/square-pillow.avif';
import  chevyPillow from '../../../assets/Decor/pillow/sunny-chevy-decorative-knife-edge-pillows.avif';
import { CartContext } from "../../../components/CartContext/CartContext";






let PillowArr = [
    {
        id:53,
        Img : BlackPillow,
        name: 'Black Pillow',
        Price: 50,
        discount : 70,
    },
    {
        id:54,
        Img : jivePillow,
        name: 'jive Pillow',
        Price: 40,
        discount : 60,
    },
    {
        id:55,
        Img : MinkaLumbar,
        name: 'Minka Lumbar',
        Price: 100,
        discount : 130,
    },
    {
        id:56,
        Img : minkaPleat,
        name: 'minka Pleat ',
        Price: 65,
        discount : 100,
    },
   
    {
        id:57,
        Img : peacock,
        name: 'peacock',
        Price: 80,
        discount : 130,
    },
    {
        id:58,
        Img : pillow,
        name: 'pillow Ash',
        Price: 55,
        discount : 99,
    },
    {
        id:59,
        Img : squarePIllow,
        name: 'square PIllow',
        Price: 100,
        discount : 150,
    },
    {
        id:60,
        Img : chevyPillow,
        name: 'chevy Pillow',
        Price: 80,
        discount : 150,
    }
]


export const Pillow = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
PillowArr.map(items => (



    
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