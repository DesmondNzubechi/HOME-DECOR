import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  LoungeChair from '../../../assets/Livingroom/livingroom chair/soto-chair.avif';
import  BellChair from '../../../assets/Livingroom/livingroom chair/bell-chair.avif';
import  BondiChair from '../../../assets/Livingroom/livingroom chair/bondi-outdoor-chair.avif';
import  BryantChair from '../../../assets/Livingroom/livingroom chair/bryant-chair.avif';
import  CollinsChair from '../../../assets/Livingroom/livingroom chair/collins-chair.avif';
import  Eastwood from '../../../assets/Livingroom/livingroom chair/eastwood-swivel-chair.avif';
import  HughesSwivel from '../../../assets/Livingroom/livingroom chair/hughes-swivel-chair.avif';
import  NinaGlider from '../../../assets/Livingroom/livingroom chair/nina-glider.avif';









let ChairArr = [
    {
        Img : LoungeChair,
        name: 'Lounge chair',
        Price: 150,
        discount : 200,
    },
    {
        Img : BellChair,
        name: 'Bell Chair',
        Price: 200,
        discount : 250,
    },
    {
        Img : BondiChair,
        name: 'Bondi Chair',
        Price: 170,
        discount : 200,
    },
    {
        Img : BryantChair,
        name: 'Bryant Chair ',
        Price: 300,
        discount : 350,
    },
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
    }
]


export const Chairs = () => {
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
ChairArr.map(items => (



    
    <div className=" rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div className=" p-4 max-w-[150px] h-full ">
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