import React, { useContext, useRef, useState } from "react";
import newArrivalImg1 from '../../assets/Best Seller/cushion7.jpg';
import newArrivalImg2 from '../../assets/Best Seller/chair-realistic-illustration_1284-9507.avif';
import newArrivalImg3 from '../../assets/Best Seller/cushion1.avif';
import newArrivalImg4 from '../../assets/Best Seller/cushion6.webp';
import newArrivalImg5 from '../../assets/Best Seller/interor2.avif';
import newArrivalImg6 from '../../assets/Best Seller/officeF8.avif';
import newArrivalImg7 from '../../assets/Best Seller/officeF9.avif';
import newArrivalImg8 from '../../assets/Best Seller/sittingR4.avif';
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { CartContext } from "../CartContext/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";


export let newArrivalObj = [
    {
        category: 'best seller',
        id: 9,
        Img : newArrivalImg1,
        name: 'quality red',
        Price: 120,
        discount : 200,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    

    },
    {
        category: 'best seller',
        id: 10,
        Img : newArrivalImg2,
        name: 'simple red',
        Price: 270,
        discount : 370,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    
    },
    {
        category: 'best seller',
        id: 11,
        Img : newArrivalImg3,
        name: 'quality interor',
        Price: 450,
        discount : 700,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    
    },
    {
        category: 'best seller',
        id: 12,
        Img : newArrivalImg4,
        name: 'expensive sofa',
        Price: 300,
        discount : 500,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    
    },
    {
        category: 'best seller',
        id: 13,
        Img : newArrivalImg5,
        name: 'full interor',
        Price:190,
        discount : 300,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    
    },
    {
        category: 'best seller',
        id: 14,
        Img : newArrivalImg6,
        name: 'home table',
        Price: 25,
        discount : 400,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    
    },
    {
        category: 'best seller',
        id: 15,
        Img : newArrivalImg7,
        name: 'reading setup',
        Price: 180,
        discount : 300,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    
    },
    {
        category: 'best seller',
        id: 16,
        Img : newArrivalImg8,
        name: 'smooth sofa',
        Price: 380,
        discount : 400,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    
    }
]


export const BestSeller = () => {

    const {addToCart, addToWishList, showFullDetail, fullDetail, HideDetails, details,} = useContext(CartContext);
    
    return(
        <div className="py-[50px] ">
       <div>
        <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[25px] md:text-[40px] ">Best Seller</h1>
     <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
{
newArrivalObj.map(items => (

    <div key={items.id} className=" rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div onClick={() => showFullDetail(items)} className=" p-2 max-w-[150px] cursor-pointer h-[130px] ">
        <img src={items.Img} alt="" className="w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 h-full" />
        </div>
       <div className="flex w-full rounded-b-md  bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
            <div>
            <h1 className="md:text-[17px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <p className=" top-2 left-2 text-[12px] self-start font-bold  text-slate-50 flex flex-row gap-2 "> <span className=" text-slate-500 line-through ">${items.discount}</span>${items.Price} <span></span></p>
        
            </div>
         
            <p className="absolute top-2 text-[15px] bg-Icon p-1 italic text-slate-200 rounded ">Best seller</p>
          
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