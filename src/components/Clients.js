import Image from 'next/image';

const Partner = ({ img }) => {
   return (
     <div className="w-1/2 md:w-1/6 mb-5 px-2 md:mb-0">
       <Image src={img} width={172} height={52} className="mx-5 lg:mx-auto" />
     </div>
   );
 }

const Clients = () => {
   return (
      <>
        <div className="flex flex-wrap justify-between xl:justify-center items-center text-center">
          <Partner img="/images/amazon.svg" />
          <Partner img="/images/microsoft.svg" />
          <Partner img="/images/tesla.svg" />
          <Partner img="/images/google.svg" />
          <Partner img="/images/facebook.svg" />
        </div>
      </>
   );
}

export default Clients;