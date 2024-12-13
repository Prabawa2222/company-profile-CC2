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

const CardTeams = ({ teams }) => {
  return (
    <div className="flex flex-row items-center p-5">
      <img
        src={teams.picture.medium}
        alt={teams.name.first}
        className="w-24 h-24 rounded-full m-2"
      />
      <div className="flex flex-col">
        <span className="text-xl font-InterRegular text-dark tracking-tight">{`${teams.name.first} ${teams.name.last}`}</span>
        <span className="text-sm text-gray-500">{teams.email}</span>
      </div>
    </div>
  );
};

export default CardTeams;
