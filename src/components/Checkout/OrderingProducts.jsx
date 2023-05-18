import React, { useState } from "react";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import img from '../../assets/Decor/pillow/blsck pillow.avif';

export const Ordering = () => {
    const  [orderedItems, setOrderedItem] = useState({
        orderedP: false,
        iconUp: false,
        iconDown: true,
        cartText: true,

    });
    const showOrderedItems = () => {
        if (orderedItems.orderedP) {
            setOrderedItem({
                orderedP: false,
        iconUp: false,
        iconDown: true,
        cartText: true,
            })
        } else {
            setOrderedItem({
                orderedP: true,
        iconUp: true,
        iconDown: false,
        cartText: false,
            })
        }
    }
    return(
        <div className="bg-slate-100 relative h-full">
            <div onClick={showOrderedItems} className=" cursor-pointer bg-white shadow p-3 rounded flex flex-col gap-5">
                <div className="flex  justify-between">
                 <h1 className="text-[20px] font-myfont ">Your Cart</h1> 
                    <div className="flex flex-row items-center justify-between text-[20px] font-myfont gap-2">
                     <p>1 item</p>
                     {orderedItems.iconDown &&  <IoIosArrowDown/>}
                       {orderedItems.iconUp && <IoIosArrowUp/>}
                    </div>
                </div>

              { orderedItems.orderedP && <div  className="flex flex-col  gap-2">
                <div className="flex justify-between items-center">
           <div className="max-w-[100px]">
            <img src={img} alt="" />
           </div>
           <p className="text-slate-900 font-semibold uppercase ">expensive</p>
           <p> <span className="font-semibold text-slate-900">$9909 </span> <span className="line-through text-slate-400 "> $9753</span></p>
                </div>
                </div>
}
            </div>

<div className="my-[50px] ">
    <div className="flex flex-col gap-2 border-b-[3px] border-slate-500  p-2">
    <span className="flex justify-between gap-2 ">
        <p className="text-slate-600 font-fonty">Subtotal:</p>
        <p className="text-slate-600 font-fonty">$1000</p>
    </span>
    <span className="flex justify-between gap-2 ">
        <p className="text-slate-600 font-fonty">Shipping:</p>
        <p className="text-slate-600 font-fonty">$30</p>
    </span>
    <span className="flex justify-between gap-2 ">
        <p className="text-slate-600 font-fonty">Salels Tax:</p>
        <p className="text-slate-600 font-fonty">$20</p>
    </span>
    </div>
    <div className="flex justify-between flex-row p-2  font-semibold ">
        <p className="text-[20px]">Total:</p>
        <p className="text-[20px]">$1,390</p>
    </div>
    <div className="flex justify-between flex-row p-2  font-semibold ">
        <p className="text-red-500">You saved:</p>
        <p className="text-red-500">$899</p>
    </div>
</div>
       
        </div>
    )
}