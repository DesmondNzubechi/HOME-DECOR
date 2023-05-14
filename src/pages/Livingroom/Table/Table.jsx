import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  aneNesting from '../../../assets/Livingroom/livingroom table/prange.avif';
import  declanCofeeTable from '../../../assets/Livingroom/livingroom table/declan-coffee-table.avif';
import  florence from '../../../assets/Livingroom/livingroom table/florence-desk.avif';
import  Gabriella from '../../../assets/Livingroom/livingroom table/gabriella-coffee-table.avif';
import  irenCofee from '../../../assets/Livingroom/livingroom table/iren cofee table.png';
import  mitziTable from '../../../assets/Livingroom/livingroom table/mitzi-expandable-dining-table.avif';
import  nestingTable from '../../../assets/Livingroom/livingroom table/nestin table.avif';
import  xavierTable from '../../../assets/Livingroom/livingroom table/xavier-apartment.avif';
import { CartContext } from "../../../components/CartContext/CartContext";








let TableArr = [
    {
        id:105,
        Img : aneNesting,
        name: 'Ane Nesting',
        Price: 150,
        discount : 300,
    },
    {
        id:106,
        Img : declanCofeeTable,
        name: 'Cofee Table',
        Price: 100,
        discount : 150,
    },
    {
        id:107,
        Img : florence,
        name: 'Florence Desk',
        Price: 230,
        discount : 300,
    },
    {
        id:108,
        Img : Gabriella,
        name: 'Gabriella Table',
        Price: 300,
        discount : 350,
    },
    {
        id:109,
        Img : irenCofee,
        name: 'Iren Table',
        Price: 200,
        discount : 300,
    },
    {
        id:110,
        Img : mitziTable,
        name: 'mitzi Table',
        Price: 200,
        discount : 250,
    },
    {
        id:111,
        Img : nestingTable,
        name: 'Nesting Table',
        Price: 100,
        discount : 150,
    },
    {
        id:112,
        Img : xavierTable,
        name: 'Xavier Table',
        Price: 175,
        discount : 210,
    }
]


export const Tables= () => {
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