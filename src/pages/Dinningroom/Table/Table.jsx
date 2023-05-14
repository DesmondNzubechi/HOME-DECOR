import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import bauer from '../../../assets/Dinningroom/dinning table/bauer-dining.avif';
import blaes from '../../../assets/Dinningroom/dinning table/blaes.avif';
import haven from '../../../assets/Dinningroom/dinning table/haven.avif';
import lana from '../../../assets/Dinningroom/dinning table/lana.avif';
import monetery from '../../../assets/Dinningroom/dinning table/monetery.avif';
import prenge from '../../../assets/Dinningroom/dinning table/prenge.avif';
import reed from '../../../assets/Dinningroom/dinning table/reed.avif';
import toscano from '../../../assets/Dinningroom/dinning table/toscano.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
let TableArr = [
    {
        id: 81,
        Img : bauer,
        name: 'Bauer',
        Price: 100,
        discount : 150,
    },
    {
        id:82,
        Img : blaes,
        name: 'Blaes',
        Price: 60,
        discount : 100,
    },
    {
        id: 83,
        Img : haven,
        name: 'haven',
        Price: 120,
        discount : 150,
    },
    {
        id:84,
        Img : lana,
        name: 'lana',
        Price: 150,
        discount : 200,
    },
    {
        id:85,
        Img : monetery,
        name: 'Monetery',
        Price: 120,
        discount : 160,
    },
    {
        id:86,
        Img :prenge,
        name: 'Prenge',
        Price: 150,
        discount : 200,
    },
    {
        id:87,
        Img : reed,
        name: 'reed',
        Price: 200,
        discount : 250,
    },
    {
        id:88,
        Img : toscano,
        name: 'toscano',
        Price: 250,
        discount : 300,
    }
]


export const DinningTable = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
TableArr.map(items => (



    
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