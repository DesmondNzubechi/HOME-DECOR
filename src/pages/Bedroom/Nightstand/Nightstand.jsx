import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
//import AbbeySmall from '../../../assets/Bedroom/Nightstand/Abbey-Small.avif';
import Ackley from '../../../assets/Bedroom/Nightstand/Ackley.avif';
import Colette from '../../../assets/Bedroom/Nightstand/Colette.avif';
import Everson from '../../../assets/Bedroom/Nightstand/Isla.avif';
import Isla from '../../../assets/Bedroom/Nightstand/Roque.avif';
import Roque from '../../../assets/Bedroom/Nightstand/everson.avif';
import Soffia from '../../../assets/Bedroom/Nightstand/soffia.avif';
import Tina from '../../../assets/Bedroom/Nightstand/tina.avif';

let Nightstand = [
    {
        Img : Tina,
        name: 'Abbey Small',
        Price: 50,
        discount : 100,
    },
    {
        Img : Ackley,
        name: 'Ackley',
        Price: 60,
        discount : 70,
    },
    {
        Img : Colette,
        name: 'Colette',
        Price: 100,
        discount : 120,
    },
    {
        Img : Everson,
        name: 'Everson ',
        Price: 80,
        discount : 100,
    },
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
]


export const Nightstands = () => {
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
{
Nightstand.map(items => (



    
    <div className=" rounded relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
        <div className=" max-w-[300px] m-0  h-full ">
        <img src={items.Img} alt="" className="w-full p-0 h-full " />
        </div>
       <div className="flex w-full  bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
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