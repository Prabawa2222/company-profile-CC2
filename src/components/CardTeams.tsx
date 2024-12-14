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
}

const CardTeams: React.FC<TeamCardProps> = ({ teams }) => {
  return (
    <div className="flex flex-row items-center p-5 ">
      <img
        src={teams.picture.medium}
        alt={teams.name.first}
        className="lg:w-24 w-16 lg:h-24 h-16 rounded-full m-2"
      />
      <div className="flex flex-col ">
        <span className="lg:text-xl text-lg font-InterRegular text-dark tracking-tight">{`${teams.name.first} ${teams.name.last}`}</span>
        <span className="text-white lg:text-xl text-sm font-PolyRegular tracking-wider bg-dark w-fit py-1 px-3 rounded-lg">
          CEO
        </span>
        <span className="lg:text-sm text-xs text-gray-500">{teams.email}</span>
      </div>
    </div>
  );
};

export default CardTeams;
