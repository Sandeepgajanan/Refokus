import React, { useState } from "react";
import Button from "./Button";

const Product = ({ val }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`w-full py-14  max-sm:py-6 font-['satoshi_regular'] min-h-[15rem] relative  ${
        hover && val.bg
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-between max-sm:flex-col ">
        <h1 className="text-6xl capitalize font-medium max-sm:text-center">
          {val.title}
        </h1>
        <div className="w-1/3 max-sm:w-full ">
          <p className="mb-10 max-sm:mt-3 max-sm:text-center max-sm:mb-3">
            {val.description}
          </p>
          <div className="flex gap-5 max-sm:items-center max-sm:justify-center">
            {val.live && <Button content={"Live Project"} />}
            {val.case && <Button content={"Case Studies"} />}
          </div>
        </div>
      </div>
      <div className="w-72 h-[18rem] absolute top-0 left-[33%] py-14  max-sm:static max-sm:ml-auto max-sm:mr-auto max-sm:py-8 max-sm:w-64 ">
        <video
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          } max-sm:opacity-100 max-sm:rounded-xl`}
          src={val.src}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Product;
