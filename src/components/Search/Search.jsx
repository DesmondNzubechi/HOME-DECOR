import React, { useState } from "react";
import { useContext } from "react";
import { NewArrContext } from "../New Arrival/NewArrival";
import { newArrivalObj } from "../New Arrival/NewArrival";
import { CartContext } from "../../components/CartContext/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";
import {AiFillShopping, AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import { Beds } from "../../pages/Bedroom/Bed/Bed";
import { Dresser } from "../../pages/Bedroom/Dresser/Dresser";
import { Nightstand } from "../../pages/Bedroom/Nightstand/Nightstand";
import { LightArr } from "../../pages/Decor/Light/Light";
import { PillowArr } from "../../pages/Decor/pillow/Pillow";
import { RugArr } from "../../pages/Decor/Rug/Rug";
import { ThrowArr } from "../../pages/Decor/Throw/Throw";
import { CabinetArr } from "../../pages/Dinningroom/Cabinet/cabinet";
import { ChairArr } from "../../pages/Dinningroom/Chair/Chair";
import { TableArr } from "../../pages/Dinningroom/Table/Table";
import { KitchenArr } from "../../pages/Kitchen/Kitchen";
import { ChairArrL } from "../../pages/Livingroom/Chair/Chair";
import { SofaArr } from "../../pages/Livingroom/Sofa/Sofa";
import { TableArrL } from "../../pages/Livingroom/Table/Table";










export const SearchP = () => {

    const {HideSearch, showSearch, Search, addToCart, addToWishList, showFullDetail, fullDetail, HideDetails, details,} = useContext(CartContext);
    
   const newaa = [...newArrivalObj, ...TableArrL, ...SofaArr, ...ChairArrL, ...KitchenArr, ...TableArr, ...ChairArr, ...CabinetArr, ...Beds, ...Dresser, ...Nightstand, ...LightArr, ...PillowArr, ...RugArr, ...ThrowArr];
   const [feedBack, setFeedback] = useState('');
   const [searched, setSearched] = useState('');
   const [displayResult, setDisplayResult] = useState([]);

   const getSearchedWord = (e) => {
    setSearched(e.target.value);
   
  }

  const theResult = () => {

    const newResult = newaa.filter(searchy => (
        searchy.name.toLocaleLowerCase().includes(searched.toLocaleLowerCase()) ||  searchy.category.toLocaleLowerCase().includes(searched.toLocaleLowerCase())
       ))
    setDisplayResult(newResult);
      setFeedback(`result for your search  "${searched}"`);
  }

/* else if (searched !== '' && displayResult.length === 0) {
    searchedC = 'Searching...'
} else if (searched !== '' && displayResult.length !== 0) {
    searchedC = `(${displayResult.length}) result for ${searched} you searched for`
} else if (searched !== '' && !newResult) {
    searchedC = `(0)result <br> seems we do not have the product that you are searching for`
}*/
    return(
      
   <div className={`fixed ease-in-out  duration-500  h-full px-[20px]  py-[20px] flex flex-row justify-center z-[100] ${Search} left-0 right-0 w-full bg-Icon `}>
     <div className="rounded pb-[20px] relative overflow-y-auto   bg-slate-50 lg:min-w-[800px] md:min-w-[600px] px-[20px]">
        <div className=" flex flex-row items-end gap-5 my-[20px] "> 
        <HiOutlineXMark onClick={HideSearch}  className="text-[30px] transition ease-in delay-150  hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl absolute right-[10px]    z-[20] top-1 rounded-full p-1 text-red-500  "/>

         <input value={searched} onChange={getSearchedWord} className="w-full bg-transparent font-myfont  text-[20px] py-[10px] border-slate-500 border-b-[5px] outline-0 " type="text" name="" placeholder="Search For Products"  id="" />
        <button disabled={!searched} onClick={theResult} className="bg-slate-900 hover:bg-slate-700 active:bg-green-500 rounded px-2 py-1 text-slate-200 font-semibold">Search</button>
        </div>


    <p className="text-center mt-[30px] font-myfont capitalize text-slate-700 text-[25px] ">{feedBack}</p>
        <div className="grid grid-cols-1 mx-[20px]  md:grid-cols-1 mt-[30px] gap-[30px] ">
{
       displayResult.map(items => (


        <div className="flex flex-row  items-end  justify-center">
            
    <div key={items.id} className=" max-w-[350px]  py-0   mx-[20px] transition ease-out delay-150 hover:-translate-y-1 hover:scale-100 rounded-2xl relative flex  flex-col justify-center items-center w-full rounded   shadow-2xl mb-[10px]   ">
         <div onClick={() => showFullDetail(items)} className="max-w-[400px]  rounded-5 cursor-pointer  ">
        <img src={items.Img} alt="" className="w-full " />
        </div>
       <div className="flex w-full rounded-b-md  bottom-0 left-0 right-0  bg-black p-2  flex-row justify-between ">
            <div>
            <h1 className="md:text-[17px] text-[12px] text-white font-fonty uppercase ">{items.name}</h1>
            <p className=" top-2 left-2 text-[12px] self-start font-bold  text-slate-50 flex flex-row gap-2 "> <span className=" text-slate-500 line-through ">${items.discount}</span>${items.Price} <span></span></p>
        
            </div>
          
            <div className="flex flex-row gap-2  items-center">
            <AiFillHeart onClick={() => addToWishList(items)} className="text-[20px] text-slate-50  transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-300    shadow rounded-full md:text-[30px]  "/>
    <AiFillShopping onClick={() => addToCart(items)} className="text-[20px] transition ease-out delay-150 hover:-translate-y-1 hover:scale-110  text-slate-50 hover:text-slate-300 rounded-full  md:text-[35px] "/>
            </div>
        </div>
        </div>
        </div>
       
))
        }
        </div>
        { 
fullDetail.map(items => {
    return (
        <div className={`fixed px-[40px] bg-Tp py-[20px] ease-in-out  duration-500 flex flex-row justify-center    left-0 right-0 w-full h-[100vh]  ${details} z-[50] `}>
        <div className="bg-slate-100 relative p-4 rounded-lg overflow-y-auto  max-w-[400px] ">
        <HiOutlineXMark onClick={HideDetails}  className="text-[40px] transition ease-in delay-150  hover:bg-red-500 hover:text-black font-bold bg-slate-300 shadow-2xl absolute left-[10px]    z-[20] top-1 rounded-full p-1 text-red-500  "/>
<div  >
<div className="">
  <img src={items.Img} alt=""  className="w-full h-full"/>
</div>
    <div className="grid grid-cols-2 gap-2 my-5">
    <button onClick={() => addToCart(items)} className="bg-slate-800  px-[10px] py-[5px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100  rounded text-[14px] md:text-[17px] text-slate-50 border ">Addd to Cart</button>
    <button onClick={() => addToWishList(items)} className=" border border-slate-800 rounded transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 text-slate-800 text-[14px] md:text-[17px]">Add to Wishlist</button>
</div>
</div>
        <div>
            <h1 className="uppercase font-myfont text-[22px] ">{items.name}</h1>
            <div className="flex flex-row gap-5 ">
                <p className="text-slate-800 font-bold text-[15px] ">${items.Price}</p>
                <p className="text-slate-400 line-through font-bold text-[15px] ">${items.discount}</p>
            </div>
            <div>
                <h1 className="uppercase font-myfont text-[16px] text-slate-800">DEscription</h1>
                <p className="text-slate-600 text-[15px]  font-fonty" >{items.descr}</p>
            </div>
          
        </div>
    </div>
    </div>
    )
})
       }
        
     </div>
       </div>
      
    
    )
}