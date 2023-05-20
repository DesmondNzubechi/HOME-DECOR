import React from "react";
import AboutImg from '../../assets/about.png';
import { Link } from "react-router-dom";
export const About = () => {
    return(
       <div className="bg-slate-100 m-0 pt-[150px] py-[100px] gap-5 items-center p-5 flex flex-col md:flex-row justify-center rounded">
        <div>
            <img src={AboutImg} alt="" />
        </div>
        <div className="max-w-[800px] flex flex-col gap-2">
            <h1 className="uppercase font-myfont text-slate-900 text-[30px]  ">About Us</h1>
            <p className="font-fonty  text-slate-800 text-[15px]  ">Welcome to <strong className="font-bold text-slate-90">HomeDecor</strong> , your one-stop shop for stylish furniture and home decor. We offer a carefully curated selection of high-quality products that will transform your house into a beautiful and inviting home.

At HomeDecor, we understand the importance of creating a space that truly reflects your personal style. That's why we handpick each item in our collection, ensuring that it meets our strict standards of quality, design, and craftsmanship. From sleek and modern to cozy and traditional, our range of furniture and home accessories caters to a variety of tastes and preferences.

Shopping with us is easy and convenient. Our user-friendly website allows you to browse through our products effortlessly, with detailed descriptions and clear images to help you make informed decisions. We also prioritize customer satisfaction, and our dedicated support team is always available to assist you with any questions or concerns.

We believe that everyone deserves a beautifully furnished home without breaking the bank. That's why we offer competitive prices without compromising on quality. With HomeDecor, you can shop with confidence, knowing that you're getting the best value for your money.

Revitalize your living space with our carefully curated selection of furniture and home decor. Explore HomeDecor today and discover the perfect pieces to create a home that truly reflects your style and personality.</p>
<Link to='/' className="bg-slate-900 p-2 my-[20px] w-fit rounded shadow-2xl font-semibold capitalize text-white text-[20px] ">Continue shopping</Link>
        </div>
       </div>
    )
}