"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="fixed top-0 z-50 w-full bg-primary">
      <nav
        className={`p-5 lg:py-5 lg:px-10 z-50 lg:z-0 flex flex-row items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white drop-shadow-md"
            : "lg:bg-transparent bg-primary"
        }`}
      >
        <div>
          <Link href={"/"}>
            <Image
              src={"./svg/logo_dice.svg"}
              alt="logo-dice"
              width={200}
              height={200}
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-row px-5 font-PolyRegular gap-8 text-black text-2xl">
          <Link href={"/about"}>About Us</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/teams"}>Teams</Link>
        </div>
        <div className="lg:hidden flex flex-col justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-3xl"
          >
            {isOpen ? (
              <Image
                src="/svg/icon_close.svg"
                alt="Close menu"
                width={24}
                height={24}
                loading="lazy"
              />
            ) : (
              <Image
                src="/svg/icon_hamburger.svg"
                alt="Open menu"
                width={24}
                height={24}
                loading="lazy"
              />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`absolute top-20 left-0 w-full drop-shadow-md text-2xl text-black bg-white flex flex-col items-center space-y-4 py-5 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href={"/about"}>About Us</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/teams"}>Teams</Link>
      </div>
    </div>
  );
};

export default Navbar;
