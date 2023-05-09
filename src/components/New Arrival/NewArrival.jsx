import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import newArrivalImg1 from '../../assets/circleT.avif';
import newArrivalImg2 from '../../assets/cushion1.avif';
import newArrivalImg3 from '../../assets/cushion2.avif';
import newArrivalImg4 from '../../assets/img2.webp';
import newArrivalImg5 from '../../assets/officeF3.avif';
import newArrivalImg6 from '../../assets/officeF2.avif';
import newArrivalImg7 from '../../assets/kitchen2.jpg';
import newArrivalImg8 from '../../assets/officeF2.avif';

import {AiFillShopping, AiFillHeart} from 'react-icons/ai';

let newArrivalObj = [
    {
        Img : newArrivalImg1,
        name: 'sofa',
    },
    {
        Img : newArrivalImg2,
        name: 'sofa',
    },
    {
        Img : newArrivalImg3,
        name: 'sofa',
    },
    {
        Img : newArrivalImg4,
        name: 'sofa',
    },
    {
        Img : newArrivalImg5,
        name: 'sofa',
    },
    {
        Img : newArrivalImg6,
        name: 'sofa',
    },
    {
        Img : newArrivalImg7,
        name: 'sofa',
    },
    {
        Img : newArrivalImg8,
        name: 'sofa',
    }
]


export const NewArrival = () => {
    return(
        <div className="py-[50px] ">
       <div>
        <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[25px] md:text-[40px] ">New arrival</h1>
     <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
{
newArrivalObj.map(items => (



    
    <div className="md:p-3 p-1 rounded relative flex flex-col justify-center items-center    border my-[10px]  md:min-w-[150px] ">
    <div className=" p-4 max-w-[300px] ">
    <img src={items.Img} alt="" className="w-full" />
    </div>
    <p className="absolute top-2 left-2 text-[12px] font-bold  text-slate-900  ">$400</p>
    <strong className="absolute top-0 right-0 m-2 bg-Icon md:text-[15px] text-[10px] px-[10px] py-[2px] rounded-[2px] text-slate-50 ">New</strong>
    <div className="flex absolute bottom-0 left-0 right-0  bg-Tp p-1 flex-row justify-between ">
        <div>
        <h1 className="md:text-[20px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <div>
              {  /*<span className="font-myfont md:text-[15px] text-[12px] text-slate-100 ">$200</span>*/ }
              
            </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
        <AiFillHeart className="text-[20px] p-1  text-red-500 shadow rounded-full md:text-[30px]  "/>
<AiFillShopping className="text-[20px] p-1 text-white bg-slate-500 rounded-full  md:text-[35px] "/>
        </div>
    </div>
    </div>
))
}
     </div>
       </div>
        </div>
    )
}