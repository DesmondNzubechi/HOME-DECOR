import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { Chairs } from "./Chair/Chair";
import { Sofa } from "./Sofa/Sofa";
import { Tables } from "./Table/Table";

export const Livingroom = () => {

    const [livingroom, setlivingroom]  = useState({
        livingroomChair: true,
        livingroomSofa: false,
       livingroomTable: false,
        title: 'livingroom Chair'
    })

    return(
        <div className="py-[50px] pt-[130px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px] items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[18px] md:text-[40px] ">{livingroom.title}</h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
        <select
         onChange={(e) => {
            let value = e.target.value;
          
            switch (value) {
               case 'livingroom Chairs':
                   return setlivingroom({
                       livingroomChair: true,
                       livingroomSofa: false,
                      livingroomTable: false,
            
                       title: 'livingroom Chairs'
                   });
                   break;
                   case 'livingroom Sofa':
                       return setlivingroom({
                           livingroomChair: false,
                           livingroomSofa: true,
                          livingroomTable: false,
                
                           title: 'livingroom Sofas'
                       });
                       break;
                       case 'livingroom Table':
                           return setlivingroom({
                               livingroomChair: false,
                               livingroomSofa: false,
                              livingroomTable: true,
                    
                               title: 'livingroom Table'
                           });
                               break;
                           case 'All livingroom':
                               return setlivingroom({
                                   livingroomChair: true,
                                   livingroomSofa: true,
                                  livingroomTable: true,
                                   title: 'All livingroom'
                               })
                   break;
            
               default:
                   break;
            } 
           }} 
         name="" id="" className="shadow-2xl bg-Tp rounded text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">
           <option value="livingroom Chairs">Chair</option>
            <option value="livingroom Sofa">Sofa</option>
            <option value="livingroom Table">Table</option>
            <option value="All livingroom"> All Living Room</option>
        </select>
        </div>
        </div>
        { livingroom.livingroomChair && <Chairs/>}
    {livingroom.livingroomSofa &&  <Sofa/>}
    { livingroom.livingroomTable && <Tables/>}
       </div>
        </div>
    )
}