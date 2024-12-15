import Image from "next/image";
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
    <div className="flex flex-col items-center w-[200px] sm:w-[250px] md:w-[300px] h-[350px] sm:h-[400px] relative m-2 shrink-0">
      <img
        src={imageSrc}
        className="object-cover w-full h-2/3 rounded-xl"
        alt={text}
        loading="lazy"
      />
      <div className="absolute inset-0 w-full h-2/3 bg-black bg-opacity-30 rounded-xl" />

      <div className="absolute top-20 flex flex-col items-center justify-center">
        <Image
          src={iconSrc}
          alt="Icon"
          width={64}
          height={64}
          className="w-16 lg:w-20"
          loading="lazy"
        />
        <span className="text-white text-lg sm:text-xl font-PolyRegular mt-4 text-center">
          {text}
        </span>
      </div>

      <p className="text-dark text-center text-xs sm:text-sm md:text-base font-PolyItalic italic mt-4 px-2">
        {desc}
      </p>
    </div>
  );
};

export default CardService;
