import React from "react";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      src: "./arqitel.mp4",
      bg: " bg-[#ff1493cc]",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      src: "./ttr.mp4",
      bg: " bg-[#8a2be2b3]",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
      src: "./yir.mp4",
      bg: " bg-[#ff634780]",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      src: "./yahoo.mp4",
      bg: " bg-[#32cd327f]",
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
      src: "./rainfall.mp4",
      bg: " bg-[#ff450080]",
    },
  ];

  return (
    <div className="mt-12">
      {products.map((item, index) => (
        <Product key={index} val={item} />
      ))}
    </div>
  );
};

export default Products;
