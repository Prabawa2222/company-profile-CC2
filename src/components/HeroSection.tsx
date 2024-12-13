"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface HeroProps {
  src: string;
  height: number;
  width: number;
  content: string;
}

const HeroSection: React.FC<HeroProps> = ({ src, height, width, content }) => {
  const [fontSize, setfontSize] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newFontSize = Math.max(0.5, 1 - scrollPosition / 500);
    setfontSize(newFontSize);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fontSize]);
  return (
    <div className="flex flex-col items-center justify-center mt-32 overflow-hidden relative">
      <h1
        style={{
          transform: `scale(${fontSize})`,
          transition: "transform 0.2s ease",
        }}
        className="absolute tracking-tight w-96 font-ArchivoExtraBold text-4xl text-white text-center"
      >
        {content}
      </h1>
      <Image
        className="rounded-lg"
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
