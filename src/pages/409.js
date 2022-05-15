import React from 'react';
import { ReactComponent as IconAlt } from '../assets/images/ic-alt.svg';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Custom409 = ({ status, message, buttonText }) => {
   return (
      <section className="h-screen flex flex-col justify-items-stretch text-center px-4 py-20 items-center bg-white">
         <div className="px-4">
            <IconAlt />
         </div>
         <h1 className="mt-20 mb-2 c-5 font-medium text-2xl">
            {status}
         </h1>
         <p className="mb-10 c-4 font-light text-lg">
            {message}
         </p>
         <Link to={'/'} className="bg-[#FE721C] cursor-pointer hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
            {buttonText}
         </Link>
      </section>
   );
};

Custom409.propTypes = {
   status: propTypes.string,
   message: propTypes.string,
   buttonText: propTypes.string
}

export default Custom409;
