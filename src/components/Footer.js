const Item = props => {
   return (
      <div className="w-1/2 md:w-[23.3333333333%] mb-8 md:mb-0">
         <h6 className="text-white text-lg font-normal mb-4">{props.title}</h6>
         <p className="text-base font-normal c-6 hover:c-3 hover:underline cursor-pointer">{props.sub1}</p>
         <p className="text-base font-normal c-6 hover:c-3 hover:underline mt-2 cursor-pointer">{props.sub2}</p>
         <p className="text-base font-normal c-6 hover:c-3 hover:underline mt-2 cursor-pointer">{props.sub3}</p>
         <p className="text-base font-normal c-6 hover:c-3 hover:underline mt-2 cursor-pointer">{props.sub4}</p>
      </div>
   );
}

const Footer = () => {
   return (
      <footer className="w-full b-1 mt-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between pt-[50px] pb-[60px]">
            <Item title="Company" sub1="API Developer" sub2="Career" sub3="Our Story" sub4="New Soon" />
            <Item title="Student" sub1="Get Scholarship" sub2="Our Pathskills" sub3="All Features" sub4="Refund Policy" />
            <Item title="Touch Us" sub1="Mas Adib Centre" sub2="Jl. Kenangan No.17" sub3="Demak, Indonesia" sub4="+62-8957-0444-7596" />
            <div className="w-full md:w-[30%] mb-8 md:mb-0">
              <h6 className="text-white text-lg font-normal mb-4">Promotions</h6>
              <p className="text-base font-normal c-6 hover:c-3 hover:underline mb-5 cursor-pointer">Submit your email for new updates</p>
              <form className="flex">
                <input type="text" className="w-full focus:outline-none focus:border-2 focus:border-[#fe721c] border-transparent flex-shrink flex-grow flex-auto border p-y px-3 border-grey-light rounded-xl rounded-r-none relative placeholder:font-normal placeholder:text-base placeholder:text-[#7186A0]" placeholder="Your Email Address" />
                <button type="sumbit" className="bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl rounded-l-none border border-l-0 border-[#FE721C] px-7 xs:px-7 md:px-2 lg:px-7 py-2 text-white text-lg font-normal">Sumbit</button>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center text-center py-[30px] border-t border-[#333769]">
            <p className="c-6 font-normal text-base hover:c-3 cursor-pointer">2022 Copyright Micro by Mas Adib. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
   );
}

export default Footer;