import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { Cabinets } from "./Cabinet/cabinet";
import { DinningChair } from "./Chair/Chair";
import { DinningTable } from "./Table/Table";


export const Dinningroom = () => {
    
    const [dinning, setDinning]  = useState({
        dinningCabinet: true,
        dinningChair: false,
       dinningTable: false,
        title: 'Dinning Cabinets'
    })
    return(
        <div className="py-[50px] pt-[130px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px] items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[18px] md:text-[40px] ">{dinning.title} </h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
        <select
          onChange={(e) => {
            let value = e.target.value;
            switch (value) {
               case 'dinning cabinet':
                   return setDinning({
                       dinningCabinet: true,
                       dinningChair: false,
                      dinningTable: false,
            
                       title: 'Dinning Cabinets'
                   });
                   break;
                   case 'dinning chair':
                       return setDinning({
                           dinningCabinet: false,
                           dinningChair: true,
                          dinningTable: false,
                
                           title: 'dinning chairs'
                       });
                       break;
                       case 'dinning table':
                           return setDinning({
                               dinningCabinet: false,
                               dinningChair: false,
                              dinningTable: true,
                    
                               title: 'dinning tables'
                           });
                               break;
                           case 'All Dinning':
                               return setDinning({
                                   dinningCabinet: true,
                                   dinningChair: true,
                                  dinningTable: true,
                                   title: 'All dinning'
                               })
                   break;
            
               default:
                   break;
            } 
           }} 
         name="" id="" className="shadow-2xl rounded bg-Tp text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">

            <option value="dinning table">Dinning Table</option>
            <option value="dinning cabinet">Dinning Cabinet</option>
            <option value="dinning chair">Dinning Chair</option>
            <option value="All Dinning"> All Dinningroom</option>
        </select>
        </div>
        </div>
     { dinning.dinningCabinet && <Cabinets/>}
     {dinning.dinningChair &&  <DinningChair/>}
    { dinning.dinningTable &&  <DinningTable/>}
       </div>
        </div>
    )
}