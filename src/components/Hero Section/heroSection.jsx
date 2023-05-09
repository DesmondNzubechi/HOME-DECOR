import React from "react";
import Heroimg from '../../assets/furniture1.avif';
import { Link } from "react-router-dom";
import { TbTruckDelivery } from 'react-icons/tb';
import {MdChair} from 'react-icons/md';
import { MdPayments } from 'react-icons/md';









export const HeroSection = () => {
    return(
        <div className="flex my-[50px] gap-[30px]  justify-around flex-col md:flex-row items-center">
            <div className="md:max-w-[500px] flex flex-col gap-[10px] ">
               <h1 className="capitalize font-myfont  text-[30px] md:text-[50px] ">Home of quality furniture</h1>
               <p className="md:text-[27px] text-[20px] font-fonty text-slate-700 ">Find an elegant and luxurious interior designed by professional interior designer</p> 
               <Link className="bg-slate-900  w-fit px-[20px] py-[5px] rounded shadow-2xl text-[25px] text-slate-200 ">Explore</Link>
            </div>
            <div className="max-w-[600px]">
                <img src={Heroimg} alt="" />
            </div>
        </div>
    )
}



export const WhyChooseUs = () => {
    return(
        <div className="  p-2 rounded  flex flex-row justify-center px-[20px] ">
            <div className="flex flex-col md:flex-row gap-[30px] justify-center">
            <div className="max-w-[300px] border shadow-2xl flex flex-col justify-center items-center gap-2 rounded-lg text-center  p-5 ">
                <TbTruckDelivery className="text-[40px] text-slate-50 p-2 rounded-full bg-Tp "/>
                <h1 className="font-myfont capitalize text-[23px] md:text-[27px] ">Fast and free shipping</h1>
                <p className="font-fonty text-[15px] md:text-[17px] ">Every single product are shipped for free, no minimium, no fine print or whatever.</p>
            </div>
            <div  className="max-w-[300px] border shadow-2xl flex flex-col justify-center items-center gap-2 rounded-lg text-center  p-5 ">
                <MdPayments className="text-[40px] text-slate-50 p-2 rounded-full bg-Tp "/>
                <h1 className="font-myfont capitalize text-[23px] md:text-[27px] ">Secured Payment</h1>
                <p className="font-fonty text-[15px] md:text-[17px] ">Our payment method is very easy and self explainatory to the extent that anybody can make payment without mistake.</p>
            </div>
            <div  className="max-w-[300px] border shadow-2xl flex flex-col justify-center items-center gap-2 rounded-lg text-center  p-5 ">
                <MdChair className="text-[40px] text-slate-50 p-2 rounded-full bg-Tp "/>
                <h1 className="font-myfont capitalize text-[23px] md:text-[27px] ">Quality Material</h1>
                <p className="font-fonty text-[15px] md:text-[17px] ">We use premium material sustainably forested wood, strengthen steel hardware and top-grain</p>

            </div>
            </div>
        </div>
    )
}