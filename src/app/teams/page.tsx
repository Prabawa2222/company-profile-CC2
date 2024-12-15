"use client";

import CardTeams from "@/components/CardTeams";
import HeroSection from "@/components/HeroSection";
import React, { useEffect, useState } from "react";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        const users = data.results;
        setTeams(users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className=" bg-white flex flex-col">
      <div className="flex flex-col items-center">
        <div className="bg-primary w-full h-[450px]">
          <HeroSection
            src={"/img/hero_dice.jpg"}
            width={1000}
            height={200}
            content={"Teams"}
          />
        </div>
        <section className="flex flex-col items-center lg:w-full lg:p-16 p-8 lg:mt-32 mt-0 w-0.9">
          <h1 className="font-PolyRegular tracking-tight text-black text-5xl py-10">
            Here’s Our Team
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 items-center space-y-0 gap-5">
            {teams.map((item, index) => (
              <CardTeams key={index} teams={item} loading={loading} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamsPage;
