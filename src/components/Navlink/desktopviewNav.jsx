import React from "react";
import { Link } from "react-router-dom";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
export const DesktopNav = () => {
    return(
        <div className="lg:flex hidden flex-row py-[10px] z-[20]  fixed top-0 left-0 right-0 w-full px-[20px] items-center overflow-x-hidden bg-Tp  gap-5 justify-around">
            <div className="font-myfont"><h1 className="uppercase text-slate-100 font-bold text-[30px] ">HomeDecor</h1></div>


<ul className="flex  font-fonty flex-row text-slate-200  gap-5 items-center ">
<li><Link  to='/' className="text-[17px] " >Home</Link></li>
<li><Link  to='/bedroom' className="text-[17px]">Bedroom</Link></li>
<li><Link  to='/livingroom' className="text-[17px]">Living Room</Link></li>
<li><Link  to='/dinningroom' className="text-[17px]">Dinning Room</Link></li>
<li><Link  to='/office' className="text-[17px]">Office</Link></li>
<li><Link  to='/outdoor' className="text-[17px]">Outdoor </Link></li>
<li><Link  to='/decor' className="text-[17px]">Decor</Link></li>
<li><Link  to='/kitchen' className="text-[17px]">Kitchen</Link></li>
</ul>

<div className="flex text-slate-100 flex-row gap-3  ">
    <BsSearch className="text-[30px] "/>
    <AiFillHeart className="text-[30px] "/>
    <AiFillShopping className="text-[30px] "/>
</div>

        </div>

    )
}