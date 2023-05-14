import React, { useRef, useState, useContext } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
//import AbbeySmall from '../../../assets/Bedroom/Nightstand/Abbey-Small.avif';
import CabinetPiv from '../../../assets/Dinningroom/dinning cabinet/cabinet.avif';
import MordernCab from '../../../assets/Dinningroom/dinning cabinet/mordencabinet.avif';
import niceCab from '../../../assets/Dinningroom/dinning cabinet/nice.avif';
import suppercool from '../../../assets/Dinningroom/dinning cabinet/suppercool.avif';
import vendi from '../../../assets/Dinningroom/dinning cabinet/vendinemachine.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
let CabinetArr = [
    {
        id: 69,
        Img : CabinetPiv,
        name: 'Cabinet ',
        Price: 300,
        discount : 350,
    },
    {
        id:70,
        Img : MordernCab,
        name: 'Mordern',
        Price: 350,
        discount : 400,
    },
    {
        id:71,
        Img :niceCab,
        name: 'Nice',
        Price: 348,
        discount : 400,
    },
    {
        id:72,
        Img : suppercool,
        name: 'Supercool',
        Price: 400,
        discount : 450,
    },
    /*
    {
        Img : Isla,
        name: 'Isla Stand',
        Price: 100,
        discount : 160,
    },
    {
        Img : Roque,
        name: 'Rogue stand',
        Price: 100,
        discount : 150,
    },
    {
        Img : Soffia,
        name: 'Soffia',
        Price: 150,
        discount : 200,
    },
    {
        Img : Tina,
        name: 'Tina Nighstand',
        Price: 50,
        discount : 70,
    }
    */
]


export const Cabinets = () => {
    
        const {addToCart, addToWishList} = useContext(CartContext);
        return(
            <div className="py-[50px] ">
           <div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
    {
    CabinetArr.map(items => (
    
    
    
        
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