import React, { useState } from "react";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import img from '../../assets/Decor/pillow/blsck pillow.avif';
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Product } from "../Products/product";

export const Ordering = () => {
    const  [orderedItems, setOrderedItem] = useState({
        orderedP: false,
        iconUp: false,
        iconDown: true,
        cartText: true,

    });
    const showOrderedItems = () => {
        if (orderedItems.orderedP) {
            setOrderedItem({
                orderedP: false,
        iconUp: false,
        iconDown: true,
        cartText: true,
            })
        } else {
            setOrderedItem({
                orderedP: true,
        iconUp: true,
        iconDown: false,
        cartText: false,
            })
        } };
 const {cartItems} = useContext(CartContext);
 let subTotal = 0;
 let shipping = 0;
 let saleTax = 0;
let Total = 0;
let totalSaved = 0;
let totalDiscount = 0;   
cartItems.map(product => {
    let price = Number(product.Price);
     let quantity = Number(product.quantity);
     let totalPrice = price * quantity;
     subTotal += totalPrice;
     let ProductShippin = (totalPrice * 5)/100;
     shipping += ProductShippin;
     let producTax =  (totalPrice * 2)/100;
     saleTax += producTax;
 Total = subTotal + shipping + saleTax;
 let getDiscountPrice = Number(product.discount);
  totalDiscount += getDiscountPrice *  quantity;
  totalSaved = totalDiscount - subTotal ;

})
    return(
        <div className="bg-slate-100 relative h-full">
            <div onClick={showOrderedItems} className=" cursor-pointer bg-white shadow p-3 rounded flex flex-col gap-5">
                <div className="flex  justify-between">
                 <h1 className="text-[20px] font-myfont ">Your Cart</h1> 
                    <div className="flex flex-row items-center justify-between text-[20px] font-myfont gap-2">
                     <p>{cartItems.length} item</p>
                     {orderedItems.iconDown &&  <IoIosArrowDown/>}
                       {orderedItems.iconUp && <IoIosArrowUp/>}
                    </div>
                </div>
              { orderedItems.orderedP && <div  className="flex flex-col  gap-2">
                { cartItems.map(prod => {
               return  (   <div className="flex justify-between items-center">
                    <div className="max-w-[100px]">
                     <img src={prod.Img} alt="" />
                    </div>
                   
                    <p className="text-slate-900 md:text-[20px] text-[12px] font-semibold uppercase ">{prod.name}</p>
                    <p className="font-semibold md:text-[20px] text-[12px] text-slate-900">Quantity: {prod.quantity}</p>
                    <p> <span className="font-semibold md:text-[20px] text-[12px] text-slate-900">${prod.Price} </span> <span className="line-through text-slate-400 md:text-[20px] text-[12px]"> ${prod.discount}</span></p>
                         </div>
               )
                })
              }
                </div>
}
            </div>
    <div className="my-[50px] ">
    <div className="flex flex-col gap-2 border-b-[3px] border-slate-500  p-2">
    <span className="flex justify-between gap-2 ">
        <p className="text-slate-600 font-fonty">Subtotal:</p>
        <p className="text-slate-600 font-fonty">${subTotal}</p>
    </span>
    <span className="flex justify-between gap-2 ">
        <p className="text-slate-600 font-fonty">Shipping:</p>
        <p className="text-slate-600 font-fonty">${shipping}</p>
    </span>
    <span className="flex justify-between gap-2 ">
        <p className="text-slate-600 font-fonty">Salels Tax:</p>
        <p className="text-slate-600 font-fonty">${saleTax}</p>
    </span>
    </div>
    <div className="flex justify-between flex-row p-2  font-semibold ">
        <p className="text-[20px]">Total:</p>
        <p className="text-[20px]">${Total}</p>
    </div>
    <div className="flex justify-between flex-row p-2  font-semibold ">
        <p className="text-red-500">You saved:</p>
        <p className="text-red-500">${totalSaved}</p>
    </div>
</div>
        </div>
    )
}