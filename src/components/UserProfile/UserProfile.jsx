import React, { useEffect } from "react";
import userImg from '../../assets/about.png';
import {AiOutlineLogout, AiOutlineMenu} from 'react-icons/ai';
import {FaUserCircle, FaWarehouse} from 'react-icons/fa'; 
import {RiLockPasswordFill} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai'; 
import  { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import { storage } from "../../config/firebase";
import { toast } from "react-toastify";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

import { v4 } from "uuid";
const levels = [
   100, 200, 300, 400, 500
];

export const UserProfile = () => {
const navigate = useNavigate();
  const {user} = useContext(CartContext);
  const PicFolder = `${user.email}`;
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || '');
    const [selectedPic, setSelectedPic] = useState(null);
    const [profilePicFolder, setProfilePicFolder] = useState('');
console.log(profilePicFolder);
    const uploadProfilePic = () => {
      if (selectedPic === null) {
        const notify = () => toast('Please select profile picture to be uploaded');
        return notify();
      };
      const imageFolder = PicFolder+selectedPic.name+v4();
      setProfilePicFolder(imageFolder);
      const folderRef = ref(storage, imageFolder);
   listAll(folderRef)
   .then(folderSnapshot => {
    if (folderSnapshot.items.length === 0) {
      return uploadBytes(folderRef, null);
    }
    return Promise.all();
   } )
    .then(() => {
      const imageReferrence = ref(storage, `${imageFolder}/${selectedPic.name}`)
      uploadBytes(imageReferrence, selectedPic);
      listAll(folderRef).then(response => {
        response.items.forEach(item => {
          getDownloadURL(item).then(url => {
            setProfilePic(url);
          })
        })
      })
    });

  }
console.log(profilePic) 
  useEffect(() => {

    localStorage.setItem('profilePic', profilePic);
   if (profilePicFolder === '')return;
    const imgRef = ref(storage, `${profilePicFolder}/`);
    listAll(imgRef).then((response) => {
      response.items.forEach(item => {
        getDownloadURL(item).then(url => {
          setProfilePic(url);
        })
      })
    })
  }, [profilePicFolder, profilePic]);

  
    const [form, setForm] = useState({
        changePassword : 'top-[-2000px]', 
        editProfile : 'top-[-2000px]',
      });
      const signUserOut = async () => {
        try {
          await signOut(auth);
          navigate('/login');
        } catch (error) {
          console.log(error)
        }
      };
      //view edit profile page
        const viewEditProfile = () => {
          setForm({
             changePassword : 'top-[-2000px]',
            editProfile : 'top-0',
           })
        }

        //view change password page
        const viewChangePassword = () => {
          setForm({
             changePassword : 'top-0',
            editProfile : 'top-[-2000px]',
           })
        }

        //hide edit profile page
        const hideEditProfile = () => {
          setForm({
             changePassword : 'top-[-2000px]',
            editProfile : 'top-[-2000px]',
           })
        } 

        //hide change password page
        const hideChangePassword = () => {
          setForm({
             changePassword : 'top-[-1000px]',
            editProfile : 'top-[-1000px]',
           });
        } 
    return(
      !user?  navigate('/login') :
        <>
        <div className="flex justify-center flex-row pb-[100px] pt-[150px] items-center bg-white">
            <div className="bg-gradient-to-b  from-white to-white p-5 rounded ">
                <div className="flex flex-col items-center md:items-start md:flex-row gap-5 md:gap-[150px]">
                    <div className="flex flex-col items-center ">
                     {profilePic == '' ?
                      <div   className='  w-fit rounded-full  text-slate-300 active:text-white  uppercase text-center font-[500] shadow-2xl text-[30px] p-2'><FaUserCircle className="shadow-2xl"/></div> : 
                      // profilePic.map(img => {
                      <img className="w-[100px] shadow-2xl h-[100px] rounded-full" src={profilePic} alt="" /> 
}
                      { /* <div className="flex flex-col justify-center items-center">
                    <input onChange={(e) => setSelectedPic(e.target.files[0])} type="file" className="file:bg-transparent font-semibold py-[10px] file:border-0 max-w-[200px]" name="" id="" />
                    <button onClick={uploadProfilePic} className="flex items-center text-center text-slate-50 gap-2 md:text-[20px] font-semibold bg-black text-[15px]  p-2 h-fit rounded ">Update profile picture</button>
</div>*/}
                    </div>
                  
                    <div className="flex flex-col text-center md:text-start gap-[20px] ">
                     <h1 className="uppercase font-bold text-[25px] ">My Profile</h1>
                  {   <p className="flex flex-col"><span className="text-[25px] font-semibold ">Name:</span> <span className="text-slate-700 text-[20px] " >{user?.email}</span></p>}
                     <p className="flex flex-col"><span className="text-[25px] font-semibold ">Email:</span> <span className="text-slate-700 text-[20px] " >{user?.email}</span></p>
                  
                     <div className="flex items-center text-center justify-center flex-col md:flex-row gap-1">
           {/* <button onClick={viewChangePassword} className="flex items-center text-center text-slate-50 gap-2 md:text-[20px] bg-green-500 text-[15px]  p-2 h-fit rounded ">Change Password <RiLockPasswordFill/></button>}
           {/* <button onClick={viewEditProfile}  className="flex items-center text-center text-slate-50 gap-2 md:text-[20px] bg-yellow-500 text-[15px]  p-2 h-fit rounded ">Edit Profile<AiFillEdit/></button>*/}
            <button onClick={signUserOut} className="flex items-center  text-slate-50 gap-2 md:text-[20px] bg-red-500 text-[15px]  p-2 px-[45px] h-fit rounded ">Logout <AiOutlineLogout/></button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center gap-5 p-[20px] py-[50px] flex-row">
          <span onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
              setForm({...form, editProfile: 'top-[-2000px]'})
            }
          }} className={`fixed ${form.editProfile}   w-full h-full flex justify-center z-[500] p-[50px] bg-Tp`}>
         <form  action="" className="bg-yellow-500 overflow-y-auto relative rounded flex flex-col gap-2 px-[50px] py-[20px]">
          <HiXMark onClick={hideEditProfile} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold "/>
            <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Edit Profile</h1>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                <input type="email" disabled className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
           </div>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">First Name:</label>
                <input type="text" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu " />
            </div>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">Last Name:</label>
                <input type="text" className="border outline-0  p-2 rounded" placeholder="Desmond" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="Level">Level:</label>
              <select className="border outline-0  p-2 rounded"  name="" id="">
                <option value="">Select</option>
                {levels.map(level => {
                    return <option value={level}>{level} Level</option>
                })}
              </select>
            <div className="flex flex-col">
                <button className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Update Profile</button>
            </div>
            </div>
        </form>
        </span>
        <span onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
              setForm({...form, changePassword: 'top-[-2000px]'})
            }
          }} className={`fixed ${form.changePassword}   w-full h-full flex justify-center z-[500] p-[50px] bg-Tp`}>
         <form  action="" className="bg-yellow-500 overflow-y-auto relative rounded flex flex-col gap-4 p-[50px]">
          <HiXMark onClick={hideChangePassword} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold "/>
            <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Change Password</h1>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                <input type="email"  className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
           </div>
           
            <div className="flex flex-col">
                <button className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Send Link</button>
            </div>
        </form>
        </span>
        </div>
        </>
    )
}