import React from 'react';

const MyClassEmpty = () => {
   return (
      <div className="w-full md:w-1/2 text-center mx-auto">
         <img className="mx-auto" src={`${process.env.REACT_APP_FRONTPAGE_URL}/images/img-emty-class.svg`} alt="emty class" />
         <h1 className="mt-20 mb-2 c-5 font-medium text-2xl">Time to Invest</h1>
         <p className="mb-10 c-4 font-light text-lg">
            It seems you don’t have any class yet so let’s get them and grow your skills
         </p>
         <a target="_blank" rel="noopener noreferrer" href={`${process.env.REACT_APP_FRONTPAGE_URL}/classes`} className="bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
            Cari Kelas
         </a>
      </div>
   );
};

export default MyClassEmpty;