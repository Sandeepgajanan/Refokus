import { motion } from "framer-motion";
import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ content, width = "min-w-36" }) => {
  return (
    <motion.div
      className={`relative ${width}   px-3 py-5 bg-zinc-200 rounded-xl flex items-center gap-4 text-zinc-900 font-['satoshi_regular'] overflow-hidden`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="flex items-center px-2  gap-2 absolute"
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -30, opacity: 0, transition: { duration: 0.4 } },
        }}
      >
        <span className="text-sm font-medium">{content}</span>
        <IoIosReturnRight size={"1.2em"} />
      </motion.div>

      <motion.div
        className="flex items-center px-2  gap-3 absolute"
        variants={{
          rest: { y: 30, opacity: 0 },
          hover: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        }}
      >
        <span className="text-sm font-medium">{content}</span>
        <IoIosReturnRight size={"1.2em"} />
      </motion.div>
    </motion.div>
  );
};

export default Button;
