import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import apiCourse from '../constans/api/courses';
import ServerError from '../pages/500';
import { Loading } from '../components/Loading';

const Joined = ({ match }) => {
   const [state, setState] = useState(() => ({
      isLoading: true,
      isError: false,
      data: {}
   }));
   
   const idClass = match.params.class;
   const joining =  useCallback(async () => {
      try {
         const details = await apiCourse.detail(idClass);
         const joined = await apiCourse.join(idClass)
         if (joined?.data?.snap_url) {
            window.location.href = joined?.data?.snap_url;
         } else {
            setState({ isLoading: false, isError: false, data: details })
         }
         console.log('details :>> ', details);
         console.log('joined :>> ', joined);
      } catch (error) {
         console.log('error :>> ', error);
      }
   }, [idClass], );

   useEffect(() => {
      joining();
   }, [joining])

   if (state.isLoading) return <Loading />;
   if (state.isError) return <ServerError />;

   return (
      <section className="h-screen flex flex-col justify-items-stretch text-center px-4 py-20 items-center bg-white">
         <img src={`${process.env.REACT_APP_FRONTPAGE_URL}/images/img-joined.svg`} alt="" />
         <h1 className="mt-20 mb-2 c-5 font-medium text-2xl">Welcome to Class</h1>
         <p className="mb-10 c-4 font-light text-lg">
            You have successfully joined our <span className="font-normal">{state?.data?.name}</span> class
         </p>
         <Link to={`/courses/playing/${idClass}`} className="bg-[#FE721C] cursor-pointer hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
            Start Learn
         </Link>
      </section>
   );
};

export default Joined;
