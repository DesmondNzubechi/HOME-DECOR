import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import apartment from '../../../assets/Office/office desk/apartment.avif';
import ardel from '../../../assets/Office/office desk/ardel.avif';
import florence from '../../../assets/Office/office desk/florence.avif';
import griffit from '../../../assets/Office/office desk/griffit.avif';
import isla from '../../../assets/Office/office desk/isla.avif';
import ringo from '../../../assets/Office/office desk/ringo.avif';
import roqque from '../../../assets/Office/office desk/roqque.avif';
import somer from '../../../assets/Office/office desk/somer.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
let DeskArr = [
    {
        id: 117,
        Img : apartment,
        name: 'Apartment',
        Price: 200,
        discount : 250,
    },
    {
        id:118,
        Img : ardel,
        name: 'Ardel',
        Price: 350,
        discount : 400,
    },
    {
        id:119,
        Img :florence,
        name: 'florence',
        Price: 348,
        discount : 400,
    },
    {
        id:120,
        Img : griffit,
        name: 'griffit',
        Price: 100,
        discount : 150,
    },
    
    {
        id:121,
        Img : isla,
        name: 'Isla Stand',
        Price: 100,
        discount : 160,
    },
    {
        id:122,
        Img : ringo,
        name: 'ringo',
        Price: 100,
        discount : 150,
    },
    {
        id:123,
        Img : roqque,
        name: 'roqque',
        Price: 150,
        discount : 200,
    },
    {
        id:124,
        Img : roqque,
        name: 'roqque',
        Price: 50,
        discount : 70,
    }
    
]


export const OfficeDesk = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
DeskArr.map(items => (



    
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