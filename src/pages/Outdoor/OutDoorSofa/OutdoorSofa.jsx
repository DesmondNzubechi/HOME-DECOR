import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  blackCamel from '../../../assets/Outdoor/outdoor sofa/black-carmel.avif';
import  bondi from '../../../assets/Outdoor/outdoor sofa/bondi.avif';
import  loveSeat from '../../../assets/Outdoor/outdoor sofa/cambria loveseat.avif';
import  carmel from '../../../assets/Outdoor/outdoor sofa/carmel sectional.avif';
import  catalina from '../../../assets/Outdoor/outdoor sofa/catalina-outdoor-sofa.avif';
import  laguna from '../../../assets/Outdoor/outdoor sofa/laguna-outdoor-sofa.avif';
import  scout from '../../../assets/Outdoor/outdoor sofa/scout.avif';
import  zola from '../../../assets/Outdoor/outdoor sofa/zola-outdoor.avif';







let SofaArr = [
    {
        Img : blackCamel,
        name: 'Carmel',
        Price: 200,
        discount : 300,
    },
    {
        Img : bondi,
        name: 'bondi',
        Price: 250,
        discount : 300,
    },
    {
        Img : loveSeat,
        name: 'love Seat',
        Price: 170,
        discount : 200,
    },
    {
        Img : carmel,
        name: 'carmel ',
        Price: 300,
        discount : 350,
    },
   
    {
        Img : catalina,
        name: 'catalina',
        Price: 150,
        discount : 200,
    },
    {
        Img : laguna,
        name: 'laguna',
        Price: 200,
        discount : 300,
    },
    {
        Img : scout,
        name: 'scout',
        Price: 230,
        discount : 350,
    },
    {
        Img : zola,
        name: 'zola',
        Price: 490,
        discount : 500,
    }
]


export const OutdoorSofa = () => {
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
SofaArr.map(items => (



    
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