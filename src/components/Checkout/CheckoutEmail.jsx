import React from "react";



export const EmailCheckout = () => {
    return(
<div>
    <div className="flex-col flex gap-5" >
        <h1 className="text-[25px] uppercase font-myfont ">Homedecor</h1>
        <div className="flex gap-1 flex-col">
            <span className="w-full border h-[10px] flex "><span className=" w-[33%] bg-slate-900 h-[10px] "></span></span>
            <div className="flex justify-between gap-5">
                <p className="text-[15px] text-slate-900 font-semibold">1.Email address</p>
                <p className="text-[15px] text-slate-900 font-semibold">2.Shipping Address</p>
                <p className="text-[15px] text-slate-900 font-semibold">3.Payment</p>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="text-[20px] font-fonty capitalize  ">Hi there, Start Your Checkout here.</h2>
           <div className="flex flex-col gap-0  border p-2 rounded">
            <label className="text-slate-900 font-semibold" htmlFor="">Email:</label>
            <input type="text" placeholder="Nzubechukwu@gmail.com" name="email" id="" />
           </div>
           <button className="bg-slate-900 text-[20px] p-[5px] rounded shadow my-[30px]  text-slate-50 ">Continue to shipping</button>
            <div>

            </div>
        </div>
    </div>
</div>
    )
}