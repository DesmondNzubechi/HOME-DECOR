import React, { useContext, useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import babyBed from '../../../assets/Bedroom/bed/baby-bed.avif';
import JumiperBed from '../../../assets/Bedroom/bed/jumiper-bed.avif';
import estlle from '../../../assets/Bedroom/bed/estlle.avif';
import whiteBed from '../../../assets/Bedroom/bed/white-bed.avif';
import leartherBed from '../../../assets/Bedroom/bed/leather-bed.avif';
import mockupBed from '../../../assets/Bedroom/bed/mockup.avif';
import doubleBed from '../../../assets/Bedroom/bed/doublebed.avif';
import Bed1 from '../../../assets/Bedroom/bed/bed1.avif';
import bed2 from '../../../assets/Bedroom/bed/bed2.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
let Beds = [
    {
        id: 25,
        Img : babyBed,
        name: 'Baby Bed',
        Price: 200,
        discount : 300,
    },
    {
        id: 26,
        Img : JumiperBed,
        name: 'Jumiper Bed',
        Price: 230,
        discount : 270,
    },
    {
        id: 27,
        Img : estlle,
        name: 'Estlle Bed',
        Price: 250,
        discount : 320,
    },
    {
        id: 28,
        Img : doubleBed,
        name: 'Double Bed',
        Price: 190,
        discount : 230,
    },
    {
        id: 29,
        Img : leartherBed,
        name: 'Leather Bed',
        Price: 215,
        discount : 300,
    },
    {
        id: 30,
        Img : mockupBed,
        name: 'Authentic bed',
        Price: 400,
        discount : 500,
    },
    {
        id: 31,
        Img : whiteBed,
        name: 'Pure White',
        Price: 170,
        discount : 200,
    },
    {
        id: 32,
        Img : Bed1,
        name: 'Quality Bed',
        Price: 210,
        discount : 250,
    }
]


export const Bed = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
Beds.map(items => (



    
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