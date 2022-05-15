import React, { useState, useEffect } from 'react';
import apiCourse from '../constans/api/courses';
import ServerError from '../pages/500';
import { Loading } from '../components/Loading';

const Joined = ({ history, match }) => {
   const [state, setState] = useState(() => ({
      isLoading: true,
      isError: false,
      data: {}
   }));

   const idClass = match.params.class;
   useEffect(() => {
      apiCourse.detail(idClass)
         .then(res => setState({ isLoading: false, isError: false, data: res }))
         .catch(err => console.log(err), setState({ isLoading: false, isError: true, data: null }))
   }, [idClass])

   if (state.isLoading) return <Loading />;
   if (state.isError) return <ServerError />;

   const joining = () => {
      apiCourse.join(idClass)
         .then(() => history.push(`/courses/playing/${idClass}`))
         .catch(err => {
            if (err?.response?.status === 409) {
               history.push(`/courses/playing/${idClass}`);
            }
         })
   }

   return (
      <section className="h-screen flex flex-col justify-items-stretch text-center px-4 py-20 items-center bg-white">
         <img src={`${process.env.REACT_APP_FRONTPAGE_URL}/images/img-joined.svg`} alt="" />
         <h1 className="mt-20 mb-2 c-5 font-medium text-2xl">Welcome to Class</h1>
         <p className="mb-10 c-4 font-light text-lg">
            You have successfully joined our <span className="font-normal">{state?.data?.name}</span> class
         </p>
         <span onClick={joining} className="bg-[#FE721C] cursor-pointer hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
            Start Learn
         </span>
      </section>
   );
};

export default Joined;
