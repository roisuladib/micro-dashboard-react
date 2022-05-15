import Link from 'next/link';
import NumberFormat from '../../helpers/NumberFormat';

const Card = ({ item }) => {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-4">
      <div className="category-card relative flex flex-col overflow-x-visible border border-[#E8F0FA] rounded-xl transition-all duration-300 px-4 py-[26px] h-[219px] mb-8 hover:b-2 hover:border-none hover:my-filter">
        {item.image}
        <div className="category-meta mt-10 mt-auto">
          <h4 className="font-normal text-lg c-5 transition-all duration-200 w-1/2">{item.name}</h4>
          <p className="font-normal text-sm c-4 mt-[6px] transition-all duration-500">{NumberFormat(item.total)} Courses</p>
        </div>
        <Link href="#category-class"><a className="link-wrapper"></a></Link>
      </div>
    </div>
  );
}

export default Card;