import React, { useState } from "react";
import Button from "./Button";

const Product = ({ val }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`w-full py-14 font-['satoshi_regular'] min-h-[15rem] relative ${
        hover && val.bg
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-between ">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex gap-5">
            {val.live && <Button content={"Live Project"} />}
            {val.case && <Button content={"Case Studies"} />}
          </div>
        </div>
      </div>
      <div className="w-72 h-[18rem] absolute top-0 left-[33%] py-14">
        <video
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
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
