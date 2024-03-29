import React from "react";
import Loader from 'react-content-loader';

const Card = props => {
  return (
    <>
      <Loader
        speed={2}
        width={220}
        height={300}
        viewBox="0 0 220 300"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="0" y="0" rx="12" ry="14" width="220" height="142" />
        <rect x="0" y="167" rx="3" ry="3" width="170" height="16" />
        <rect x="0" y="198" rx="3" ry="3" width="100" height="10" />
      </Loader>
    </>
  );
};

export const LoadingTitle = props => {
  return (
    <Loader
      speed={2}
      width={320}
      height={70}
      viewBox="0 0 320 70"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      {...props}
    >
      <rect x="0" y="4" rx="12" ry="12" width="187" height="33" />
      <rect x="0" y="48" rx="3" ry="3" width="278" height="15" />
    </Loader>
  );
}

export const LoadingCard = () => {
  return (
    <>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export const LoadingTitleNCard = props => {
  return (
    <>
    <LoadingTitle />
    <LoadingCard />
    </>
  );
}

export const LoadingAvatar = () => {
  return (
    <div className="">

    </div>
  );
};

