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
      className={`py-5 px-10 w-full flex flex-row items-center justify-between ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } z-10 fixed transition-all duration-300`}
    >
      <div>
        <Link href={"/"}>
          <Image
            src={"./svg/logo_dice.svg"}
            alt="logo-dice"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="flex flex-row px-5 font-PolyRegular bold gap-8 text-black text-xl">
        <Link href={"/about"}>About Us</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/teams"}>Teams</Link>
      </div>
    </div>
  );
};

export default Navbar;
