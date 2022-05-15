import { useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';

const Custom401 = ({ fallBackUrl, falBackText, external }) => {
  const router = useHistory();
  useEffect(() => {
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  }, [router]);

  return (
    <section className="h-screen flex flex-col justify-items-stretch text-center px-4 py-20 items-center bg-white">
      <img src={`${process.env.REACT_APP_FRONTPAGE_URL}/images/img-401.svg`} alt="" />
      <h1 className="mt-20 mb-2 c-5 font-medium text-2xl">Wow! How are you here?</h1>
      <p className="mb-10 c-4 font-light text-lg">Seems like you do not have access for this page. We are sorry.</p>
      {
        external 
        ? <a href={fallBackUrl} className="bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
            {falBackText ?? 'Login'}
          </a>
        : <Link to={fallBackUrl ?? '/login'} className="bg-[#FE721C] hover:bg-[#e96818] focus:border-[#FE721C] rounded-xl border border-[#FE721C] px-7 py-3 text-white text-lg font-normal">
            {falBackText ?? 'Login'}
          </Link>
      }
    </section>
  );
};

export default Custom401;
