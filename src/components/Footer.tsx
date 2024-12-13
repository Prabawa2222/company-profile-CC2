import Image from "next/image";
import React from "react";
import CardNews from "./CardNews";

const Footer = () => {
  return (
    <div className="bg-[#141F1A] h-[400px] p-5 flex flex-col sticky">
      <div className="flex flex-row justify-between">
        <div className="w-96 h-64 flex flex-col justify-between p-8">
          <div>
            <h1 className="text-white font-InterRegular text-4xl">About</h1>
            <p className="text-white leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="text-white text-xl flex flex-col">
            <p className="text-sm">Email : info@jstemplate.net</p>
            <p className="text-sm">Phone : 88- 123 456 789</p>
          </div>
        </div>
        <CardNews />
      </div>
      <hr className="bg-gray-200 w-0.9" />
      <Image
        src={"/svg/logo_dice_white.svg"}
        width={200}
        height={200}
        className="p-8"
        alt="logo-dice"
      />
    </div>
  );
};

export default Footer;
