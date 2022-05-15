import NumberFormat from '/src/helpers/NumberFormat';

const Features = ({ data }) => {
  return (
    <div className="my-3 md:my-0 border border=[#DBDBDB] p-[30px] bg-white w-auto lg:w-[290px]">
      <div className="flex">
        {data.icon}
        <div className="ml-8">
          <p className="font-normal text-base c-4 -mb-1">{data.title}</p>
          <p className="font-medium text-[32px] c-5">
            {typeof data.val === "number"
              ? NumberFormat(data.val)
              : data.val}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
