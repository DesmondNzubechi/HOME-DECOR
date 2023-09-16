import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import './style.css';
import { CartContext } from "../CartContext/CartContext";
import { FaUserCircle } from "react-icons/fa";

export const NavigationLink = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Bedroom',
        link: '/bedroom'
    },
    {
        name: 'Living Room',
        link: '/livingroom'
    },
    {
        name: 'Dinning Room',
        link: '/dinningroom'
    },
    {
        name: 'Office',
        link: '/office'
    },
    {
        name: 'Outdoor',
        link: '/outdoor'
    },
    {
        name: 'Decor',
        link: '/decor'
    },
    {
        name: 'Kitchen',
        link: '/kitchen'
    }
]

export const DesktopNav = () => {
    const {showCartItems, wishList, user, showWishList, cartItems, showSearch,} = useContext(CartContext);
let cartNum = cartItems.length;
let wishListNum = wishList.length;
    return(
        <div className="lg:flex hidden flex-row shadow-2xl py-[22px] z-[20]  fixed top-0 left-0 right-0 w-full px-[20px] items-center overflow-x-hidden bg-black  gap-5 justify-around">
            <div className="font-myfont"><h1 className="uppercase text-slate-100 font-bold text-[30px] ">Home Decor</h1></div>
<ul id="links" className="flex  font-fonty flex-row text-slate-200  gap-5 items-center ">
   
    {
        NavigationLink.map(navs => {
            return(
                <li><NavLink  to={navs.link}
style={({isActive}) => {
return isActive ? {borderBottom : '5px solid white'} : {}
}}
 className="xl:text-[17px] text-[14px] " >{navs.name}</NavLink></li>
            )
        })
    }
</ul>
{!user &&
<div className="flex relative z-2 flex-row gap-2">
            <button className="border-slate-50 w-fit border text-white px-[10px] text-center py-[4px] text-[15px] rounded capitaliz font-semibold ">
            <Link to='/login'>Login</Link>
            </button>
            <button className="bg-slate-50 text-slate-900 px-[10px] text-center py-[4px] text-[15px] rounded w-fit capitaliz font-semibold ">
            <Link to='/signup'>Signup</Link>
            </button>
          </div>}
{
       user &&   <NavLink  to='/profile' className='  w-fit rounded-full  text-slate-300 active:text-white  uppercase text-center font-[500] shadow-2xl text-[30px] p-2'><FaUserCircle className="shadow-2xl"/></NavLink>}

<div className="flex text-slate-100 flex-row gap-3  ">
    <BsSearch onClick={showSearch} className="text-[30px]  cursor-pointer hover:text-slate-300"/>
    <div onClick={showWishList} className="relative">
    <button className="absolute bg-Icon font-bold text-slate-50 px-[10px] right-[-10px] rounded-full top-[-20px] ">{wishListNum}</button>
    <AiFillHeart  className="text-[22px]  cursor-pointer hover:text-slate-300 md:text-[25px]  "/>
    </div>
  <div onClick={showCartItems} className="relative">
    <button className="absolute bg-Icon text-slate-50 px-[10px] right-[-10px] font-bold rounded-full top-[-20px] ">{cartNum}</button>
  <AiFillShopping  className="text-[22px]  cursor-pointer hover:text-slate-300 md:text-[25px] "/>
    </div>  </div>

        </div>

    )
}