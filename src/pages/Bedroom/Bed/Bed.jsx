import React, { useContext, useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import babyBed from '../../../assets/Bedroom/bed/baby-bed.avif';
import JumiperBed from '../../../assets/Bedroom/bed/jumiper-bed.avif';
import estlle from '../../../assets/Bedroom/bed/estlle.avif';
import whiteBed from '../../../assets/Bedroom/bed/white-bed.avif';
import leartherBed from '../../../assets/Bedroom/bed/leather-bed.avif';
import mockupBed from '../../../assets/Bedroom/bed/mockup.avif';
import doubleBed from '../../../assets/Bedroom/bed/doublebed.avif';
import Bed1 from '../../../assets/Bedroom/bed/bed1.avif';
import bed2 from '../../../assets/Bedroom/bed/bed2.avif';
import { CartContext } from "../../../components/CartContext/CartContext";
import {HiOutlineXMark} from 'react-icons/hi2';
let Beds = [
    {
        id: 25,
        Img : babyBed,
        name: 'Baby Bed',
        Price: 200,
        discount : 300,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       },
    {
        id: 26,
        Img : JumiperBed,
        name: 'Jumiper Bed',
        Price: 230,
        discount : 270,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       
    },
    {
        id: 27,
        Img : estlle,
        name: 'Estlle Bed',
        Price: 250,
        discount : 320,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
       
    },
    {
        id: 28,
        Img : doubleBed,
        name: 'Double Bed',
        Price: 190,
        discount : 230,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    },
    {
        id: 29,
        Img : leartherBed,
        name: 'Leather Bed',
        Price: 215,
        discount : 300,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    },
    {
        id: 30,
        Img : mockupBed,
        name: 'Authentic bed',
        Price: 400,
        discount : 500,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    },
    {
        id: 31,
        Img : whiteBed,
        name: 'Pure White',
        Price: 170,
        discount : 200,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    },
    {
        id: 32,
        Img : Bed1,
        name: 'Quality Bed',
        Price: 210,
        discount : 250,
        descr: 'Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores',
    }
]


export const Bed = () => {
    const {addToCart, addToWishList, showFullDetail, fullDetail} = useContext(CartContext);
    return(
        <div className="py-[50px] ">
       <div>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
{
Beds.map(items => (



    <div>

    <div key={items.id} className=" rounded-2xl relative flex h-full flex-col justify-center items-center w-full rounded   shadow-2xl my-[10px]   ">
         <div onClick={showFullDetail} className=" p-2 max-w-[150px] cursor-pointer  h-full ">
        <img src={items.Img} alt="" className="w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 h-full" />
        </div>
       <div className="flex w-full rounded-b-md  bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
            <div>
            <h1 className="md:text-[17px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <p className=" top-2 left-2 text-[12px] self-start font-bold  text-slate-50 flex flex-row gap-2 "> <span className=" text-slate-500 line-through ">${items.discount}</span>${items.Price} <span></span></p>
        
            </div>
          
            <div className="flex flex-row gap-2  items-center">
            <AiFillHeart onClick={() => addToWishList(items)} className="text-[20px] text-slate-50    shadow rounded-full md:text-[30px]  "/>
    <AiFillShopping onClick={() => addToCart(items)} className="text-[20px]  text-white rounded-full  md:text-[35px] "/>
            </div>
        </div>

        </div>
        <div className={`fixed px-[40px] flex flex-row justify-center bg-details   pt-[20px] left-0 right-0 w-full h-full  ${fullDetail} z-[50] `}>
            <div className="bg-slate-100 relative p-4 overflow-y-auto rounded max-w-[400px] ">
            <HiOutlineXMark  className="text-[40px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl absolute left-[10px]    z-[20] top-1 rounded-full p-1 text-red-500  "/>
    
    <div  >
    <div className="max-w-[400px]">
      <img src={items.Img} alt=""  className="w-full h-full"/>
    </div>
   { /*<span className="flex my-[10px] flex-row gap-0 items-center">
        <button className="bg-slate-900 px-[20px]  py-[5px] w-full text-[30px] font-bold text-slate-50 ">-</button>
        <input type="number" name="" className="py-[15px]  w-fit text-center " value='1' id="" />
        <button className="bg-slate-900 px-[20px]  py-[5px] w-full text-[30px] font-bold text-slate-50 ">+</button>
</span>*/}
        <div className="grid grid-cols-2 gap-2 my-5">
        <button className="bg-slate-800  px-[10px] py-[5px]  rounded text-[20px] text-slate-50 border ">Add to Cart</button>
        <button className=" border border-slate-800 rounded text-slate-800 text-[20px]">Add to Wishlist</button>
    </div>
    </div>
            <div>
                <h1 className="uppercase font-myfont text-[25px] ">{items.name}</h1>
                <div className="flex flex-row gap-5 ">
                    <p className="text-slate-800 font-bold text-[20px] ">{items.Price}</p>
                    <p className="text-slate-400 line-through font-bold text-[20px] ">{items.discount}</p>
                </div>
                <div>
                    <h1 className="uppercase font-myfont text-[20px] text-slate-800">DEscription</h1>
                    <p className="text-slate-600 text-[18px]  font-fonty" >{items.descr}</p>
                </div>
              
            </div>
        </div>
        </div>
    </div>
    
))
}

{
   /* Beds.map(products => {
        return(
            <div className="fixed p-[20px] pt-[50px] left-0 right-0 w-full min-h-[100vh] bg-slate-100 top-0 z-[50]">
    <div>
    <div>
      <img src={Item.Img} alt="" />
    </div>
   {/* <span className="flex  flex-row gap-0 items-center">
        <button className="bg-slate-900 px-[20px]  py-[5px]  text-[30px] font-bold text-slate-50 ">-</button>
        <input type="number" name="" className="py-[15px]  w-fit text-center " value='1' id="" />
        <button className="bg-slate-900 px-[20px]  py-[5px]  text-[30px] font-bold text-slate-50 ">+</button>
        </span>}
    <div className="grid grid-cols-2 gap-2 my-5">
        <button className="bg-slate-800  px-[10px] py-[5px]  rounded text-[20px] text-slate-50 border ">Add to Cart</button>
        <button className=" border border-slate-800 rounded text-slate-800 text-[20px]">Add to Wishlist</button>
    </div>
    </div>
            <div>
                <h1>{Item.name}</h1>
            </div>
        </div>
        )
    })*/
}
     </div>
       </div>
        </div>
    )
}