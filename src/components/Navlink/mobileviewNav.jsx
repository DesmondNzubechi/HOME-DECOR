import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillShopping, AiFillHeart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';
import './style.css';
import { CartContext } from "../CartContext/CartContext";
import { NavigationLink } from "./desktopviewNav";
import { FaUserCircle } from "react-icons/fa";

export const MobileNav = () => {
  const { showCartItems, wishList, user, showWishList, cartItems, showSearch } = useContext(CartContext);
  let cartNum = cartItems.length;
  let wishListNum = wishList.length;

  const [navIcons, SetNavIcons] = useState({
    showIcon: true,
    hideIcon: false,
  });

  const [sideLink, setSideLink] = useState('left-[-1000px]');

  const ShowSideLink = () => {
    SetNavIcons({
      hideIcon: true,
      showIcon: false,
    });
    setSideLink('left-0');
  };

  const HideSideLink = () => {
    SetNavIcons({
      hideIcon: false,
      showIcon: true,
    });
    setSideLink('left-[-1000px]');
  };



  return (
    <div className="lg:hidden shadow-2xl z-[20] flex flex-row py-[22px] fixed top-0 left-0 right-0 w-full px-[20px] items-center overflow-x-hidden bg-black gap-5 justify-around">
      <div className="font-myfont">
        <h1 className="uppercase relative z-[10] text-slate-100 font-bold text-[20px] md:text-[30px]">Home Decor</h1>
      </div>
      <ul id="links" className={`flex fixed transition ease-out duration-500 top-[50px] py-[40px] bg-black w-[50%] h-full ${sideLink} font-fonty flex-col text-slate-200 gap-5 items-center`}>
        {NavigationLink.map(navs => (
          <li>
            <NavLink
              onClick={HideSideLink}
              to={navs.link}
              style={({ isActive }) => isActive ? { borderBottom: '5px solid white' } : {}}
              className="xl:text-[17px] text-[14px] "
            >
              {navs.name}
            </NavLink>
          </li>
        ))}
        
     {!user && <div className="flex relative z-2 flex-col gap-2">
            <button className="border-slate-50 w-fit border text-white px-[20px] text-center py-[4px] text-[20px] rounded capitaliz font-semibold ">
            <Link to='/login' onClick={HideSideLink}>Login</Link>
            </button>
            <button className="bg-slate-50 text-slate-900 px-[20px] text-center py-[4px] text-[17px] rounded w-fit capitaliz font-semibold ">
            <Link to='/signup' onClick={HideSideLink} >Signup</Link>
            </button>
          </div>}

        { user && <NavLink onClick={HideSideLink}  to='/profile' className='  w-fit rounded-full  text-slate-300 active:text-white  uppercase text-center font-[500] shadow-2xl text-[30px] p-2'><FaUserCircle className="shadow-2xl"/></NavLink>}

      </ul>
      <div className="flex text-slate-100 items-center flex-row gap-3">
        <BsSearch
          onClick={showSearch}
          className="text-[22px] cursor-pointer hover:text-slate-300 md:text-[25px]"
        />
        <div onClick={showWishList} className="relative">
          <button className="absolute bg-Icon font-bold text-slate-50 px-[10px] right-[-10px] rounded-full top-[-20px] ">
            {wishListNum}
          </button>
          <AiFillHeart className="text-[22px] cursor-pointer hover:text-slate-300 md:text-[25px]" />
        </div>
        <div onClick={showCartItems} className="relative">
          <button className="absolute bg-Icon text-slate-50 px-[10px] right-[-10px] font-bold rounded-full top-[-20px] ">
            {cartNum}
          </button>
          <AiFillShopping className="text-[22px] text-slate-50 cursor-pointer hover:text-slate-300 md:text-[25px]" />
        </div>
        {navIcons.showIcon && (
          <FaBars
            onClick={ShowSideLink}
            className="text-[22px] cursor-pointer hover:text-slate-300 md:text-[25px]"
          />
        )}
        {navIcons.hideIcon && (
          <HiOutlineXMark
            onClick={HideSideLink}
            className="text-[22px] hover:cursor-pointer md:text-[25px]"
          />
        )}

        
      </div>
    </div>
  );
}
