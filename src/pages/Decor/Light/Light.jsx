import React, { useContext, useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  briaTableLamp from '../../../assets/Decor/light/bria-table-lamp.avif';
import  BurkeFloorLamp from '../../../assets/Decor/light/burke-floor-lamp.avif';
import  carrieTableLamp from '../../../assets/Decor/light/carrie-table-lamp.avif';
import  dameTableLamp from '../../../assets/Decor/light/dame-table-lamp.avif';
import  liliTableLamp from '../../../assets/Decor/light/lili-table-lamp.avif';
import  mandiPendant from '../../../assets/Decor/light/mandi-pendant.avif';
import  QuincyFloorLamp from '../../../assets/Decor/light/quincy-floor-lamp.avif';
import  savannahTableLamp from '../../../assets/Decor/light/savannah-table-lamp.avif';
import { CartContext } from "../../../components/CartContext/CartContext";






let LightArr = [
    {
        id:45,
        Img : briaTableLamp,
        name: 'bria tableLamp',
        Price: 200,
        discount : 300,
    },
    {
        id:46,
        Img : BurkeFloorLamp,
        name: 'Burke FloorLamp',
        Price: 120,
        discount : 160,
    },
    {
        id:47,
        Img : carrieTableLamp,
        name: 'carrie TableLamp',
        Price: 190,
        discount : 250,
    },
    {
        id:48,
        Img : dameTableLamp,
        name: 'dame TableLamp ',
        Price: 200,
        discount : 250,
    },
   
    {
        id:49,
        Img : liliTableLamp,
        name: 'lili TableLamp',
        Price: 150,
        discount : 200,
    },
    {
        id:50,
        Img : mandiPendant,
        name: 'mandi Pendant',
        Price: 319,
        discount : 400,
    },
    {
        id:51,
        Img : QuincyFloorLamp,
        name: 'Quincy FloorLamp',
        Price: 150,
        discount : 250,
    },
    {
        id:52,
        Img : savannahTableLamp,
        name: 'savannah TableLamp',
        Price: 380,
        discount : 430,
    }
]


export const Light = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
LightArr.map(items => (



    
    <div key={items.id} className=" rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div className=" p-2 max-w-[150px] h-[130px] ">
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