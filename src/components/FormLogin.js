import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { populateProfile } from '../store/Actions/users';

import { toast } from 'react-toastify';

import useForm from '../helpers/Hooks/useForm'; 

import ImgAuth from '../assets/images/img-auth.jpg';
import handlerUsers from '../constans/api/users';
import { setAuthorizationHeader } from '../configs/axios';

const FormLogin = ({ history }) => {
   const dispath = useDispatch();
   const [{ email, password }, setState] = useForm({
      email: '',
      password: ''
   });

   const handleSubmit = e => {
      e.preventDefault();
      handlerUsers.login({email, password}).then(res => {
         localStorage.setItem('ADIBMICRO:token', JSON.stringify({
            ...res.data, email
         }));
         setAuthorizationHeader(res.data.token);
         handlerUsers.detail().then(res => {
            dispath(populateProfile(res.data));
            const production = process.env.REACT_APP_FRONTPAGE_URL === 'http://localhost:3031' ? 'Domain: localhost:3031': '';
            const redirect = localStorage.getItem('ADIBMICRO:redirect');
            const userCookie = {
               name: res.data.name,
               avatar: res.data.avatar,
               role: res.data.role
            }
            const experid = new Date(
               new Date().getTime() + 7 * 24 * 60 * 60 * 1000
            );
            document.cookie = `ADIBMICRO:user=${JSON.stringify(userCookie)}; experid=${experid.toUTCString()}; path:/; ${production}`;         
            history.push(redirect || '/');            
         });
         res.status === 'success' ? toast.success(`${res.message} ${res.status}`) : toast.error(res.message.message);
      }).catch(err => console.log(err));
   }

  return (
    <div className="h-screen bg-white flex self-center justify-evenly items-center">
       <div className="w-full md:w-1/4">
         <h1 className="text-4xl font-bold c-5 mb-9 leading-normal">
            Continue <span className="font-normal">Study, Finish Your</span> Goals
         </h1>
         <form onSubmit={handleSubmit}>
            <div className="mb-4">
               <label onClick={() => toast.error('wkwk')} htmlFor="email" className="font-normal text-lg c-5">Email Address</label>
               <input 
                  type="email"
                  name="email"
                  onChange={setState} 
                  value={email} 
                  autoFocus
                  className="text-lg mt-2 w-full focus:outline-none focus:border-2 focus:border-[#fe721c] border-[#7186A0] border py-3 px-4 border-grey-light rounded-xl" />
            </div>
            <div className="mb-10">
               <label htmlFor="password" className="font-normal text-lg c-5">Password</label>
               <input 
                  onChange={setState} 
                  value={password}
                  type="password" 
                  name="password" 
                  className="font-bold mt-2 w-full focus:outline-none focus:border-2 focus:border-[#fe721c] border-[#7186A0] border py-3 px-4 border-grey-light rounded-xl"
               />
            </div>
            <input 
               type="submit" 
               value="Login" 
               className="cursor-pointer w-full bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border px-1 py-3 text-white text-lg font-normal hover:shadow-inner focus:outline-none transition duration-300 ease-in-out transform hover:-translate-x hover:scale-105"
            />
         </form>
         <hr className="mt-5" />
         <Link to='/register'><input type="button" value="Register" className="cursor-pointer text-lg mt-5 w-full py-3 rounded-xl c-4 b-5 hover:bg-slate-100 hover:shadow-lg" /></Link>
       </div>
       <div className="w-1/4 lg:w-1/2 hidden md:flex justify-center relative">
         <div className="border-[#4D55BC] border-2 rounded-xl w-[369px] h-[440px] -ml-7 -mt-5" />
         <div className="absolute -mr-7 mt-2">
            <img src={ImgAuth} className="w-[369px] h-[440px] rounded-xl" alt="Hero" />
         </div>
         <div className="absolute bg-white p-4 -bottom-20 shadow-sm right-0 w-[200px] xl:w-[290px] rounded-xl">
            <p className="font-normal text-base c-5">
               Semua sudah terarah dengan baik dan perlu ikuti saja.
            </p>
            <p className="mt-3 c-4 font-normal text-sm">
               Tamara, UX Designer
            </p>
         </div>
       </div>
    </div>
  )
}

export default withRouter(FormLogin);
