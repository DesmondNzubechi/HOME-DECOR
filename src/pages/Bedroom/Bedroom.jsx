import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { Bed } from "./Bed/Bed";
import { Dressers } from "./Dresser/Dresser";
import { Nightstands } from "./Nightstand/Nightstand";

export const Bedroom = () => {

const [bedroom, setBedroom]  = useState({
    beds: true,
    dressers: false,
    nightstand: false,
    title: 'Beds'
})

    return(
        <div className="py-[50px] pt-[130px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px] items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont px-[20px] text-[18px] md:text-[40px] ">{bedroom.title}</h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
        <select 
        onChange={(e) => {
         let value = e.target.value;
         const {beds, dressers, nightstand} = bedroom;
         switch (value) {
            case 'Beds':
                return setBedroom({
                    beds: true,
                    dressers: false,
                    nightstand: false,
                    title: 'Beds'
                });
                break;
                case 'dressers':
                    return setBedroom({
                        beds: false,
                        dressers: true,
                        nightstand: false,
                        title: 'Dressers'
                    });
                    break;
                    case 'nightstand':
                        return setBedroom({
                            beds: false,
                            dressers: false,
                            nightstand: true,
                            title: 'Nightstand'
                        });
                        break;
                        case 'All bedroom':
                            return setBedroom({
                                beds: true,
                                dressers: true,
                                nightstand: true,
                                title: 'All bedroom'
                            })
                break;
         
            default:
                break;
         } 
        }} 
        name="" id="" className="shadow-2xl bg-Tp rounded text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">
            <option value="Beds">Beds</option>
            <option value="dressers">Dressers</option>
            <option value="nightstand">Nightstand</option>
            <option value="All bedroom"> All Bedroom</option>
            
        </select>
        </div>
        </div>
      {  bedroom.beds && <Bed/> }
    { bedroom.dressers &&   <Dressers/>}
      { bedroom.nightstand && <Nightstands/>}
       </div>
        </div>
    )
}