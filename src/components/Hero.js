import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
   const [register, setRegister] = useState('');
   const sumbit = (e) => {
      window.open(`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register?email=${register}`);
      e.preventDefault();
   }
   return (
      <div className="flex justify-between items-center pt-9 self-center">
         <div className="w-full md:w-1/2 items-center align-middle self-center">
             <h1 className="font-medium text-5xl text-white mb-6 leading-normal">
               <span className="c-3 font-semibold">The New</span> Way to Achieve Good <span className="c-3 font-semibold">Skills</span>
             </h1>
             <p className="font-light text-lg leading-[30px] text-white">
               We provide tons of pathskill that you can choose and focus on
             </p>
             <form onSubmit={sumbit} className="flex flex-wrap items-stretch w-full lg:w-3/4 mt-16 mb-4 relative">
               <input onChange={(e) => setRegister(e.target.value)} value={register} type="text" className="focus:outline-none focus:border-2 focus:border-[#fe721c] border-transparent flex-shrink flex-grow flex-auto border p-y px-3 border-grey-light rounded-xl rounded-r-none relative placeholder:font-normal placeholder:text-base placeholder:text-[#7186A0]" placeholder="Your Email Address" />
               <div className="flex -mr-px">
                  <button type="sumbit" className="bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl rounded-l-none border border-l-0 border-[#FE721C] px-7 py-2 text-white text-lg font-normal">Register</button>
               </div>	
            </form>
         </div>
         <div className="w-full md:w-1/2 hidden md:flex justify-end">
            <div className="relative w-[349px] h-[420px] lg:w-[369px] lg:h-[440px] mt-10">
               <div className="absolute border-[#4D55BC] border-2 rounded-xl -mt-8 right-0 w-[304px] h-[304px] lg:w-[324px] lg:h-[374px]" />
               <div className="absolute w-full -mb-8 -ml-8">
                  <Image src="/images/hero-review.jpg" width={369} height={440} className="w-[279px] h-[310px] lg:w-[369px] lg:h-[440px] rounded-xl" />
               </div>
               <div className="absolute z-10 bg-white p-4 mt-24 -translate-x-1/2 xl:-translate-x-2/3 w-[200px] xl:w-[290px] rounded-xl">
                  <p className="font-normal text-base c-5">Metode belajar yang santai seperti nonton drakor di Netflix</p>
                  <p className="mt-3 c-4 font-normal text-sm">Alyssa, Apps Developer</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;