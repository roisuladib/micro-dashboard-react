import Star from "../Star";

const HappyStudent = ({ data }) => {
   return (
      <div className="mt-8">
         <Star value={data?.rating ?? 0} width={26} height={26} />
         <p className="c-4 text-base font-light leading-relaxed -mt-1">{data?.note ?? 'Student Replay'}</p>
         <div className="flex items-center mt-2">
            <div className="w-14 h-14 rounded-full overflow-hidden object-cover">
               <img src={data?.users?.avatar ?? '/images/ic-avatar.svg'} alt={data?.users?.name ?? 'Foto User'} title={data?.users?.name ?? 'User'} />
            </div>
            <div className="ml-4">
               <h2 className="text-base c-5">{data?.users?.name ?? 'Nama User'}</h2>
               <p className="font-light text-sm c-4 mt-[2px]">{data?.users?.profession ?? 'Prefossion'}</p>
            </div>
         </div>
      </div>
   );
}

export default HappyStudent;