import React, { useContext, useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { Link } from "react-router-dom";

import  aggyRug from '../../../assets/Decor/rug/aggy-rug.avif';
import  ainaRug from '../../../assets/Decor/rug/aina-rug.avif';
import  azrusRug from '../../../assets/Decor/rug/azrus-rug.avif';
import  casperRug from '../../../assets/Decor/rug/casper-outdoor-rug.avif';
import  eloiseRug from '../../../assets/Decor/rug/eloise-rug.avif';
import  jayaRug from '../../../assets/Decor/rug/jaya-rug.avif';
import  orsonRug from '../../../assets/Decor/rug/orson-rug.avif';
import  prismRug from '../../../assets/Decor/rug/prism-washable-rug.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";





export let RugArr = [
    {
        id:61,
        Img : aggyRug,
        name: 'aggy Rug',
        Price: 100,
        discount : 170,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',

    },
    {
        id:62,
        Img : ainaRug,
        name: 'aina Rug',
        Price: 70,
        discount : 100,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',
   
    },
    {
        id:63,
        Img : azrusRug,
        name: 'azrus Rug',
        Price: 100,
        discount : 130,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',
   
    },
    {
        id:64,
        Img : casperRug,
        name: 'casper Rug ',
        Price: 65,
        discount : 100,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',
   
    },
   
    {
        id:65,
        Img : eloiseRug,
        name: 'eloise Rug',
        Price: 110,
        discount : 250,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',
   
    },
    {
        id:66,
        Img : jayaRug,
        name: 'jaya Rug',
        Price: 155,
        discount : 270,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',
   
    },
    {
        id:67,
        Img : orsonRug,
        name: 'orson Rug',
        Price: 100,
        discount : 250,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',
   
    },
    {
        id:68,
        Img : prismRug,
        name: 'prism Rug',
        Price: 80,
        discount : 150,
       descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       category : 'decor rug',
   
    }
]


export const Rug = () => {
    const {addToCart, addToWishList, showFullDetail, fullDetail, HideDetails, details,} = useContext(CartContext);
     return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
RugArr.map(items => (



  

    <div key={items.id} className=" rounded-2xl relative flex h-full flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <Link to='/product' onClick={() => showFullDetail(items)} className=" p-2 max-w-[150px] cursor-pointer h-full ">
        <img src={items.Img} alt="" className="w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 h-full" />
        </Link>
       <div className="flex w-full rounded-b-md  bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
            <div>
            <h1 className="md:text-[17px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <p className=" top-2 left-2 text-[12px] self-start font-bold  text-slate-50 flex flex-row gap-2 "> <span className=" text-slate-500 line-through ">${items.discount}</span>${items.Price} <span></span></p>
        
            </div>
          
            <div className="flex flex-row gap-2  items-center">
            <AiFillHeart onClick={() => addToWishList(items)} className="text-[20px] text-slate-50  transition ease-out delay-150 text-slate-50 hover:text-slate-300 active:text-green-500   shadow rounded-full md:text-[30px]  "/>
    <AiFillShopping onClick={() => addToCart(items)} className="text-[20px] transition ease-out delay-150 text-slate-50 hover:text-slate-300 active:text-green-500 rounded-full  md:text-[35px] "/>
            </div>
        </div>
        </div>
       
  
))
}
{ 
fullDetail.map(items => {
    return (
        <div className={`fixed px-[40px] bg-Tp py-[20px] ease-in-out  duration-500 flex flex-row justify-center    left-0 right-0 w-full h-[100vh]  ${details} z-[50] `}>
        <div className="bg-slate-100 relative p-4 rounded-lg overflow-y-auto  max-w-[400px] ">
        <HiOutlineXMark onClick={HideDetails}  className="text-[40px] transition ease-in delay-150  hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl absolute left-[10px]    z-[20] top-1 rounded-full p-1 text-red-500  "/>
<div  >
<div className="">
  <img src={items.Img} alt=""  className="w-full h-full"/>
</div>
    <div className="grid grid-cols-2 gap-2 my-5">
    <button onClick={() => addToCart(items)} className="bg-slate-800  px-[10px] py-[5px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100  rounded text-[14px] md:text-[17px] text-slate-50 border ">Addd to Cart</button>
    <button onClick={() => addToWishList(items)} className=" border border-slate-800 rounded transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 text-slate-800 text-[14px] md:text-[17px]">Add to Wishlist</button>
</div>
</div>
        <div>
            <h1 className="uppercase font-myfont text-[22px] ">{items.name}</h1>
            <div className="flex flex-row gap-5 ">
                <p className="text-slate-800 font-bold text-[15px] ">${items.Price}</p>
                <p className="text-slate-400 line-through font-bold text-[15px] ">${items.discount}</p>
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