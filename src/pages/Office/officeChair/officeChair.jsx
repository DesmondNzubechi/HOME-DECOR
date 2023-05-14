import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  gerdDesk from '../../../assets/Office/office chair/gerd desk.avif';
import  juneChaiir from '../../../assets/Office/office chair/juneChaiir.avif';
import  liaChair from '../../../assets/Office/office chair/liaChair.avif';
import  rae from '../../../assets/Office/office chair/rae.avif';
import { CartContext } from "../../../components/CartContext/CartContext";






let ChairArr = [
    {
        id:113,
        Img : gerdDesk,
        name: 'Gerd Desk',
        Price: 150,
        discount : 200,
    },
    {
        id:114,
        Img : juneChaiir,
        name: 'June Chair',
        Price: 200,
        discount : 250,
    },
    {
        id:115,
        Img : liaChair,
        name: 'Lia Chair',
        Price: 170,
        discount : 200,
    },
    {
        id:116,
        Img : rae,
        name: 'rae ',
        Price: 100,
        discount : 150,
    },
    /*
    {
        Img : CollinsChair,
        name: 'Collins Chair',
        Price: 100,
        discount : 120,
    },
    {
        Img : Eastwood,
        name: 'East Wood',
        Price: 250,
        discount : 300,
    },
    {
        Img : HughesSwivel,
        name: 'Hughes Swivel',
        Price: 200,
        discount : 250,
    },
    {
        Img : NinaGlider,
        name: 'Nina Glider',
        Price: 180,
        discount : 230,
    }*/
]


export const OfficeChairs = () => {
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