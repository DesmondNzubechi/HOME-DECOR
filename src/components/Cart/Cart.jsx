import React, { useContext, useState } from "react";
import {AiFillShopping, AiOutlinePlus, AiOutlineMinus, AiFillMinusCircle} from 'react-icons/ai';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {HiOutlineXMark} from 'react-icons/hi2';
import Pic from '../../assets/cushion7.jpg';
import { CartContext } from "../CartContext/CartContext";

export const CartLog = () => {

  const {cartItems} = useContext(CartContext);
const {showCart} = useContext(CartContext);
const {hideCartItems} = useContext(CartContext);

const [hideCart, setHideCart]  = useState(false);
const initialCartItems = [
    {
   name: 'Sofa',
   img: Pic,
   price: 600,
    }
];

    return(
      <>
       {showCart &&
        <div className="fixed p-[20px] h-full overflow-y-auto top-0 left-0 right-0  z-[30] bg-Tp ">
<div className="bg-black absolute top-0 left-0 bottom-0 w-[100%] md:w-[50%] ">
<div className="flex flex-row border-b border-slate-500 p-[10px] justify-between items-center  gap-2  ">
    <h1 className="uppercase font-myfont    flex flex-row items-center  gap-2  text-slate-50 text-[22px] md:text-[30px] ">Cart Items <AiFillShopping className="text-[30px] text-white "/></h1>
   <HiOutlineXMark onClick={hideCartItems} className="text-[30px] font-bold text-red-500  "/>
</div>

<div className="p-[20px] grid grid-cols-1 justify-center  ">

<div className="flex flex-row justify-center gap-5">
    <div className="max-w-[150px]">
    <img src={Pic} alt="" className="rounded bg-white" />
    </div>
    <div className="flex flex-col gap-4">
  <h1 className="text-slate-50 font-fonty uppercase text-[15px] ">Cushion pman</h1>
  <span className="text-slate-200 flex flex-row gap-5 ">
  <p className=" text-slate-50 text-[20px] ">$200</p>
  <p className="text-slate-500 text-[20px] line-through">$300</p>
  </span>
  <span className="flex flex-row items-center gap-2">
    <AiFillMinusCircle className="text-slate-100 text-[20px] "/>
    <p className="flex flex-row gap-1 text-slate-50 "><span className="text-[15px] text-slate-200 font-semibold ">X1</span> <span className="text-[15px] text-slate-200 font-semibold ">$200</span> </p>
    <BsFillPlusCircleFill className="text-slate-100 text-[20px]"/>
  </span>
  </div>
    <div>

    </div>
</div>
</div>



</div>
 </div>
       }
        </>
    )
}