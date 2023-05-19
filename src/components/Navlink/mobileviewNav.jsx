import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa';
import {HiOutlineXMark} from 'react-icons/hi2';
import './style.css';
import { CartContext } from "../CartContext/CartContext";

export const MobileNav = () => {


    const {showCartItems, wishList, showWishList, cartItems,  showSearch,} = useContext(CartContext);

let cartNum = cartItems.length;
let wishListNum = wishList.length;

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
        <div className="lg:hidden z-[20] flex flex-row py-[22px]  fixed top-0 left-0 right-0 w-full px-[20px] items-center overflow-x-hidden bg-black  gap-5 justify-around">
            <div className="font-myfont"><h1 className="uppercase relative z-[10] text-slate-100 font-bold text-[20px] md:text-[30px] ">HomeDecor</h1></div>


<ul id="links" className={`flex fixed transition ease-out duration-500 top-[50px] py-[40px] bg-black w-[50%] h-full ${sideLink}  font-fonty flex-col text-slate-200  gap-5 items-center`}>
<li><NavLink onClick={HideSideLink} to='/'
style={({isActive}) => {
return isActive ? {borderBottom : '5px solid white'} : {}
}}
 className="text-[17px] " >Home</NavLink></li>
<li><NavLink onClick={HideSideLink} 
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
to='/bedroom' className="text-[17px]">Bedroom</NavLink></li>
<li><NavLink onClick={HideSideLink} 
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
to='/livingroom' className="text-[17px]">Living Room</NavLink></li>
<li><NavLink onClick={HideSideLink} to='/dinningroom' 
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
className="text-[17px]">Dinning Room</NavLink></li>
<li><NavLink onClick={HideSideLink} to='/office' 
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
className="text-[17px]">Office</NavLink></li>
<li><NavLink onClick={HideSideLink} to='/outdoor'
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
 className="text-[17px]">Outdoor </NavLink></li>
<li><NavLink onClick={HideSideLink} to='/decor'
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
 className="text-[17px]">Decor</NavLink></li>
<li><NavLink onClick={HideSideLink} to='/kitchen'
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
 className="text-[17px]">Kitchen</NavLink></li>
</ul>

<div className="flex text-slate-100 items-center flex-row gap-3  ">
    <BsSearch onClick={showSearch} className="text-[22px]  cursor-pointer hover:text-slate-300 md:text-[25px] "/>
    <div onClick={showWishList} className="relative">
    <button className="absolute bg-Icon font-bold text-slate-50 px-[10px] right-[-10px] rounded-full top-[-20px] ">{wishListNum}</button>
    <AiFillHeart  className="text-[22px]  cursor-pointer hover:text-slate-300 md:text-[25px]  "/>
    </div>
  <div onClick={showCartItems} className="relative">
    <button className="absolute bg-Icon text-slate-50 px-[10px] right-[-10px] font-bold rounded-full top-[-20px] ">{cartNum}</button>
  <AiFillShopping  className="text-[22px]  cursor-pointer hover:text-slate-300 md:text-[25px] "/>
    </div> 
  { navIcons.showIcon && <FaBars onClick={ShowSideLink} className="text-[22px]  cursor-pointer hover:text-slate-300  md:text-[25px]  "/>}
  { navIcons.hideIcon &&  <HiOutlineXMark onClick={HideSideLink} className="text-[22px] hover:cursor-pointer  md:text-[25px] "/>}
</div>

        </div>

    )
}