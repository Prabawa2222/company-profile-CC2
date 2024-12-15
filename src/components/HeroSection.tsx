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
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newScale = Math.max(0.5, 1 - scrollPosition / 500);
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textSizeClass =
    content.length > 10 ? "lg:text-4xl text-3xl" : "lg:text-8xl text-5xl";

  return (
    <div className="relative flex flex-col items-center justify-center mt-24 transition-transform">
      <div className="absolute">
        <h1
          className={`tracking-tight w-full font-ArchivoExtraBold ${textSizeClass} text-white text-center`}
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.2s ease",
          }}
        >
          {content}
        </h1>
      </div>
      <Image
        className="rounded-lg lg:w-[920px] lg:h-[450px] w-[420px]"
        src={src}
        height={height}
        width={width}
        alt="hero-image"
        style={{
          objectFit: "cover",
        }}
        priority
      />
    </div>
  );
};

export default HeroSection;
