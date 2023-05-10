import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  lagunaCofee from '../../../assets/Outdoor/outdoor tables/laguna-outdoor-coffee-table.avif';
import  sideT from '../../../assets/Outdoor/outdoor tables/laguna-outdoor-side-table.avif';
import  laurel from '../../../assets/Outdoor/outdoor tables/laurel-outdoor-coffee-table.avif';
import  nikoT from '../../../assets/Outdoor/outdoor tables//niko-outdoor-side-table.avif';
import  scout from '../../../assets/Outdoor/outdoor tables/scout-outdoor-low-side-table.avif';
import  vista from '../../../assets/Outdoor/outdoor tables/vista-outdoor-side-table.avif';
import  vita from '../../../assets/Outdoor/outdoor tables/vita-outdoor-coffee-table.avif';
import  kinsev from '../../../assets/Outdoor/outdoor tables/white-kinsey-outdoor-dining-table.avif';







let TableArr = [
    {
        Img : lagunaCofee,
        name: 'Laguna Table',
        Price: 200,
        discount : 300,
    },
    {
        Img : sideT,
        name: 'side Table',
        Price: 150,
        discount : 200,
    },
    {
        Img : laurel,
        name: 'laurel',
        Price: 200,
        discount : 250,
    },
    {
        Img : nikoT,
        name: 'niko Table ',
        Price: 300,
        discount : 350,
    },
   
    {
        Img : scout,
        name: 'scout table',
        Price: 120,
        discount : 170,
    },
    {
        Img : vista,
        name: 'vista',
        Price: 155,
        discount : 315,
    },
    {
        Img : vita,
        name: 'vita',
        Price: 213,
        discount : 250,
    },
    {
        Img : kinsev,
        name: 'kinsev',
        Price: 190,
        discount : 300,
    }
]


export const OutdoorTable = () => {
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
TableArr.map(items => (
    
    <div className=" rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div className=" p-2 max-w-[150px] h-full ">
        <img src={items.Img} alt="" className="w-full h-full" />
        </div>
       <div className="flex w-full   bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
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