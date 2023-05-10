import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { Rug } from "./Rug/Rug";
import { Light } from "./Light/Light";
import { Pillow } from "./pillow/Pillow";
import { Throw } from "./Throw/Throw";










export const Decor = () => {
    return(
        <div className="py-[50px] pt-[100px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px] items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[15px] md:text-[40px] ">Outdoor Furnitures </h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
        <select name="" id="" className="shadow-2xl bg-Tp text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">
            <option value="All"> All Decor</option>
            <option value="Pillow">Pillow</option>
            <option value="light">light</option>
            <option value="rug">rug</option>
            <option value="throw">throw</option>
        </select>
        </div>
        </div>
     <Light/>
     <Pillow/>
     <Rug/>
     <Throw/>
       </div>
        </div>
    )
}