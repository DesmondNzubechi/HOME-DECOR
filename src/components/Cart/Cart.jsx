import React, { useContext, useState } from "react";
import {AiFillShopping, AiOutlinePlus, AiOutlineMinus, AiFillMinusCircle} from 'react-icons/ai';
import {BsFillPlusCircleFill, BsArrowRight} from 'react-icons/bs';
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
        <div className="fixed p-[20px] h-full overflow-y-auto top-0 left-0 right-0  z-[30] bg-Icon ">
<div className="bg-slate-700 h-full overflow-y-auto fixed top-0 right-0 bottom-0 w-[100%] md:w-[40%] ">
<div className="flex fixed right-[20px]   z-[20] top-0 md:w-[38%] w-full bg-slate-700 flex-row  p-[10px] justify-around items-center  gap-2  ">
    <h1 className="uppercase font-myfont    flex flex-row items-center  gap-2 justify-center  text-slate-50 text-[22px] md:text-[30px] ">Cart Items <AiFillShopping className="text-[30px] text-white "/></h1>
   <HiOutlineXMark  onClick={hideCartItems} className="text-[40px]  font-bold bg-slate-900 shadow-2xl rounded-full p-1 text-red-500  "/>
</div>
<div className="p-[20px] grid  pt-[50px] pb-[80px] bg-slate-700 gap-4 grid-cols-1 justify-center  ">
{ 
cartItems.length === 0? 
<div>
  <p className="text-white">Empty Cart</p>
</div>
:
cartItems.map(product => (

<div className="flex flex-row relative items-center border-b-[2px] border-slate-500  pb-[10px]  justify-around gap-5">
    <div className="max-w-[150px] md:max-w-[200px]">
    <img src={product.Img} alt="" className="rounded h-full w-full bg-white" />
    </div>
    <div className="flex flex-col gap-2 md:gap-4">
  <h1 className="text-slate-50 font-fonty uppercase text-[15px] ">{product.name}</h1>
  <span className="text-slate-200 flex flex-row gap-5 ">
  <p className=" text-slate-50 text-[20px] ">$200</p>
  <p className="text-slate-500 text-[20px] line-through">$300</p>
  </span>
  <span className="flex flex-row items-center gap-2">
    <AiFillMinusCircle className="text-slate-100 text-[20px] "/>
    <p className="flex flex-row gap-1 text-slate-50 "><span className="text-[15px] text-slate-200 font-semibold ">X1</span> <span className="text-[15px] text-slate-200 font-semibold ">$200</span> </p>
    <BsFillPlusCircleFill className="text-slate-100 text-[20px]"/>
  </span>
  <button className="text-slate-500 shadow-2xl bg-slate-900 rounded">Remove</button>
  </div>
    <div>
    </div>
    
</div>

))

}
</div>
<div>
<div className=" bg-slate-700  overflow-x-hidden right-[20px] pl-[40px] px-[20px] pr-[30px] gap-0 w-full md:w-[38%] fixed  flex flex-col  justify-around py-[10px] bottom-0 ">
  <p className="text-[20px] text-white justify-around  runded flex  "><span className="font-myfont">Subtotal:</span> <span className="font-bold">$300</span> </p>
  <button className="bg-green-500 rounded shadow-2xl p-[5px] shadow-2xl flex flex-row items-center justify-center roundd text-[20px] ">Proceed To Checkout <BsArrowRight/></button>
 </div>
</div>
</div>
 </div>
       }
        </>
    )
}