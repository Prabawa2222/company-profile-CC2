import React from "react";

interface ServiceProps {
  iconSrc: string;
  text: string;
  imageSrc: string;
  desc: string;
}

const CardService: React.FC<ServiceProps> = ({
  iconSrc,
  text,
  imageSrc,
  desc,
}) => {
  return (
    <div className="flex flex-col w-64 h-[450px] items-center justify-center relative m-2">
      <img
        src={imageSrc}
        className="object-cover w-full h-3/4 rounded-xl"
        alt="carousel"
      />
      <div className="absolute bg-black bg-opacity-70 rounded-xl m-2" />
      <div className="absolute flex flex-col items-center justify-between ">
        <img src={iconSrc} className="w-24" />
        <span className="text-white text-xl font-PolyRegular mt-5">{text}</span>
      </div>
      <p className="text-dark text-center text-sm font-PolyItalic italic mt-4 px-4">
        {desc}
      </p>
    </div>
  );
};

export default CardService;
