import React from "react";

const Stripe = ({ values }) => {
  return (
    <>
      <div className="flex items-center  justify-between w-[16.66%]  px-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-800 border-r-zinc-600 max-sm:w-[70%] max-sm:flex-shrink-0  max-sm:py-4 max-sm:px-2 max-sm:border-[1px]">
        <img className="object-cover" src={values.url} alt="" />
        <span className="text-l font-bold max-sm:text-sm">{values.number}</span>
      </div>
    </>
  );
};

export default Stripe;
