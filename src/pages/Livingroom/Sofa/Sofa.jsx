import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  antonDayBed from '../../../assets/Livingroom/livingroom sofa/anton daybed.avif';
import  BrierSleeper from '../../../assets/Livingroom/livingroom sofa/brier sleeper.avif';
import  bryantSofa from '../../../assets/Livingroom/livingroom sofa/bryant sofa.avif';
import  BryantUSofa from '../../../assets/Livingroom/livingroom sofa/bryant U-sofa.avif';
import  holtSectional from '../../../assets/Livingroom/livingroom sofa/holt sectional.avif';
import  LewisSection from '../../../assets/Livingroom/livingroom sofa/lewis section.avif';
import  LewisSofa from '../../../assets/Livingroom/livingroom sofa/lewis sofa2.avif';
import  SofaQuality from '../../../assets/Livingroom/livingroom sofa/sofa1.avif';
import { CartContext } from "../../../components/CartContext/CartContext";








let SofaArr = [
    {
        id: 97,
        Img : antonDayBed,
        name: 'Anton Daybed',
        Price: 350,
        discount : 400,
    },
    {
        id: 98,
        Img : BrierSleeper,
        name: 'Brier Sleeper',
        Price: 250,
        discount : 300,
    },
    {
        id:99,
        Img : bryantSofa,
        name: 'Bryant Sofa',
        Price: 230,
        discount : 300,
    },
    {
        id:100,
        Img : BryantUSofa,
        name: 'Bryant U-Sofa',
        Price: 500,
        discount : 600,
    },
    {
        id:101,
        Img : holtSectional,
        name: 'Holt Sectional',
        Price: 350,
        discount : 400,
    },
    {
        id:102,
        Img : LewisSection,
        name: 'LewisSection',
        Price: 250,
        discount : 300,
    },
    {
        id:103,
        Img : LewisSofa,
        name: 'Lewis Sofa',
        Price: 300,
        discount : 350,
    },
    {
        id:104,
        Img : SofaQuality,
        name: 'Premium Sofa',
        Price: 300,
        discount : 300,
    }
]


export const Sofa = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
SofaArr.map(items => (



    
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