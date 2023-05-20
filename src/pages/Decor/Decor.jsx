import React, { useRef, useState } from "react";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import { Rug } from "./Rug/Rug";
import { Light } from "./Light/Light";
import { Pillow } from "./pillow/Pillow";
import { Throw } from "./Throw/Throw";


export const Decor = () => {

    
const [decor, setDecor]  = useState({
    rug: true,
    light: false,
    pillow: false,
    throw: false,
    title: 'rug'
})


    return(
        <div className="py-[50px] pt-[130px] px-[20px] ">
       <div>
        <div className="flex md:px-[20px]  items-end flex-row justify-between ">
        <h1 className="uppercase  p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[15px] px-[20px] md:text-[40px] ">{decor.title} </h1>
        <div>
            <span className="font-myfont text-[15px] md:text-[20px] flex flex-col gap-0 ">Filter Items</span>
            <select 
        onChange={(e) => {
         let value = e.target.value;
       
         switch (value) {
            case 'Beds':
                return setDecor({
                    rug: true,
                    light: false,
                    pillow: false,
                    throw: false,
                    title: 'rugs'
                });
                break;
                case 'light':
                    return setDecor({
                        rug: false,
                        light: true,
                        pillow: false,
                        throw: false,
                        title: 'lights'
                    });
                    break;
                    case 'pillow':
                        return setDecor({
                            rug: false,
                            light: false,
                            pillow: true,
                            throw: false,
                            title: 'pillow'
                        });
                        break;
                        case 'throw':
                            return setDecor({
                                rug: false,
                                light: false,
                                pillow: false,
                                throw: true,
                                title: 'throw'
                            });
                            break;
                        case 'All Outdoor':
                            return setDecor({
                                rug: true,
                                light: true,
                                pillow: true,
                                throw: true,
                                title: 'All outdoor'
                            })
                break;
         
            default:
                break;
         } 
        }} 
        name="" id="" className="shadow-2xl bg-Tp rounded text-slate-200 outline-none px-[10px] text-[12px]  md:text-[25px] font-fonty ">
             <option value="rug">rug</option>
            <option value="pillow">Pillow</option>
            <option value="light">light</option>
            <option value="throw">throw</option>
            <option value="All Outdoor"> All Decor</option>
        </select>
        </div>
        </div>
    {decor.light && <Light/>}
   { decor.pillow &&  <Pillow/>}
    { decor.rug && <Rug/>}
   {decor.throw &&  <Throw/>}
       </div>
        </div>
    )
}