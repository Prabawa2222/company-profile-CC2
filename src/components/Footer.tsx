import Image from "next/image";
import React from "react";
import CardNews from "./CardNews";

const Footer = () => {
  return (
    <div className="bg-[#141F1A] h-fit p-5 flex flex-col lg:items-start items-center sticky">
      <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center">
        <div className="w-96 h-64 flex  flex-col justify-between p-8">
          <div>
            <h1 className="text-white lg:text-left text-center font-InterRegular text-4xl">
              About
            </h1>
            <p className="text-white lg:text-left text-center leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="text-white  lg:text-left text-center text-xl flex flex-col">
            <p className="text-sm">Email : info@jstemplate.net</p>
            <p className="text-sm">Phone : 88- 123 456 789</p>
          </div>
        </div>
        <CardNews />
      </div>
      <div className="h-[5px] w-full bg-gray-100 bg-opacity-10 lg:my-2 my-6" />
      <Image
        src={"/svg/logo_dice_white.svg"}
        width={200}
        height={200}
        className="lg:p-8 p-3"
        alt="logo-dice"
        loading="lazy"
      />
    </div>
  );
};

export default Footer;
