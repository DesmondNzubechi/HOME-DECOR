import React, { useRef, useState , useContext} from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';


import  crosley from '../../../assets/Office/office shelve/crosley.avif';
import  hazel from '../../../assets/Office/office shelve/hazel.avif';
import  lois from '../../../assets/Office/office shelve/lois.avif';
import  owen from '../../../assets/Office/office shelve/owen.avif';
import  rigo from '../../../assets/Office/office shelve/rigo.avif';
import  mitziTable from '../../../assets/Office/office shelve/roque.avif';
import { CartContext } from "../../../components/CartContext/CartContext";







let ShelvesArr = [
    {
        id:125,
        Img : crosley,
        name: 'crosley',
        Price: 150,
        discount : 300,
    },
    {
        id:126,
        Img : hazel,
        name: 'hazel',
        Price: 100,
        discount : 150,
    },
    {
        id:127,
        Img : lois,
        name: 'lois ',
        Price: 230,
        discount : 300,
    },
    {
        id:128,
        Img : rigo,
        name: 'rigo ',
        Price: 300,
        discount : 350,
    },
    /*
    {
        Img : irenCofee,
        name: 'Iren Table',
        Price: 200,
        discount : 300,
    },
    {
        Img : mitziTable,
        name: 'mitzi Table',
        Price: 200,
        discount : 250,
    },
    {
        Img : nestingTable,
        name: 'Nesting Table',
        Price: 100,
        discount : 150,
    },
    {
        Img : xavierTable,
        name: 'Xavier Table',
        Price: 175,
        discount : 210,
    }
    */
]


export const OfficeShelve = () => {
    const {addToCart, addToWishList} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
ShelvesArr.map(items => (
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