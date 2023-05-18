import React from "react";
import { PaymentCheckout } from "./CheckoutPayment";
import { Ordering } from "./OrderingProducts";



export const CheckOut = () => {
    return(
        <div className="grid relative z-[100] w-full h-full bg-white gap-0 md:grid-cols-5 ">
            <div className='md:col-span-3 p-4  md:border-r '>
            <PaymentCheckout />
       
            </div>
            <div className='p-4 bg-slate-100  md:col-span-2'>
            <Ordering />
            </div>
     
        </div>
    )
}