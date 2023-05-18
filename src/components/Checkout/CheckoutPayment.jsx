import React from "react";
import cards from  '../../assets/cardir.png';
import paypal from  '../../assets/payr.png';


export const PaymentCheckout = () => {
    return(
    <div className="flex-col p-2 bg-white  flex gap-5" >
        <h1 className="text-[25px] uppercase font-myfont ">Homedecor</h1>
        <div className="flex gap-1 flex-col">
            <span className="w-full border border-slate-300 h-[10px] flex "><span className=" w-full bg-slate-900 h-[10px] "></span></span>
            <div className="flex justify-between gap-5">
                <p className="text-[12px] md:text-[18px] text-slate-900 font-semibold">1.Email address</p>
                <p className="text-[12px] md:text-[18px] text-slate-900 font-semibold">2.Shipping Address</p>
                <p className="text-[12px] md:text-[18px] text-slate-900 font-semibold">3.Payment</p>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
            <h2 className="text-[20px] font-fonty capitalize text-slate-900   ">Payment Method</h2>
            <p className="font-fonty capitalize">We accepts the following payment Method</p>
           
           <div className="flex flex-row gap-5 ">
           <div className="max-w-[300px] border p-2 rounded shadow-2xl hover:bg-slate-100">
                <img src={cards} alt="" className="rounded" />
            </div>
            <div className="max-w-[150px] border p-2 flex  items-center rounded shadow-2xl hover:bg-slate-100">
                <img src={paypal} alt="" className="rounded" />
            </div>
            </div> 
                 </div>
                 <div className="grid grid-cols-1 gap-5">
                 <p className="text-[15px] text-slate-600 font-fonty ">Fields marked with an asterisk (*) are required.</p>
           
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
           <label className="text-slate-900 font-semibold" htmlFor="">Name On The Card *</label>
           <input type="text" className="outline-0" placeholder="Desmond Nzubechukwu " name="email" id="" />
          </div>
          <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
           <label className="text-slate-900 font-semibold" htmlFor="">Card Number *</label>
           <input type="number" className="outline-0" placeholder="1234 56789 9012 3456" name="CARD NUMBER" id="" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Expiry Day *</label>
            <input type="year" className="outline-0" placeholder="02/27" name="street" id="" />
           </div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">CVC/CVV *</label>
            <input type="text" className="outline-0" placeholder="CVC/CVV" name="CVC" id="" />
           </div>
           </div>
           <button className="bg-slate-900 text-[20px] p-[5px] rounded shadow my-[30px]  text-slate-50 ">Continue to shipping</button>
           
                 </div>
               
           
        </div>
    </div>
    )
}