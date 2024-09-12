import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="max-w-screen-lg p-5 mx-auto flex item-center justify-between border-b-2 border-b-zinc-600">
        <div className="n-left flex items-center gap-28">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
          <div className="links flex item-center gap-10 ">
            {["Home", "Work", "Culture", "", "News"].map((item, index) =>
              item.length === 0 ? (
                <span className="w-[2px] h-7  bg-zinc-600 " key={index}></span>
              ) : (
                <a
                  href="#"
                  className="flex items-center text-sm gap-2 font-['Satoshi_Regular'] cursor-none"
                  key={index}
                >
                  {index === 1 && (
                    <span
                      className="w-2 h-2 rounded-full bg-green-600"
                      style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    >
                      {" "}
                    </span>
                  )}
                  {item}
                </a>
              )
            )}
          </div>
        </div>
        <div className="n-right">
          <Button content={"Start a Project"} width={"min-w-40"} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
