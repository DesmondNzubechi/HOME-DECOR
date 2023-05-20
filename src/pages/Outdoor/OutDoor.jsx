import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { OutdoorChairs } from "./OutDoorChair/OutdoorChair";
import { OutdoorSofa } from "./OutDoorSofa/OutdoorSofa";
import { OutdoorTable } from "./OutdoorTable/OutdoorTable";
export const OutdoorFurniture = () => {
    const [outdoor, setoutdoor]  = useState({
        outdoorChair: true,
        outdoorSofa: false,
       outdoorTable: false,
        title: 'outdoor Chair'
    })
    
    return(
        <div className="py-[50px] pt-[130px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px] items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[15px] md:text-[40px] ">{outdoor.title}</h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
        <select
         onChange={(e) => {
            let value = e.target.value;
          
            switch (value) {
               case 'outdoor Chairs':
                   return setoutdoor({
                       outdoorChair: true,
                       outdoorSofa: false,
                      outdoorTable: false,
            
                       title: 'outdoor Chairs'
                   });
                   break;
                   case 'outdoor Sofa':
                       return setoutdoor({
                           outdoorChair: false,
                           outdoorSofa: true,
                          outdoorTable: false,
                
                           title: 'outdoor Sofas'
                       });
                       break;
                       case 'outdoor Table':
                           return setoutdoor({
                               outdoorChair: false,
                               outdoorSofa: false,
                              outdoorTable: true,
                    
                               title: 'outdoor Table'
                           });
                               break;
                           case 'All Outdoor':
                               return setoutdoor({
                                   outdoorChair: true,
                                   outdoorSofa: true,
                                  outdoorTable: true,
                                   title: 'All outdoor'
                               })
                   break;
            
               default:
                   break;
            } 
           }} 
        name="" id="" className="shadow-2xl rounded bg-Tp text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">
            <option value="outdoor Chairs">Outdoor Chair</option>
            <option value="outdoor Sofa">Outdoor Sofa</option>
            <option value="outdoor Table">Outdoor Table</option>
            <option value="All Outdoor">All Outdoor</option>
        </select>
        </div>
        </div>
    { outdoor.outdoorChair && <OutdoorChairs/>}
    {outdoor.outdoorSofa &&  <OutdoorSofa/>}
    { outdoor.outdoorTable && <OutdoorTable/>}
       </div>
        </div>
    )
}