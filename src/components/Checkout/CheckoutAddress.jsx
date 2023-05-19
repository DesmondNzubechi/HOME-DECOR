import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Ordering } from "./OrderingProducts";
import { Link } from "react-router-dom";




export const AddressCheckout = () => {
 const {formInputs, setFormInputs} = useContext(CartContext);

let linkToPayment = '';
let {firstName , lastName , stree ,  state , city , zipCode , phone } = formInputs;

if ( firstName === '' || lastName === '' || stree === '' ||  state === '' || city === '' || zipCode === '' || phone === '') {
    linkToPayment ='';
} else {

    linkToPayment = '/checkoutPayment';
}

console.log(linkToPayment);


return(
    <div className="grid relative z-[100] w-full h-full bg-white gap-0 md:grid-cols-5 ">
    <div className='md:col-span-3 p-4  md:border-r '>
    <div>
    <div className="flex-col flex gap-5" >
        <h1 className="text-[25px] uppercase font-myfont ">Homedecor</h1>
        <div className="flex gap-1 flex-col">
            <span className="w-full border border-slate-300 rounded h-[10px] flex "><span className=" w-[66%] rounded bg-slate-900 h-[10px] "></span></span>
            <div className="flex justify-between gap-5">
                <p className="text-[12px] md:text-[15px] text-slate-700 font-semibold">1.Email address</p>
                <p className="text-[12px] md:text-[15px] text-slate-700 font-semibold">2.Shipping Address</p>
                <p className="text-[12px] md:text-[15px] text-slate-700 font-semibold">3.Payment</p>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div>
            <h2 className="text-[20px] font-fonty capitalize text-slate-900   ">Shipping address info.</h2>
                <p className="text-[15px] text-red-500 font-fonty ">Fields marked with an asterisk (*) are required.</p>
            </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
         
            <div>
            <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">First name *</label>
            <input
            
             onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    firstName : value,
                    firstNameErr : value === ''? 'Please Input Your First Name' : '',
                });
               
            }}
                onBlur={() => {
                    const value = formInputs.firstName;
                setFormInputs({
                    firstNameErr : value === ''? 'Please Input Your First Name' : '',
                });
                    }}
             type="text" className="outline-0" placeholder="Desmond" name="email" id="" />
            </div>
            <span className="text-red-500 text-[13px] font-semibold ">{formInputs.firstNameErr}</span>
           
            </div>
           
          <div>
          <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Last name *</label>
            <input
             value={formInputs.lastName} 
             onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    lastName : value,
                    lastNameErr : value === ''? 'Please Input Your Last Name' : '',
                });
               
            }}
            onBlur={() => {
                const value = formInputs.lastName;
            setFormInputs({
                lastNameErr : value === ''? 'Please Input Your Last Name' : '',
            });
                }}
             type="text" className="outline-0" placeholder="Nzubechukwu" name="lastname" id="" />
           </div>
           <span className="text-red-500 text-[13px] font-semibold ">{formInputs.lastNameErr}</span>
           
            </div>
           
          </div>
          
          <div>
          <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Street address *</label>
            <input
              onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    stree : value,
                    streeErr : value === ''? 'Please Input Your Street Name' : '',
                });
               
            }}
            onBlur={() => {
                const value = formInputs.stree;
            setFormInputs({
                streeErr : value === ''? 'Please Input Your Street Name' : '',
            });
                }}
             type="text" className="outline-0" placeholder="Awka, Nigeria" name="street" id="" />
           </div>
           <span className="text-red-500 text-[13px] font-semibold ">{formInputs.streeErr}</span>
          </div>
          <div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">City *</label>
            <input
               onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    city : value,
                    cityErr : value === ''? 'Please Input Your city Name' : '',
                });
               
            }}
            onBlur={() => {
                const value = formInputs.city;
            setFormInputs({
                cityErr : value === ''? 'Please Input Your city Name' : '',
            });
                }}
             type="text" className="outline-0" placeholder="Enugu" name="email" id="" />
           </div>
           <span className="text-red-500 text-[13px] font-semibold ">{formInputs.cityErr}</span>
           </div>
           <div className="grid md:grid-cols-2 grid-cols-1 gap-5">

           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Apartment </label>
            <input
             type="text" className="outline-0" placeholder="chyse" name="apartment" id="" />
           </div>
          
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Company </label>
            <input type="text" className="outline-0" placeholder="Burea de Change" name="company" id="" />
           </div>
           <div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">State *</label>
            <input
             onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    state : value,
                    stateErr : value === ''? 'Please Input Your statet Name' : '',
                });
               
            }}
            onBlur={() => {
                const value = formInputs.state;
            setFormInputs({
                stateErr : value === ''? 'Please Input Your State Name' : '',
            });
                }}
            type="text" className="outline-0" placeholder="Enugu state" name="state" id="" />
            </div>
            <span className="text-red-500 text-[13px] font-semibold ">{formInputs.stateErr}</span>
        
           </div>
           <div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Zip Code *</label>
            <input
              onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    zipCode : value,
                    zipCodeErr : value === ''? 'Please Input Your zipCodet Name' : '',
                });
               
            }}
            onBlur={() => {
                const value = formInputs.zipCodeName;
            setFormInputs({
                zipCodeErr : value === ''? 'Please Input Your zip Code' : '',
            });
                }}
             type="text" className="outline-0" placeholder="04235" name="email" id="" />
           </div>
           <span className="text-red-500 text-[13px] font-semibold ">{formInputs.zipCodeErr}</span>
          </div>
           </div>
           <div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Phone (delivery contact) *</label>
            <input
             onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    phone : value,
                    phoneErr : value === ''? 'Please Input Your phonet Name' : '',
                });
               
            }}
            onBlur={() => {
                const value = formInputs.phoneName;
            setFormInputs({
                phoneErr : value === ''? 'Please Input Your phone Number' : '',
            });
                }}
             type="tel"  className="outline-0"placeholder="+234 708 4183 611" name="phone" id="" />
           </div>
            <span className="text-red-500 text-[13px] font-semibold ">{formInputs.phoneErr}</span>
           
           </div>
           <Link to={linkToPayment} className="bg-slate-900 hover:bg-slate-700 active:bg-green-500 capitalize w-fit px-[20px] ac text-[20px] p-[5px] rounded shadow my-[30px]  text-slate-50 ">Continue to Payment</Link >
          
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