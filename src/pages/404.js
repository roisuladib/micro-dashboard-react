import { useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';

const Custom404 = () => {
  const router = useHistory();
  useEffect(() => {
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  }, [router]);

  return (
    <section className="h-screen flex flex-col justify-items-stretch text-center px-4 py-20 items-center bg-white">
      <img src={`${process.env.REACT_APP_FRONTPAGE_URL}/images/img-404.svg`} alt="" />
      <h1 className="mt-20 mb-2 c-5 font-medium text-2xl">
        Opps! We’re lost
      </h1>
      <p className="mb-10 c-4 font-light text-lg">
        The page that you requested is not found in our system
      </p>
      <Link to={'/login'} className="bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
        Back
      </Link>
    </section>
  );
};

export default Custom404;
