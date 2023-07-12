import React, { useState } from "react";
import cards from  '../../assets/cardir.png';
import paypal from  '../../assets/payr.png';
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Ordering } from "./OrderingProducts";
import { Link, useNavigate } from "react-router-dom";
export const PaymentCheckout = () => {
const [payment, setPayment] = useState({
    cardDisplay: true,
    paypalDisplay: false,
    paypalBorder: 'border',
    cardBorder: 'border-2 border-slate-500',
})

const showCard = () => {
    setPayment({
        cardDisplay: true,
        paypalDisplay: false,
        paypalBorder: 'border',
        cardBorder: 'border-2 border-slate-500',
    })
};

const showPaypal = () => {
    setPayment({
        cardDisplay:false,
        paypalDisplay: true,
        cardBorder: 'border',
        paypalBorder: 'border-2 border-slate-500',
    })
}

   
const {formInputs, setFormInputs, user, cartItems} = useContext(CartContext);

let productName = '';
cartItems.forEach(element => {
    productName += element.name;
  console.log(productName);
});

let homeLink = '/paymentCheckout';

const {cardCVC, cardName, cardNumber, CardExpiryDate}  = formInputs;
 
const navigate = useNavigate();

    return(
        !user? navigate('/login') :
        <div className="grid relative z-[100] w-full h-full bg-white gap-0 md:grid-cols-5 ">
        <div className='md:col-span-3 p-4  md:border-r '>
 
   
    <div className="flex-col p-2 bg-white  flex gap-2" >
        <h1 className="text-[25px] uppercase text-slate-800 font-myfont ">Homedecor</h1>
        <div className="flex gap-1 flex-col">
            <span className="w-full border rounded border-slate-300 h-[10px] flex "><span className=" w-full bg-slate-900 rounded  h-[10px] "></span></span>
            <div className="flex justify-between gap-5">
                <p className="text-[12px] md:text-[15px] text-slate-700 font-semibold">1.Email address</p>
                <p className="text-[12px] md:text-[15px] text-slate-700 font-semibold">2.Shipping Address</p>
                <p className="text-[12px] md:text-[15px] text-slate-700 font-semibold">3.Payment</p>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
           { /*<h2 className="text-[20px] font-fonty capitalize text-slate-900   ">Payment Method</h2>*/}
            <p className="font-semibold  text-[12px] md:text-[20px] text-slate-700 my-[10px] capitalize">We accepts the following payment Method</p>
           
           <div className="flex flex-row gap-5 ">
           <div onClick={showCard} className={`max-w-[300px] ${payment.cardBorder} p-2 rounded  hover:bg-slate-100`}>
                <img src={cards} alt="" className="rounded" />
            </div>
            <div onClick={showPaypal} className={`max-w-[150px] ${payment.paypalBorder} p-2 flex  items-center rounded  hover:bg-slate-100`}>
                <img src={paypal} alt="" className="rounded" />
            </div>
            </div> 
                 </div>
                {payment.paypalDisplay && <Link to='/' onClick={() => {alert('Order succesfully placed. Thanks for shopping with us.')}} className="text-[30px] bg-gradient-to-r from-slate-200 to-slate-300 py-[3px] text-center w-full max-w-[450px] rounded  px-[30px]  font-bold "><span className="text-blue-900">Pay</span><span className="text-blue-500">Pal</span></Link>
                 }
               {payment.cardDisplay &&  <div className="grid grid-cols-1 gap-5">

                 <p className="text-[15px] text-slate-600 font-fonty ">Fields marked with an asterisk (*) are required.</p>
                 <div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
           <label className="text-slate-700 font-semibold" htmlFor="">Name On The Card *</label>
           <input
            onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    cardName : value,
                    cardNameErr : value === ''? 'Please Input  Name On Card' : '',
                });
               
            }}
                onBlur={() => {
                    const value = formInputs.cardName;
                setFormInputs({
                    cardNameErr : value === ''? 'Please Input Name On Card' : '',
                });
                    }}
           type="text" className="outline-0" placeholder="Desmond Nzubechukwu " name="email" id="" />
          </div>
          <span className="text-red-500 text-[13px] font-semibold ">{formInputs.cardNameErr}</span>
           
           </div>
          <div>
          <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
           <label className="text-slate-700 font-semibold" htmlFor="">Card Number *</label>
           <input
            onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    cardNumber : value,
                    cardNumberErr : value === null? 'Please Input Your First Name' : '',
                });
               
            }}
                onBlur={() => {
                    const value = formInputs.cardNumber;
                setFormInputs({
                    cardNumberErr : value === null? 'Please Input Your Card Number' : '',
                });
                    }}
            type="number" className="outline-0" placeholder="1234 56789 9012 3456" name="CARD NUMBER" id="" />
          </div>
          <span className="text-red-500 text-[13px] font-semibold ">{formInputs.cardNumberErr}</span>
           </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
            <div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">Expiry Day *</label>
            <input
             onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    CardExpiryDate : value,
                    CardExpiryDateErr : value === null? 'Please Input Your Card Expiry Date' : '',
                });
               
            }}
                onBlur={() => {
                    const value = formInputs.CardExpiryDate;
                setFormInputs({
                    CardExpiryDateErr : value === null? 'Please Input Your Card Expiry Date' : '',
                });
                    }}
             type="year" className="outline-0" placeholder="02/27" name="street" id="" />
           </div>
           <span className="text-red-500 text-[13px] font-semibold ">{formInputs.cardExpiryDateErr}</span>
           </div>
           <div>
           <div className="flex flex-col gap-0  border border-slate-300 p-2 rounded">
            <label className="text-slate-700 font-semibold" htmlFor="">CVC/CVV *</label>
            <input
             onChange={(e) => {
                const value = e.target.value;
                setFormInputs({
                    cardCVC : value,
                    cardCVCErr : value === null? 'Please Input Your First Name' : '',
                });
               
            }}
                onBlur={() => {
                    const value = formInputs.cardCVC;
                setFormInputs({
                    cardCVCErr : value === null? 'Please Input Your Card CVC/CVV' : '',
                });
                    }}
             type="text" className="outline-0" placeholder="CVC/CVV" name="CVC" id="" />
           </div>
           <span className="text-red-500 text-[13px] font-semibold ">{formInputs.cardCVCErr}</span>
           
           </div>
           </div>
           <Link to='/' onClick={() => {alert('Order succesfully placed. Thanks for shopping with us.')}} className="bg-slate-900 hover:bg-slate-700 active:bg-green-500 capitalize w-fit px-[20px] ac text-[20px] p-[5px] rounded shadow my-[5px]  text-slate-50 ">Complete Payment</Link>
          
                 </div>}
               
           
        </div>
    </div>
    
    </div>
    <div className='p-4 bg-slate-100 min-h-[100vh]  md:col-span-2'>
    <Ordering />
    </div>

</div>
    )
}