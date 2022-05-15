import Link from "next/link";
import Card from "./Card";

const Courses = ({ data, titleL, subTitleLL, subTitleLR, titleR }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-auto">
          <p className="c-4 font-normal text-lg mb-1">{titleL}</p>
          <p className="c-5 text-2xl font-medium">
            {subTitleLL} <span className="c-3">{subTitleLR}</span>
          </p>
        </div>
        <Link href="/classes">
          <a className="text-sm font-normal c-4 hover:underline">
            {titleR}
          </a>
        </Link>
      </div>
      <div className="flex flex-wrap justify-start items-start -mx-4 mt-[30px]">
        {data?.length > 0 ? (
          data?.map(item => {
            return <Card item={item} key={item.id} />;
          })
        ) : (
            <p className="text-center w-full">Courses not found...</p>
        )}
      </div>
    </>
  );
};

export default Courses;
