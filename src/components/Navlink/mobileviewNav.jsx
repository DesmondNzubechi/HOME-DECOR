import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa';
import {HiOutlineXMark} from 'react-icons/hi2';


export const MobileNav = () => {
const [navIcons, SetNavIcons] = useState({
   showIcon : true,
   hideIcon : false,
})



const [sideLink, setSideLink] = useState('left-[-1000px]');
const ShowSideLink = ()  => {
    SetNavIcons({
        hideIcon : true,
        showIcon : false,
    });
    setSideLink('left-0');
}
const HideSideLink = ()  => {
    SetNavIcons({
        hideIcon : false,
        showIcon : true,
    });
    setSideLink('left-[-1000px]');
}
    return(
        <div className="lg:hidden z-[20] flex flex-row py-[10px]  fixed top-0 left-0 right-0 w-full px-[20px] items-center overflow-x-hidden bg-Tp  gap-5 justify-around">
            <div className="font-myfont"><h1 className="uppercase text-slate-100 font-bold text-[20px] md:text-[30px] ">HomeDecor</h1></div>


<ul className={`flex fixed transition ease-out duration-500 top-[50px] py-[40px] bg-black w-[50%] h-full ${sideLink}  font-fonty flex-col text-slate-200  gap-5 items-center`}>
<li><Link onClick={HideSideLink} to='/' className="text-[17px] " >Home</Link></li>
<li><Link onClick={HideSideLink} to='/bedroom' className="text-[17px]">Bedroom</Link></li>
<li><Link onClick={HideSideLink} to='/livingroom' className="text-[17px]">Living Room</Link></li>
<li><Link onClick={HideSideLink} to='/dinningroom' className="text-[17px]">Dinning Room</Link></li>
<li><Link onClick={HideSideLink} to='/office' className="text-[17px]">Office</Link></li>
<li><Link onClick={HideSideLink} to='/outdoor' className="text-[17px]">Outdoor </Link></li>
<li><Link onClick={HideSideLink} to='/decor' className="text-[17px]">Decor</Link></li>
<li><Link onClick={HideSideLink} to='/kitchen' className="text-[17px]">Kitchen</Link></li>
</ul>

<div className="flex text-slate-100 items-center flex-row gap-3  ">
    <BsSearch className="text-[22px] md:text-[25px] "/>
    <AiFillHeart className="text-[22px] md:text-[25px]  "/>
    <AiFillShopping className="text-[22px] md:text-[25px] "/>
  { navIcons.showIcon && <FaBars onClick={ShowSideLink} className="text-[22px] md:text-[25px]  "/>}
  { navIcons.hideIcon &&  <HiOutlineXMark onClick={HideSideLink} className="text-[22px] md:text-[25px] "/>}
</div>

        </div>

    )
}