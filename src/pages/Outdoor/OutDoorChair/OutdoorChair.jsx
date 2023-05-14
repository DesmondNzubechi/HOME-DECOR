import React, { useRef, useState , useContext} from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  avillaStool from '../../../assets/Outdoor/outdoor chair/avila-outdoor-stool.avif';
import  blackBelmont from '../../../assets/Outdoor/outdoor chair/black-belmont-outdoor-dining-chair.avif';
import  Bondi from '../../../assets/Outdoor/outdoor chair/bondi-outdoor-chair.avif';
import  doheny from '../../../assets/Outdoor/outdoor chair/doheny-outdoor-lounge-chair.avif';
import  greyPaoha from '../../../assets/Outdoor/outdoor chair/grey-paoha.avif';
import  laurel from '../../../assets/Outdoor/outdoor chair/laurel-outdoor-chair.avif';
import  lounger from '../../../assets/Outdoor/outdoor chair/white-pfeiffer-outdoor-lounger.avif';
import  zuma from '../../../assets/Outdoor/outdoor chair/zuma-outdoor-lounge-chair.avif';
import { CartContext } from "../../../components/CartContext/CartContext";






let ChairArr = [
    {
        id: 129,
        Img : avillaStool,
        name: 'avilla Stool',
        Price: 100,
        discount : 200,
    },
    {
        id:130,
        Img : blackBelmont,
        name: 'black Belmont',
        Price: 120,
        discount : 160,
    },
    {
        id:140,
        Img : Bondi,
        name: 'Bondi',
        Price: 170,
        discount : 200,
    },
    {
        id:141,
        Img : doheny,
        name: 'doheny ',
        Price: 100,
        discount : 150,
    },
   
    {
        id:142,
        Img : greyPaoha,
        name: 'grey Paoha',
        Price: 100,
        discount : 120,
    },
    {
        id:143,
        Img : laurel,
        name: 'laurel',
        Price: 200,
        discount : 300,
    },
    {
        id:144,
        Img : lounger,
        name: 'lounger',
        Price: 250,
        discount : 350,
    },
    {
        id:145,
        Img : zuma,
        name: 'zuma',
        Price: 180,
        discount : 230,
    }
]


export const OutdoorChairs = () => {
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
    )}