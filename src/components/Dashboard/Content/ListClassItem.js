import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from '../../../helpers/NumberFormat';

import { ReactComponent as IconPlay } from '../../../assets/images/ic-play.svg';

const ListClassItem = ({ data }) => {
   return (
      <div className="courses-card relative p-3 rounded-xl hover:transform hover:scale-[1.01] bg-white shadow hover:shadow-lg">
         <figure className="thumb-card overflow-hidden w-full h-64 md:h-40 rounded-xl">
            <IconPlay />
            <img className="object-cover w-full h-full" src={data.thumbnail ?? ""} alt={data.name ?? "Nama Kelas"} title={data.name ?? "Nama Kelas"} />
         </figure>
         <div className="meta-card mt-3 flex flex-col justify-between">
            <h4 className="font-normal text-lg c-5 mb-[2px]">
               {data.name}
            </h4>
            <div className="flex justify-between">
               <p className="font-normal text-sm c-4">
                  {data?.level}
               </p>
               <span className="font-bold text-sm c-7">
                  {data?.price === 0 ? 'Free' : ('Rp ' + NumberFormat(data?.price))}
               </span>
            </div>
            <Link to={`/courses/playing/${data.id}`} className="link-wrapper" />
         </div>
      </div>
   );
};

export default ListClassItem;