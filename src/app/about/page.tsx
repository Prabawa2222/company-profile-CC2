"use client";

import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Team {
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
}

const AboutPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        const users = data.results;

        setTeams(users);
        console.log(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-primary w-full h-[300px] sm:h-[450px]">
          <HeroSection
            src={"/img/hero_dice.jpg"}
            width={1000}
            height={200}
            content={"About Us"}
          />
        </div>
        <section className="flex flex-col items-center w-2/3 py-16 mt-32">
          <h1 className="font-PolyRegular tracking-tight text-black text-5xl py-10">
            Company History
          </h1>
          <span className="text-dark text-center font-inter italic">
            "Founded in 2010, Dice has grown from a local seed supplier to an
            internationally recognized leader in agricultural innovation. Our
            journey is fueled by a commitment to empowering farmers and
            preserving the planet."
          </span>
        </section>
        <section>
          <Carousel />
        </section>
        <div className="h-[5px] w-full bg-gray-100 my-8" />
        <section className="py-8 flex flex-col items-center">
          <div className="flex flex-col items-center py-10">
            <h1 className="font-PolyRegular tracking-tight text-black text-5xl p-2">
              Our Mission & Vision
            </h1>
          </div>
          <div className="text-dark justify-between text-center font-InterRegular border-2 rounded-lg p-5">
            <h1 className="font-PolyRegular italic tracking-tight text-black text-xl p-2">
              "To empower farmers with tools, knowledge, and products that
              foster sustainable agriculture."
            </h1>
            <span className="font-PolyRegular italic text-4xl">*</span>
            <h1 className="font-PolyRegular italic tracking-tight text-black text-xl p-2">
              "A world where every field flourishes with innovation, and every
              community thrives with sustainable farming."
            </h1>
          </div>
        </section>
        <div className="h-[5px] w-full bg-gray-100 my-8" />
        <section className="py-8 flex flex-col items-center">
          <div className="flex flex-col justify-center items-center py-10">
            <h1 className="font-PolyRegular tracking-tight text-black text-5xl p-2">
              Team Introduction
            </h1>
            <div className="grid grid-cols-3 justify-items-center mx-4 py-8">
              {teams.map((user, index) => (
                <div key={index} className="flex flex-row items-center p-5">
                  <img
                    src={user.picture.medium}
                    alt={user.name.first}
                    className="w-24 h-24 rounded-full m-2"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-InterRegular text-dark tracking-tight">{`${user.name.first} ${user.name.last}`}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn my-10 text-white font-PolyRegular text-xl hover:bg-gray-800">
              <Link href={"/teams"}>View All Teams</Link>
            </button>
          </div>
        </section>
        <div className="h-[5px] w-full bg-gray-100 my-8" />
        <section className="py-8 h-96 flex flex-col items-center">
          <div className="flex flex-col items-center py-10">
            <h1 className="font-PolyRegular tracking-tight text-black text-5xl p-8">
              Company Culture
            </h1>
            <span className="font-PolyRegular w-0.6 italic tracking-tight text-black text-xl p-2">
              At Dice, we believe in working together to solve the world’s most
              pressing agricultural challenges, one harvest at a time.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
