import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { OfficeChairs } from "./officeChair/officeChair";
import { OfficeDesk } from "./officeDesk/officeDesk";
import { OfficeShelve } from "./officeShelve/officeShelves";


export const Office = () => {

    const [office, setOffice]  = useState({
        officeChair: true,
        officeDesk: false,
       officeShelve: false,
        title: 'office Chair'
    })
    return(
        <div className="py-[50px] pt-[130px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px] items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[18px] md:text-[40px] ">{office.title}</h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
        <select
          onChange={(e) => {
            let value = e.target.value;
            switch (value) {
               case 'office chair':
                   return setOffice({
                       officeChair: true,
                       officeDesk: false,
                      officeShelve: false,
            
                       title: 'office Chairs'
                   });
                   break;
                   case 'office desk':
                       return setOffice({
                           officeChair: false,
                           officeDesk: true,
                          officeShelve: false,
                
                           title: 'office desk'
                       });
                       break;
                       case 'office shelves':
                           return setOffice({
                               officeChair: false,
                               officeDesk: false,
                              officeShelve: true,
                    
                               title: 'office shelve'
                           });
                               break;
                           case 'All office':
                               return setOffice({
                                   officeChair: true,
                                   officeDesk: true,
                                  officeShelve: true,
                                   title: 'All office'
                               })
                   break;
            
               default:
                   break;
            } 
           }} 
         name="" id="" className="shadow-2xl rounded bg-Tp text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">
             <option value="office chair">Office Chair</option>
            <option value="office desk">Office Desk</option>
            <option value="office shelves">Office Shelves</option>
            <option value="All office"> Office Furnitures</option>
           </select>
        </div>
        </div>
       {office.officeDesk &&<OfficeDesk/>}
    { office.officeChair &&  <OfficeChairs/>}
   { office.officeShelve && <OfficeShelve/>}
       </div>
        </div>
    )
}