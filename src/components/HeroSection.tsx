"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface HeroProps {
  src: string;
  height: number;
  width: number;
}

const HeroSection: React.FC<HeroProps> = ({ src, height, width }) => {
  const [fontSize, setfontSize] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newFontSize = 1 + scrollPosition / 500;
    setfontSize(newFontSize);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center mt-24">
      <h1
        style={{
          transform: `scale(${fontSize})`,
          transition: "transform 0.2s ease",
        }}
        className="absolute tracking-tight font-ArchivoExtendedBold text-4xl text-white"
      >
        Cultivating the Future of Agriculture, Today.
      </h1>
      <Image
        className="flex rounded-lg"
        src={src}
        height={height}
        width={width}
        alt="hero-image"
        style={{ objectFit: "none", height: "500px" }}
      />
    </div>
  );
};

export default HeroSection;
