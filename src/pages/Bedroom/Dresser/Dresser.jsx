import React, { useContext, useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import Roque from '../../../assets/Bedroom/dressers/Roque-Dresser-T1-0101.avif';
import tvStand from '../../../assets/Bedroom/dressers/ackley-dresser.avif';
import largeFrame from '../../../assets/Bedroom/dressers/blanklargeframe.avif';
import commode from '../../../assets/Bedroom/dressers/commode.avif';
import drawer from '../../../assets/Bedroom/dressers/drawer.avif';
import sideboard from '../../../assets/Bedroom/dressers/black-eliza-dresser.avif';
import abbeyMedium from '../../../assets/Bedroom/dressers/everson-dresser.avif';
import setChair from '../../../assets/Bedroom/dressers/setchair.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";
export let Dresser = [
    {
        category: 'dresser',
        id: 33,
        Img : Roque,
        name: 'Roque Dresser',
        Price: 100,
        discount : 120,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
      
    },
    {
        category: 'dresser',
        id: 34,
        Img : largeFrame,
        name: 'Large frame',
        Price: 140,
        discount : 190,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
      
    },
    {
        category: 'dresser',
        id: 35,
        Img : commode,
        name: 'Commode',
        Price: 100,
        discount : 150,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
      
    },
    {
        category: 'dresser',
        id: 36,
        Img : drawer,
        name: 'Portable drawer',
        Price: 90,
        discount : 110,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
      
    },
    /*
    {
        Img : setChair,
        name: 'Set Chair',
        Price: 50,
        discount : 100,
    },
    {
        Img : sideboard,
        name: 'Side Board',
        Price: 50,
        discount : 70,
    },
    {
        Img : tvStand,
        name: 'Tv stand',
        Price: 100,
        discount : 150,
    },
    {
        Img : abbeyMedium,
        name: 'Abbey Medium',
        Price: 130,
        discount : 150,
    }
    */
]


export const Dressers = () => {
    const {addToCart, addToWishList, showFullDetail, fullDetail, HideDetails, details,} = useContext(CartContext);
   
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
Dresser.map(items => (



    
    <div key={items.id} className=" rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div onClick={() => showFullDetail(items)} className=" p-2 max-w-[150px] cursor-pointer h-full  ">
        <img src={items.Img} alt="" className="w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 h-full" />
        </div>
       <div className="flex w-full   bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
            <div>
            <h1 className="md:text-[17px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <p className=" top-2 left-2 text-[12px] self-start font-bold  text-slate-50 flex flex-row gap-2 "> <span className=" text-slate-500 line-through ">${items.discount}</span>${items.Price} <span></span></p>
        
            </div>
          
            <div className="flex flex-row gap-2  items-center">
            <AiFillHeart onClick={() => addToWishList(items)} className="text-[20px] text-slate-50  transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-300    shadow rounded-full md:text-[30px]  "/>
    <AiFillShopping onClick={() => addToCart(items)} className="text-[20px] transition ease-out delay-150 hover:-translate-y-1 hover:scale-110  text-slate-50 hover:text-slate-300 rounded-full  md:text-[35px] "/>
            </div>
        </div>
    </div>
))
}

{ 
fullDetail.map(items => {
    return (
        <div className={`fixed px-[40px] py-[20px] ease-in-out  duration-500 flex flex-row justify-center bg-Tp   left-0 right-0 w-full h-[100vh]  ${details} z-[50] `}>
        <div className="bg-slate-100 relative p-4 rounded-lg overflow-y-auto  max-w-[400px] ">
        <HiOutlineXMark onClick={HideDetails}  className="text-[40px] transition ease-in delay-150  hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl absolute left-[10px]    z-[20] top-1 rounded-full p-1 text-red-500  "/>
<div  >
<div className="">
  <img src={items.Img} alt=""  className="w-full h-full"/>
</div>
    <div className="grid grid-cols-2 gap-2 my-5">
    <button onClick={() => addToCart(items)} className="bg-slate-800  px-[10px] py-[5px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100  rounded text-[14px] md:text-[17px] text-slate-50 border ">Add to Cart</button>
    <button onClick={() => addToWishList(items)} className=" border border-slate-800 rounded transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 text-slate-800 text-[14px] md:text-[17px]">Add to Wishlist</button>
</div>
</div>
        <div>
            <h1 className="uppercase font-myfont text-[22px] ">{items.name}</h1>
            <div className="flex flex-row gap-5 ">
                <p className="text-slate-800 font-bold text-[15px] ">{items.Price}</p>
                <p className="text-slate-400 line-through font-bold text-[15px] ">{items.discount}</p>
            </div>
            <div>
                <h1 className="uppercase font-myfont text-[16px] text-slate-800">DEscription</h1>
                <p className="text-slate-600 text-[15px]  font-fonty" >{items.descr}</p>
            </div>
          
        </div>
    </div>
    </div>
    )
})
       }
     </div>
       </div>
        </div>
    )
}