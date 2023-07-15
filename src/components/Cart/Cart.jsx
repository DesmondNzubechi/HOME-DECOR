import React, { useContext, useState } from "react";
import {AiFillShopping, AiOutlinePlus, AiOutlineMinus, AiFillMinusCircle} from 'react-icons/ai';
import {BsFillPlusCircleFill, BsArrowRight} from 'react-icons/bs';
import {HiOutlineXMark} from 'react-icons/hi2';
import Pic from '../../assets/cushion7.jpg';
import {RiSecurePaymentFill} from 'react-icons/ri';
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
export const CartLog = () => {
const {cartItems, removeFromCart, user, showCart, reduceQuantity, hideCartItems, increaseCart} = useContext(CartContext);
const [hideCart, setHideCart]  = useState(false);
console.log(reduceQuantity)
let subTotal = 0;
let quantityprice = 0;
return(
      <>
       {showCart &&
        <span onClick={(e) => {
          const tagname = e.target.tagName;
          if (tagname === 'SPAN') {
          hideCartItems();
          }
        }} className="fixed p-[20px] h-full overflow-y-auto top-0 left-0 right-0  z-[30] bg-Icon ">
<div className="bg-slate-900 h-[100vh] overflow-y-auto fixed top-0 right-0 bottom-0 w-[100%] md:w-[40%] ">
{/*<div className="flex  md:w-[38%] w-full bg-slate-700 flex-row  p-[10px] justify-around items-center  gap-2  ">
 */} <HiOutlineXMark  onClick={hideCartItems} className="text-[40px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl fixed right-[40px]    z-[20] top-5 rounded-full p-1 text-red-500  "/>
{/*</div>*/}
<div className="p-[20px] grid  pt-[80px] pb-[120px] bg-slate-900 gap-4 grid-cols-1 justify-center  ">
{ 
cartItems.length === 0? 
<div>
  <p className="text-white text-center uppercase font-myfont text-[25px]">Ooops Your<br></br> Cart is Empty</p>
</div>
:
cartItems.map(product => {
  let price = Number(product.Price);
  let quantity = Number(product.quantity);
  let totalPrice = price * quantity;
  subTotal += totalPrice;
   let quantityP = totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  let finalPrice = subTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })


  return(

<div key={product.id} className="flex flex-row relative items-center border-b-[2px] border-slate-800  pb-[10px]  justify-around gap-5">
    <div className="max-w-[150px] h-[130px] md:max-w-[200px]">
    <img src={product.Img} alt="" className="rounded h-full p-4 w-full bg-white" />
    </div>
    <div className="flex flex-col gap-1 md:gap-3">
  <h1 className="text-slate-50 font-fonty uppercase text-[15px] ">{product.name}</h1>
  <span className="text-slate-200 flex flex-row gap-5 ">
  <p className=" text-slate-50 text-[20px] ">${product.Price}</p>
  <p className="text-slate-500 text-[20px] line-through">${product.discount}</p>
  </span>
  <span className="flex flex-row items-center gap-2">
    <AiFillMinusCircle onClick={() => reduceQuantity(product)} className="text-slate-100 text-[20px] hover:text-yellow-500 transition ease-in delay-150 hover:-translate-y-1 hover:scale-110  "/>
    <p className="flex flex-row gap-1 text-slate-50 "><span className="text-[15px] text-slate-200  font-semibold ">X{product.quantity}</span> <span className="text-[15px] text-slate-200 font-semibold "> { quantityP}</span> </p>
    <BsFillPlusCircleFill onClick={() => increaseCart(product)} className="text-slate-100 transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-500 text-[20px]"/>
  </span>
  <button onClick={() => removeFromCart(product)} className="text-slate-500 shadow-2xl bg-slate-900 border-slate-500 border border-[2px] hover:text-white hover:bg-red-500 transition ease-in  rounded">Remove</button>
  </div>
    <div>
    </div>
    <div>
<div className=" bg-slate-900 items-center text-center  overflow-x-hidden right-[20px] pl-[40px] px-[20px] pr-[30px] gap-0 w-full md:w-[38%] fixed  flex flex-col  justify-around py-[10px] bottom-0 ">
  <p className="text-[20px] text-white items-center flex-row gap-5 justify-around  runded flex  "><span className="font-myfont uppercase ">Subtotal:</span> <span className="font-bold">{finalPrice}</span> </p>
  <Link onClick={hideCartItems} to={!user? `/login` : `/checkoutEmail`} className="bg-green-500 hover:bg-black hover:uppercase rounded shadow-2xl p-[5px] text-slate-50 shadow-2xl w-fit flex flex-row items-center justify-center roundd text-[20px] px-[20px] ">Checkout<RiSecurePaymentFill className="text-white"/> </Link>
 </div>
</div>
</div>
  )
})

}
</div>

</div>
 </span>
       }
        </>
    )
}