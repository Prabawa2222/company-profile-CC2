import Image from "next/image";
import React from "react";

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

interface TeamCardProps {
  teams: Team;
  loading: Boolean;
}

const CardTeams: React.FC<TeamCardProps> = ({ teams, loading }) => {
  if (loading) {
    return (
      <div className="skeleton flex flex-row items-center p-5 animate-pulse">
        <div className="lg:w-24 w-16 lg:h-24 h-16 rounded-full bg-gray-300 m-2" />
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-gray-300 rounded w-32" />
          <div className="h-4 bg-gray-400 rounded w-20" />
          <div className="h-3 bg-gray-200 rounded w-28" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center p-5">
      <Image
        src={teams.picture.medium}
        alt={`${teams.name.first} ${teams.name.last}`}
        width={96}
        height={96}
        className="lg:w-24 w-16 lg:h-24 h-16 rounded-full m-2"
        loading="lazy"
      />
      <div className="flex flex-col">
        <span className="lg:text-xl text-lg font-InterRegular text-dark tracking-tight">
          {`${teams.name.first} ${teams.name.last}`}
        </span>
        <span className="text-white lg:text-xl text-sm font-PolyRegular tracking-wider bg-dark w-fit py-1 px-3 rounded-lg">
          CEO
        </span>
        <span className="lg:text-sm text-[10px] text-gray-500">
          {teams.email}
        </span>
      </div>
    </div>
  );
};

export default CardTeams;
