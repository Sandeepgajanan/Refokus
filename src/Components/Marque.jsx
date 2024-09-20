import { motion, reverseEasing } from "framer-motion";
import React from "react";

const Marque = ({ value, direction }) => {
  return (
    <div className="w-full flex overflow-hidden relative">
      <motion.div
        className="flex flex-shrink-0 gap-32 py-8 pr-40 max-sm:gap-20 max-sm:pr-36 max-sm:py-4"
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 20,
        }}
      >
        {value.map((url, index) => (
          <img className="" src={url} key={index} alt="" />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0 gap-32 py-8 pr-40 max-sm:gap-20 max-sm:pr-36 max-sm:py-4"
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 20,
        }}
      >
        {value.map((url, index) => (
          <img className="" src={url} key={index} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
