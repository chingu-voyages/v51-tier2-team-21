import TEAM from "../data/DevelopersInfo.ts";
import FooterDeveloperName from "./FooterDeveloperName.tsx";

interface Developer {
  name: string;
  github: string;
  linkedin: string;
}

function Footer() {
  return (
    <div className='bg-[#B0BEC5] text-white py-3'>
      <h2 className='text-center mb-3'>Our team</h2>
      <div className='flex flex-wrap justify-evenly gap-4 mb-3 px-3'>
        <div>
          <h3 className='mb-1 text-[#4682B4]'>Developers:</h3>
          {TEAM.DEVELOPERS.map((dev: Developer) => (
            <FooterDeveloperName
              key={dev.name}
              name={dev.name}
              github={dev.github}
              linkedin={dev.linkedin}
            />
          ))}
        </div>
        <div>
          <h3 className='mb-1 text-[#4682B4]'>Scrum Master:</h3>
          <FooterDeveloperName
            key={TEAM.SCRUMMASTER.name}
            name={TEAM.SCRUMMASTER.name}
            github={TEAM.SCRUMMASTER.github}
            linkedin={TEAM.SCRUMMASTER.linkedin}
          />
        </div>
      </div>

      <div className='border-t-[1px] border-white text-center pt-3'>
        Our team's
        <a
          className='mx-1 duration-500 hover:text-[#004D40]'
          href='https://github.com/chingu-voyages/v51-tier2-team-21'
        >
          GitHub repository
        </a>
        &copy; 2024
      </div>
    </div>
  );
}

export default Footer;
