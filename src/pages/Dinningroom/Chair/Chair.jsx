import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import ayla from '../../../assets/Dinningroom/dinning chair/ayla.avif';
import doris from '../../../assets/Dinningroom/dinning chair/doris.avif';
import ellise from '../../../assets/Dinningroom/dinning chair/ellise.avif';
import joyce from '../../../assets/Dinningroom/dinning chair/joyce.avif';
import kian from '../../../assets/Dinningroom/dinning chair/kian.avif';
import magill from '../../../assets/Dinningroom/dinning chair/magill.avif';
import morgan from '../../../assets/Dinningroom/dinning chair/morgan.avif';
import poaha from '../../../assets/Dinningroom/dinning chair/poaha.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
let ChairArr = [
    {
        id: 73,
        Img : ayla,
        name: 'ayla',
        Price: 50,
        discount : 100,
    },
    {
        id: 74,
        Img : doris,
        name: 'doris',
        Price: 30,
        discount : 50,
    },
    {
        id:75,
        Img : ellise,
        name: 'ellise',
        Price: 50,
        discount : 120,
    },
    {
        id:76,
        Img : joyce,
        name: 'joyce',
        Price: 80,
        discount : 100,
    },
    {
        id:77,
        Img : kian,
        name: 'kian',
        Price: 70,
        discount : 120,
    },
    {
        id:78,
        Img : magill,
        name: 'magill',
        Price: 80,
        discount : 130,
    },
    {
        id:79,
        Img : morgan,
        name: 'morgan',
        Price: 100,
        discount : 150,
    },
    {
        id:80,
        Img : poaha,
        name: 'poaha',
        Price: 50,
        discount : 100,
    }
]


export const DinningChair = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
ChairArr.map(items => (



    
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