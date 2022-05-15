import React from "react";
import Loader from 'react-content-loader';

const LoadingCard = props => {
  return (
    <div className="px-4 w-1/4">
      <Loader
        speed={2}
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="0" y="3" rx="12" ry="12" width="230" height="142" />
        <rect x="0" y="167" rx="3" ry="3" width="200" height="16" />
        <rect x="0" y="198" rx="3" ry="3" width="100" height="10" />
      </Loader>
    </div>
  );
};

export const Loading = props => {
  return (
    <div className="p-12 bg-gray-100 h-screen w-screen">
      <Loader
        speed={2}
        width={320}
        height={70}
        viewBox="0 0 320 70"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="0" y="8" rx="12" ry="12" width="187" height="32" />
        <rect x="0" y="52" rx="3" ry="3" width="278" height="15" />
      </Loader>
      <div className="flex flex-col mt-4">
        <div className="flex flex-wrap justify-start items-center -mx-4">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </div>
    </div>
  );
};

export const LoadingAvatar = () => {
  return (
    <div className="">
      
    </div>
  );
};
