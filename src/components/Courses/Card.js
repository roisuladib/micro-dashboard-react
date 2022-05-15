import Link from 'next/link';
import Play from '/public/images/ic-play.svg';

const Card = ({ item }) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4">
      <div className="courses-card relative h-full overflow-hidden mb-8">
        <figure className="thumb-card overflow-hidden">
          <Play />
          <img className="h-[110px] md:h-[170px] w-full object-cover object-center rounded-t-xl" src={item?.thumbnail ?? '/images/placeholder.jpg'} alt={item?.thumbnail ?? 'Some information'} />
        </figure>
        <div className="meta-card mt-3">
          <h4 className="font-normal text-lg c-5 mb-[2px]">{item?.name ?? 'Course name'}</h4>
          <p className="font-normal text-sm c-4">{item?.level ?? 'level'}</p>
          <Link href="/classes/[id]" as={`/classes/${item.id}`}><a className="link-wrapper"></a></Link>
        </div>
      </div>
    </div>
  );
}

export default Card;