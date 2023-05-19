import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Ordering } from "./OrderingProducts";
import { Link } from "react-router-dom";
export const EmailCheckout = () => {
    const {formInputs, emailProceed, setFormInputs} = useContext(CartContext);

    return(
     
        <div className="grid relative z-[100] w-full h-full bg-white gap-0 md:grid-cols-5 ">
        <div className='md:col-span-3 p-4  md:border-r '>
        
<div>

    <div className="flex-col flex gap-5" >
        <h1 className="text-[25px] uppercase font-semibold ">Homedecor</h1>
        <div className="flex gap-1 flex-col">
            <span className="w-full border h-[10px] flex rounded "><span className=" w-[33%] rounded bg-slate-900 h-[10px] "></span></span>
            <div className="flex justify-between gap-5">
                <p className="md:text-[15px] text-[12px]  text-slate-900 font-semibold">1.Email address</p>
                <p className="md:text-[15px] text-[12px] text-slate-900 font-semibold">2.Shipping Address</p>
                <p className="md:text-[15px] text-[12px] text-slate-900 font-semibold">3.Payment</p>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="md:text-[20px] font-fonty capitalize text-[15px]  ">Hi there, Start Your Checkout here.</h2>
           <div>
           <div className="flex flex-col gap-0  border p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Email:</label>
            <input
            onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    email : value,
                    emailDisplay: true,
                    emailErr : value === ''? 'Please Input Your Email' : '',
                });
               
            }}
            
                onBlur={() => {
                    const value = formInputs.email;
                setFormInputs({
                    emailErr : value === ''? 'Please Input Your Email' : '',
                });
                    }}
             type="email" placeholder="Nzubechukwu@gmail.com" className="outline-0" name="email" id="" />
           </div>
           <span className="text-red-500 text-[13px] font-semibold ">{formInputs.emailErr}</span>
           </div>
           <Link to='/checkoutAddress' onClick={emailProceed} className="bg-slate-900 hover:bg-slate-700 active:bg-green-500 capitalize w-fit px-[20px] ac text-[20px] p-[5px] rounded shadow my-[30px]  text-slate-50 ">Proceed to Shipping</Link>
          
           <div>

            </div>
        </div>
    </div>
</div>
</div>
        <div className='p-4 bg-slate-100 min-h-[100vh]  md:col-span-2'>
        <Ordering />
        </div>
 
    </div>

                  )
}