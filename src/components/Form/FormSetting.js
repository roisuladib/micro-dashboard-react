import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { populateProfile } from '../../store/Actions/users';

import Select from './Select';
import Input from './Input';
import useForm from '../../helpers/Hooks/useForm';

import apiUsers from '../../constans/api/users';
import apiMedia from '../../constans/api/media';

import ImageBase64 from '../../helpers/ImageBase64';
import fieldErrors from '../../helpers/FieldErrors';

import { ReactComponent as IconAvatar } from '../../assets/images/ic-default-avatar.svg';

import { toast } from 'react-toastify';

const FormSetting = ({ settings }) => {
   const dispatch = useDispatch();
   const addPicture = useRef(null);
   const [state, setKey, setState] = useForm({
      name: settings?.name ?? '',
      email: settings?.email ?? '',
      password: settings?.password ?? '',
      avatar: settings?.avatar ?? '',
      profession: settings?.profession ?? '',
      otherProfession: settings?.otherProfession ?? '',
   })
   const [error, setError] = useState(null);
   const ERRORS = fieldErrors(error);
   const previewImage = e => {
      e.persist();
      ImageBase64(e.target.files[0]).then(image => {
         setKey({
            target: {
               name: e.target.name,
               value: image
            }
         })
      })
   }
   const uploadPicture = () => addPicture.current.click();
   const sumbitSettings = async e => {
      e.preventDefault();
      const body = {
         name: state.name,
         email: state.email,
         password: state.password,
         profession: state.profession,
         avatar: state.avatar
      }
      if (state.avatar.indexOf('base64') > -1) {
         const upload = await apiMedia.upload(state.avatar);
         body.avatar = upload.data.image;
      }
      if (body.profession === 'others') {
         state.profession = state.otherProfession;
      }
      apiUsers.update(body).then(res => {
         toast.success(res?.data?.message);
         setState({ ...state, password: '' });
         setError(null);
         dispatch(populateProfile({ ...settings, ...res.data }));
      }).catch(err => setError(err.response.data.message));
   }

   return (
      <div className="flex flex-col mt-5">
         <div className="flex flex-row items-center">
            <div className="rounded-full overflow-hidden h-24 w-24 mr-5">
               {
                  state?.avatar
                     ? <img
                        className="w-24 h-auto object-cover rounded-full"
                        src={state?.avatar}
                        alt={state?.name}
                        title={state?.name} />
                     : <IconAvatar />
               }
            </div>
            <div>
               <p className="mb-3 truncate ...">
                  {
                     state.avatar
                     ? 'Update picture'
                     :'Add picture'
                  }
               </p>
               <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  className="hidden bg-[#ededed] rounded-xl px-7 py-2 text-lg text=[#acacac]"
                  ref={addPicture}
                  onChange={previewImage}
               />
               <input
                  type="button"
                  className="cursor-pointer bg-[#ededed] text-[#acacac] hover:bg-[#d9d9d9] focus:border-[#ededed] rounded-xl border px-7 py-1 text-base font-normal hover:shadow-inner focus:outline-none transition duration-300 ease-in-out transform hover:-translate-x hover:scale-105"
                  value="Browse"
                  onClick={uploadPicture}
               />
            </div>
         </div>
         <form className="w-full md:w-1/2 lg:w-2/6" onSubmit={sumbitSettings}>
            <Input labelName="Full Name" type="text" name="name" value={state?.name} onMyChange={setKey} error={ERRORS?.name?.message} />
            <Input labelName="Email Address" type="email" name="email" value={state?.email} onMyChange={setKey} error={ERRORS?.email?.message} />
            <Input labelName="Password" type="password" name="password" value={state?.password} onMyChange={setKey} error={ERRORS?.password?.message} />
            <Select name="profession" value={state?.profession} placeholder={'~ Select Profession ~'} label="Profession" onClick={setKey}>
               <option value="">~ Select Profession ~</option>
               <option value="Frontend Developer">Frontend Developer</option>
               <option value="Backend Developer">Backend Developer</option>
               <option value="UX/UI Designer">UX/UI Designer</option>
               <option value="Java Developer">Java Developer</option>
               <option value="Mobile Developer">Mobile Developer</option>
               <option value="other">Other</option>
            </Select>
            {
               state?.profession === 'other' &&
               <Input labelName="Other Profession" type="text" name="otherProfession" value={state?.otherProfession} onMyChange={setKey} />
            }
            <button className="mt-4 w-full cursor-pointer bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border px-1 py-3 text-white text-lg font-normal hover:shadow-inner focus:outline-none transition duration-300 ease-in-out transform hover:-translate-x hover:scale-105">
               Update
            </button>
         </form>
      </div>
   );
};

export default withRouter(FormSetting);