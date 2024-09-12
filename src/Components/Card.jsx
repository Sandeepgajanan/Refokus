import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, para, hover = "false", heading, heading2 }) => {
  return (
    <>
      <motion.div
        whileHover={{
          backgroundColor: hover === "true" && "#7443ff",
          padding: "25px",
        }}
        className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[60vh] flex flex-col justify-between hover:${hover}`}
      >
        <div className="">
          <div className="w-full flex justify-between items-center">
            <h3>{heading}</h3>
            <IoIosArrowRoundForward />
          </div>
          <h1 className="text-3xl font-medium mt-5">{heading2}</h1>
        </div>
        <div className="">
          {para ? (
            <>
              {" "}
              <h1 className=" text-5xl font-semi-bold tracking-tight leading-none">
                Start a Project
              </h1>
              <button className="rounded-full py-2 px-5 mt-5 border border-zinc-700">
                Contact Us
              </button>
            </>
          ) : (
            <p className="text-sm text-zinc-500 font-medium mt-3">
              Explore what drives our team.
            </p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
