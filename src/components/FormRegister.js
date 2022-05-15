import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import useForm from '../helpers/Hooks/useForm'; 
import fieldError from '../helpers/FieldErrors'

import Select from './Form/Select';
import Input from './Form/Input';

import ImgAuth from '../assets/images/img-register.jpg';
import handlerUsers from '../constans/api/users';

const FormRegister = ({ history }) => {
   const [error, setError] = useState('');
   const ERRORS = fieldError(error);
   const [{ name, email, password, profession, otherProfession }, setState] = useForm({
      name: '',
      email: '',
      password: '',
      profession: '',
      otherProfession: '',
   });
   
   const handleSubmit = e => {
      e.preventDefault();
      handlerUsers.register({ name, email, password, profession: profession === 'others' ? otherProfession : profession })
      .then(res => {
         history.push('/login');
         res.status === 'success' && toast.success(`${res.message} ${res.status}`)
      }).catch(err => setError(err.response.data.message));
   }

  return (
    <div className="h-screen bg-white flex self-center justify-evenly items-center">
       <div className="w-full md:w-1/4">
         <h1 className="text-4xl font-bold italic c-5 mb-9 leading-10">
            Grow Skills <span className="font-normal">From, Anywhere</span>
         </h1>
         <form onSubmit={handleSubmit}>
            <Input labelName="Full Name" type="text" name="name" value={name} onMyChange={setState} error={ERRORS?.name?.message} />
            <Input labelName="Email Address" type="email" name="email" value={email} onMyChange={setState} error={ERRORS?.email?.message} />
            <Input labelName="Password" type="password" name="password" value={password} onMyChange={setState} error={ERRORS?.password?.message} />
            <Select name="profession" value={profession} placeholder={'~ Select Profession ~'} label="Profession" onClick={setState}>
               <option value="">~ Select Profession ~</option>
               <option value="Frontend Developer">Frontend Developer</option>
               <option value="Backend Developer">Backend Developer</option>
               <option value="UX/UI Designer">UX/UI Designer</option>
               <option value="Java Developer">Java Developer</option>
               <option value="Mobile Developer">Mobile Developer</option>
               <option value="other">Other</option>
            </Select>
            {
               profession === 'other' && 
               <Input labelName="Other Profession" type="text" name="otherProfession" value={otherProfession} onMyChange={setState} />
            }
            <input type="submit" value="Register" className="cursor-pointer mt-4 w-full bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border px-1 py-3 text-white text-lg font-normal hover:shadow-inner focus:outline-none transition duration-300 ease-in-out transform hover:-translate-x hover:scale-105" />
         </form>
         <hr className="mt-5" />
         <Link to='/login'><input type="button" value="Login" className="cursor-pointer text-lg mt-5 w-full py-3 rounded-xl c-4 b-5 hover:bg-slate-100 hover:shadow-lg" /></Link>
       </div>
       <div className="w-1/4 lg:w-1/2 hidden md:flex justify-center relative">
         <div className="border-[#4D55BC] border-2 rounded-xl w-[369px] h-[440px] -ml-7 -mt-5" />
         <div className="absolute -mr-7 mt-2">
            <img src={ImgAuth} className="w-[369px] h-[440px] rounded-xl" alt="Hero" />
         </div>
         <div className="absolute bg-white p-4 -bottom-20 shadow-md right-0 w-[200px] xl:w-[290px] rounded-xl">
            <p className="font-normal text-base c-5">
            Semua materi terstruktrur baik dan mentor yang sangat lihai.
            </p>
            <p className="mt-3 c-4 font-normal text-sm">
               Royan, UX Designer
            </p>
         </div>
       </div>
    </div>
  )
}

export default withRouter(FormRegister);
