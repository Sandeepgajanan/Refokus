import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto  mt-10 py-5 flex gap-2 ">
        <Card
          width={"basis-1/3"}
          start={false}
          para={false}
          heading={"Up Next:"}
          heading2={"Who we are"}
        />
        <Card
          heading={"Get in Touch"}
          heading2={"Let's get to it."}
          width={"basis-2/3"}
          start={true}
          para={true}
          hover="true"
        />
      </div>
    </div>
  );
};

export default Cards;
