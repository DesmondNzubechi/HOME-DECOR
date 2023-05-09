import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { OfficeChairs } from "./officeChair/officeChair";
import { OfficeDesk } from "./officeDesk/officeDesk";
export const Office = () => {
    return(
        <div className="py-[50px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px] items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[18px] md:text-[40px] ">Office Furnitures </h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
        <select name="" id="" className="shadow-2xl bg-Tp text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">
            <option value="All"> Office Furnitures</option>
            <option value="Office Desk">Office Desk</option>
            <option value="Office Shelves">Office Shelves</option>
            <option value="Office Chair">Office Chair</option>
        </select>
        </div>
        </div>
       <OfficeDesk/>
       <OfficeChairs/>
    
       </div>
        </div>
    )
}