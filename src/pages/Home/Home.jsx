import React from "react";
import { HeroSection } from "../../components/Hero Section/heroSection";
import { WhyChooseUs } from "../../components/Hero Section/heroSection";
import { NewArrival } from "../../components/New Arrival/NewArrival";
import { BestSeller } from "../../components/Best Seller/BestSeller";
import { EmailCheckout } from "../../components/Checkout/CheckoutEmail";
import { AddressCheckout } from "../../components/Checkout/CheckoutAddress";
import { PaymentCheckout } from "../../components/Checkout/CheckoutPayment";
import { Ordering } from "../../components/Checkout/OrderingProducts";
import { CheckOut } from "../../components/Checkout/Checkout";

export const Home = () => {
    return (
        <div className="px-[20px] overflow-x-hidden pt-[70px] pb-[30px] ">
        <HeroSection/>
        <WhyChooseUs/>
        <NewArrival/>
        <BestSeller/>
         <CheckOut/>
        </div>
    )
}