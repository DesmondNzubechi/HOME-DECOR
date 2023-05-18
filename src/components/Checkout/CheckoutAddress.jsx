import React from "react";



export const AddressCheckout = () => {
    return(
<div>
    <div className="flex-col flex gap-5" >
        <h1 className="text-[25px] uppercase font-myfont ">Homedecor</h1>
        <div className="flex gap-1 flex-col">
            <span className="w-full border border-slate-300 h-[10px] flex "><span className=" w-[66%] bg-slate-900 h-[10px] "></span></span>
            <div className="flex justify-between gap-5">
                <p className="text-[12px] md:text-[18px] text-slate-900 font-semibold">1.Email address</p>
                <p className="text-[12px] md:text-[18px] text-slate-900 font-semibold">2.Shipping Address</p>
                <p className="text-[12px] md:text-[18px] text-slate-900 font-semibold">3.Payment</p>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div>
            <h2 className="text-[20px] font-fonty capitalize text-slate-900   ">Shipping address info.</h2>
                <p className="text-[15px] text-slate-600 font-fonty ">Fields marked with an asterisk (*) are required.</p>
            </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
            <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">First name *</label>
            <input type="text" className="outline-0" placeholder="Desmond" name="email" id="" />
           </div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Last name *</label>
            <input type="text" className="outline-0" placeholder="Nzubechukwu" name="lastname" id="" />
           </div>
            </div>
          
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Street address *</label>
            <input type="text" className="outline-0" placeholder="Awka, Nigeria" name="street" id="" />
           </div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">City *</label>
            <input type="text" className="outline-0" placeholder="Enugu" name="email" id="" />
           </div>
           <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Apartment *</label>
            <input type="text" className="outline-0" placeholder="chyse" name="apartment" id="" />
           </div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Company *</label>
            <input type="text" className="outline-0" placeholder="Burea de Change" name="company" id="" />
           </div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">State *</label>
            <input type="text" className="outline-0" placeholder="Enugu state" name="state" id="" />
           </div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Zip Code *</label>
            <input type="text" className="outline-0" placeholder="04235" name="email" id="" />
           </div>
           </div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Phone (delivery contact) *</label>
            <input type="tel"  className="outline-0"placeholder="+234 708 4183 611" name="phone" id="" />
            
           </div>
           <button className="bg-slate-900 text-[20px] p-[5px] rounded shadow my-[30px]  text-slate-50 ">Continue to shipping</button>
            <div>

            </div>
        </div>
    </div>
</div>
    )
}