import React from "react";
import TEAM from "../data/DevelopersInfo.ts";

const TeamSection: React.FC = () => {
  const teamMembers = [...TEAM.DEVELOPERS, TEAM.SCRUMMASTER];

  return (
    <div className="font-[sans-serif] pb-16 lg:max-w-5xl sm:max-w-2xl max-sm:max-w-sm mx-auto mt-4 text-center">
      <h2 className="text-gray-800 text-3xl  font-extrabold border-b-2 border-[#2f855a] inline-block">
        Our Team
      </h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-md:justify-center mt-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative"
          >
            <div className="col-span-2 min-h-[190px]">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)]">
              <h4 className="text-gray-800 text-sm font-bold">{member.name}</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">United States</p>
              <p className="text-gray-800 mt-2 text-xs">{member.role}</p>

              <div className="mt-2">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-xs"
                >
                  GitHub
                </a>
                <br />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-xs"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
