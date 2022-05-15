import Business from '/public/images/business.svg';
import Writter from '/public/images/content_writter.svg';
import Product from '/public/images/product_ad.svg';
import Cs from '/public/images/cs.svg';
import Game from '/public/images/game.svg';
import Travel from '/public/images/travel.svg';
import Card from './Card';

const Categories = () => {
   const data = [
      {
         image: <Business />,
         name: 'Business Development',
         total: 1799
      },
      {
         image: <Writter />,
         name: 'Content Writter',
         total: 1799
      },
      {
         image: <Product />,
         name: 'Product Advertisement',
         total: 1799
      },
      {
         image: <Cs />,
         name: 'Customer Relationship',
         total: 1799
      },
      {
         image: <Game />,
         name: 'Game Development',
         total: 1799
      },
      {
         image: <Travel />,
         name: 'Travel Guidance',
         total: 90
      },
   ];
   
   return (
      <>
         <div className="items-start justify-center">
         <p className="c-4 font-normal text-lg mb-1">Category</p>
         <p className="c-5 text-2xl font-medium">Explore & <span className="c-3">Learn</span></p>
         </div>
         <div className="flex flex-wrap justify-start items-center -mx-4 mt-[30px]">
         {data?.length > 0 ? (
            data.map((item, index) => {
            return <Card item={item} key={index} />;
            })
         ) : (
            <p className="">Courses not found...</p>
         )}
         </div>
      </>
   );
}

export default Categories;