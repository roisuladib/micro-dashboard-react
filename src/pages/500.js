import React from "react";
import { Link } from 'react-router-dom';

const Custom500 = () => {
  return (
    <section className="h-screen flex flex-col justify-items-stretch text-center px-4 py-20 items-center bg-white">
      <img src={`${process.env.REACT_APP_FRONTPAGE_URL}/images/img-joined.svg`} alt="" />
      <h1 className="mt-20 mb-2 c-5 font-medium text-2xl">Opps! Server Error</h1>
      <p className="mb-10 c-4 font-light text-lg">
        Mostly this cause by the server was busy, please try again later.
      </p>
      <Link to='/' className="bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
        Login
      </Link>
    </section>
  );
};

export default Custom500;
