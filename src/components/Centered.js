import React from 'react';

const Centered = ({ children }) => {
   return (
      <section className="h-screen w-full flex flex-col justify-center items-center">
         <div className="text-lg c-5 px-4 mt-4 mb-8 lg:w-4/6 xl:w-1/2 mx-auto text-center">
             {children}
         </div>
      </section>
   );
};

export default Centered;