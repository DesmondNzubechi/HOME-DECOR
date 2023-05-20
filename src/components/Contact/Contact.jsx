import React from "react";
import contactImg from '../../assets/contact2.svg';

export const Contact = () => {
    return(
        <div className="bg-slate-50  py-[100px] px-[30px] pt-[150px] ">
            <div className="grid gap-[50px] grid-cols-1 md:grid-cols-2">
               <div className="flex flex-col gap-4">
                <div>
                    <h1 className="uppercase font-bold text-slate-900 text-[20px]">Contact Us</h1>
                    <p className="text-slate-700 font-fonty text-[15px] md:text-[20px]">Send us messsage via the form below</p>
                </div>
                <input type="text" className="p-[10px] bg-white outline-0  shadow-2xl rounded  " name="name" placeholder="Full Name" id="" />
               <input type="email" className="p-[10px] bg-white outline-0  shadow-2xl rounded  " placeholder="Email Address"  />
               <textarea name="" className="p-[10px] bg-white outline-0 h-[150px]  shadow-2xl rounded  " id="" placeholder="Write Your message"></textarea>
               <button className="bg-green-500 w-fit px-[20px] py-[5px] rounded shadow-2xl text-[20px] font-semibold text-slate-50 ">Send message</button>
               </div>
               <div className="w-full">
                <img src={contactImg} className="w-full" alt="" />
               </div>
            </div>
        </div>
    )
}