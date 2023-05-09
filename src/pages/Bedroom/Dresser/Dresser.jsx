import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import Roque from '../../../assets/Bedroom/dressers/Roque-Dresser-T1-0101.avif';
import tvStand from '../../../assets/Bedroom/dressers/ackley-dresser.avif';
import largeFrame from '../../../assets/Bedroom/dressers/blanklargeframe.avif';
import commode from '../../../assets/Bedroom/dressers/commode.avif';
import drawer from '../../../assets/Bedroom/dressers/drawer.avif';
import sideboard from '../../../assets/Bedroom/dressers/black-eliza-dresser.avif';
import abbeyMedium from '../../../assets/Bedroom/dressers/everson-dresser.avif';
import setChair from '../../../assets/Bedroom/dressers/setchair.avif';

let Beds = [
    {
        Img : Roque,
        name: 'Roque Dresser',
        Price: 100,
        discount : 120,
    },
    {
        Img : largeFrame,
        name: 'Large frame',
        Price: 140,
        discount : 190,
    },
    {
        Img : commode,
        name: 'Commode',
        Price: 100,
        discount : 150,
    },
    {
        Img : drawer,
        name: 'Portable drawer',
        Price: 90,
        discount : 110,
    },
    /*
    {
        Img : setChair,
        name: 'Set Chair',
        Price: 50,
        discount : 100,
    },
    {
        Img : sideboard,
        name: 'Side Board',
        Price: 50,
        discount : 70,
    },
    {
        Img : tvStand,
        name: 'Tv stand',
        Price: 100,
        discount : 150,
    },
    {
        Img : abbeyMedium,
        name: 'Abbey Medium',
        Price: 130,
        discount : 150,
    }
    */
]


export const Dressers = () => {
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
{
Beds.map(items => (



    
    <div className=" rounded relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
        <div className=" max-w-[200px] m-0 max-h-[400px]  h-full ">
        <img src={items.Img} alt="" className="w-full p-0 h-full  " />
        </div>
       <div className="flex w-full  bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
            <div>
            <h1 className="md:text-[17px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <p className=" top-2 left-2 text-[12px] self-start font-bold  text-slate-50 flex flex-row gap-2 "> <span className=" text-slate-500 line-through ">${items.discount}</span>${items.Price} <span></span></p>
        
            </div>
          
            <div className="flex flex-row gap-2 items-center">
            <AiFillHeart className="text-[20px]   text-red-500 shadow rounded-full md:text-[30px]  "/>
    <AiFillShopping className="text-[20px] p-1 text-white bg-slate-500 rounded-full  md:text-[35px] "/>
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