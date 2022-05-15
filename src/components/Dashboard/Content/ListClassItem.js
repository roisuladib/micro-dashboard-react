import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconPlay } from '../../../assets/images/ic-play.svg';

const ListClassItem = ({ data }) => {
  return (
      <div className="courses-card relative p-4 rounded-xl hover:transform hover:scale-[1.01] hover:bg-zinc-50 hover:shadow-lg">
         <figure className="thumb-card overflow-hidden w-full h-64 md:h-40">
            <IconPlay />
            <img className="object-cover w-full h-full" src={data.thumbnail ?? ""} alt={data.name ?? "Nama Kelas"} title={data.name ?? "Nama Kelas"} />
         </figure>
         <div className="meta-card mt-3">
            <h4 className="font-normal text-lg c-5 mb-[2px]">
               {data.name}
            </h4>
            <p className="font-normal text-sm c-4">
               {data.level}
            </p>
            <Link to={`/courses/playing/${data.id}`} className="link-wrapper" />
         </div>
      </div>
  );
};

export default ListClassItem;