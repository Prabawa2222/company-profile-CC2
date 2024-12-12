"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`p-5 w-full flex flex-row items-center justify-between ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } z-10 fixed transition-all duration-300`}
    >
      <div>
        <Image
          src={"./svg/logo_dice.svg"}
          alt="logo-dice"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-row px-5 gap-8 font-ArchivoExtendedBold text-black text-xl">
        <Link href={"/About"}>About Us</Link>
        <Link href={"/About"}>Service</Link>
        <Link href={"/About"}>Team</Link>
      </div>
    </div>
  );
};

export default Navbar;
