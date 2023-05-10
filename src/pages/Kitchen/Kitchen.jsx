import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  briaTableLamp from '../../assets/Kitchen/kitchen.avif';
import  BurkeFloorLamp from '../../assets/Kitchen/kitchen1.avif';
import  carrieTableLamp from '../../assets/Kitchen/kitchen2.jpg';
import  dameTableLamp from '../../assets/Kitchen/kitchen3.jpg';
import  liliTableLamp from '../../assets/Kitchen/kitchen4.avif';
import  mandiPendant from '../../assets/Kitchen/kitchen5.avif';
import  QuincyFloorLamp from '../../assets/Kitchen/kitchen6.avif';
import  savannahTableLamp from '../../assets/Kitchen/kitchen7.avif';







let KitchenArr = [
    {
        Img : briaTableLamp,
        name: 'Good cabinet',
        Price: 300,
        discount : 350,
    },
    {
        Img : BurkeFloorLamp,
        name: 'Kitchen cabinet',
        Price: 200,
        discount : 260,
    },
    {
        Img : carrieTableLamp,
        name: 'Quality Cabinet',
        Price: 300,
        discount : 350,
    },
    {
        Img : dameTableLamp,
        name: 'Cabinet',
        Price: 400,
        discount : 550,
    },
   
    {
        Img : liliTableLamp,
        name: 'white',
        Price: 350,
        discount : 400,
    },
    {
        Img : mandiPendant,
        name: 'expensive',
        Price: 819,
        discount : 1000,
    },
    {
        Img : QuincyFloorLamp,
        name: 'Quality',
        Price: 550,
        discount : 700,
    },
    {
        Img : savannahTableLamp,
        name: 'Perfect',
        Price: 600,
        discount : 800,
    }
]


export const Kitchen = () => {
    return(
        <div className="py-[50px] pt-[100px] px-[20px] ">
       <div>
       <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[25px] md:text-[40px] ">Kitchen</h1>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
KitchenArr.map(items => (
    <div className=" rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div className=" p-1 max-w-[150px] h-[150px] ">
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