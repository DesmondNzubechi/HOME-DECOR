import React from "react";
import { Link, NavLink } from "react-router-dom";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import './style.css';




export const DesktopNav = () => {
    return(
        <div className="lg:flex hidden flex-row py-[10px] z-[20]  fixed top-0 left-0 right-0 w-full px-[20px] items-center overflow-x-hidden bg-Tp  gap-5 justify-around">
            <div className="font-myfont"><h1 className="uppercase text-slate-100 font-bold text-[30px] ">HomeDecor</h1></div>


<ul id="links" className="flex  font-fonty flex-row text-slate-200  gap-5 items-center ">
<li><NavLink  to='/'
style={({isActive}) => {
return isActive ? {borderBottom : '5px solid white'} : {}
}}
 className="text-[17px] " >Home</NavLink></li>
<li><NavLink  
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
to='/bedroom' className="text-[17px]">Bedroom</NavLink></li>
<li><NavLink  
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
to='/livingroom' className="text-[17px]">Living Room</NavLink></li>
<li><NavLink  to='/dinningroom' 
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
className="text-[17px]">Dinning Room</NavLink></li>
<li><NavLink  to='/office' 
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
className="text-[17px]">Office</NavLink></li>
<li><NavLink  to='/outdoor'
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
 className="text-[17px]">Outdoor </NavLink></li>
<li><NavLink  to='/decor'
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
 className="text-[17px]">Decor</NavLink></li>
<li><NavLink  to='/kitchen'
style={({isActive}) => {
    return isActive ? {borderBottom : '5px solid white'} : {}
    }}
 className="text-[17px]">Kitchen</NavLink></li>
</ul>

<div className="flex text-slate-100 flex-row gap-3  ">
    <BsSearch className="text-[30px] "/>
    <AiFillHeart className="text-[30px] "/>
    <AiFillShopping className="text-[30px] "/>
</div>

        </div>

    )
}