import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className=" max-w-screen-lg mx-auto py-10 mt-12 flex gap-32 max-sm:flex-col max-sm:mt-8 max-sm:py-5 max-sm:px-2 max-sm:gap-20">
        <div className="basis-1/2">
          <h1 className="text-[10vw] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>

        <div className="basis-1/2 flex gap-2">
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-500 capitalize">socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                className="block mt-4  text-zinc-500 max-sm:text-sm max-sm:mt-2"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-500 capitalize">Links</h4>
            {["home", "work", "Careers", "contact"].map((item, index) => (
              <a
                key={index}
                className="block mt-4 capitalize text-zinc-300 max-sm:text-sm max-sm:mt-2"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right  mt-16 max-sm:text-sm ">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="w-32 mt-4 max-sm:mt-2 max-sm:w-24"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
