import React, { useContext, useState } from "react";
import {AiFillShopping, AiOutlinePlus, AiOutlineMinus, AiFillMinusCircle} from 'react-icons/ai';
import {BsFillPlusCircleFill, BsArrowRight} from 'react-icons/bs';
import {HiOutlineXMark} from 'react-icons/hi2';
import Pic from '../../assets/cushion7.jpg';
import {RiSecurePaymentFill} from 'react-icons/ri';
import { CartContext } from "../CartContext/CartContext";

export const WishList = () => {

const {cartItems,wishList, removeFromCart, showCart, reduceQuantity, hideCartItems, showWish ,removeFromWishList, increaseCart, hideWishList} = useContext(CartContext);
    return(
      <>
       {showWish &&
        <div className="fixed p-[20px] h-full overflow-y-auto top-0 left-0 right-0  z-[30] bg-Icon ">
<div className="bg-slate-900 h-[100vh] overflow-y-auto fixed top-0 right-0 bottom-0 w-[100%] md:w-[40%] ">
<div className="flex fixed top-0 z-[20] right-[20px]  md:w-[38%] w-full bg-slate-900 flex-row  p-[10px] justify-around items-center  gap-2  ">
    <h1 className="font-myfont py-[5px] text-[20px]  uppercase text-white">my wishlist</h1>
  <HiOutlineXMark  onClick={hideWishList} className="text-[40px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl fixed right-[40px]    z-[20] top-5 rounded-full p-1 text-red-500  "/>
</div>
<div className="p-[20px] grid  pt-[80px] pb-[120px] bg-slate-900 gap-4 grid-cols-1 justify-center  ">
{ 

wishList.length === 0? 
<div>
  <p className="text-white text-center uppercase font-myfont text-[25px]">Ooops Your<br></br> wishlist is Empty</p>
</div>
:
wishList.map(product => {

  return(

<div key={product.id} className="flex flex-row relative items-center border-b-[2px] border-slate-800  pb-[10px]  justify-around gap-5">
    <div className="max-w-[150px] h-[130px] md:max-w-[200px]">
    <img src={product.Img} alt="" className="rounded h-full p-4 w-full bg-white" />
    </div>
    <div className="flex flex-col gap-1 md:gap-3">
  <h1 className="text-slate-50 font-fonty uppercase text-[15px] ">{product.name}</h1>
  <span className="text-slate-200 flex flex-row gap-5 ">
  <p className=" text-slate-50 text-[20px] ">{product.Price}</p>
  <p className="text-slate-500 text-[20px] line-through">{product.discount}</p>
  </span>
  <button onClick={() => removeFromWishList(product)} className="text-slate-500 shadow-2xl bg-slate-900 border-slate-500 border border-[2px] hover:text-white hover:bg-red-500 transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 rounded">Remove</button>
  </div>
    <div>
    </div>
</div>
  )
})

}
</div>

</div>
 </div>
       }
        </>
    )
}