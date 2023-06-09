import React, { useEffect } from "react";
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BounceLoader } from "react-spinners";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { CartContext } from "../../components/CartContext/CartContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const [spinnerJs, setSpinnerJs] = useState(false);
    const {user} = useContext(CartContext);
    const [inputs, setInputs] = useState({
        signInemail: '',
        signInpassword: '',
    });

    const signin = async () => {
        setSpinnerJs(true);
        try {
            await signInWithEmailAndPassword(auth, inputs.signInemail, inputs.signInpassword);
            navigate('/profile');
            
        } catch (error) {
            console.log(error);
        }
    }
    return(

        user?  navigate('/profile') :
        <div className="py-[150px] px-[20px]  ">
             { spinnerJs &&  <div className="fixed bg-Tp w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#ffb700"
           size={100}
            /></div> }
            <div className="flex flex-row justify-center">
             <div data-aos='zoom-in' className="bg-slate-900 md:px-[70px]  flex flex-col  p-[20px] rounded shadow-2xl">
              <div>
                <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize    mb-3">Welcome back!</h1>
               {/* <button onClick={signInWithgoogleE} className="flex text-center justify-center items-center my-5 gap-x-2 text-[20px] bg-pink-500 p-2 capitalize text-white rounded-[2px] font-[300]"><FcGoogle/> Sign in with your google accout </button>*/}
               {/* <p className="text-center text-slate-300 capitalize mb-[20px]  text-[17px]">login with your email</p>*/}
              </div>
                <form action="" className="flex  flex-col gap-5">
                    <div className="flex flex-col items-start">
                        <label htmlFor="email" className="flex font-semibold items-center text-slate-900 text-[15px]"><AiOutlineMail/>Email</label>
                        <input onChange={(e) => setInputs({...inputs, signInemail: e.target.value })} value={inputs.signInemail} type="email" placeholder="nzubechukwu@gmail.com"  className="p-3 shadow rounded w-full outline-0 "/>
                    </div>
                    <div>
                    <label htmlFor="password" className="flex font-semibold items-center text-slate-900 text-[15px] "><RiLockPasswordFill/>Password</label>
                        <input  onChange={(e) => setInputs({...inputs, signInpassword: e.target.value })} value={inputs.signInpassword} type="password" placeholder="******"  className="p-3 rounded outline-0 w-full shadow "/>
                    </div>
                  <button onClick={signin} type="button"  className="bg-green-500 rounded text-[17px] font-semibold p-3">Login</button>
                  <p className="text-center text-[17px] text-slate-100 ">Don't have account yet? <Link to='/signup' className="text-slate-50 uppercase font-bold">Sign Up</Link></p>
                </form>
             </div>
            </div>
        </div>
    )
}