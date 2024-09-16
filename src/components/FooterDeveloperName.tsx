import GitHub from "../img/github.svg";
import LinkedIn from "../img/linkedin.svg";

interface FooterDeveloperNameProps {
  name: string;
  github: string;
  linkedin: string;
}

const FooterDeveloperName: React.FC<FooterDeveloperNameProps> = ({
  name,
  github,
  linkedin,
}) => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex gap-1 items-center'>
        <a href={github}>
          <img
            src={GitHub}
            className='duration-500 hover:scale-110 hover:drop-shadow-[0_0_6px_rgb(255,119,7)]'
            alt='GitHub icon'
          />
        </a>
        <a href={linkedin}>
          <img
            src={LinkedIn}
            className='duration-500 hover:scale-110 hover:drop-shadow-[0_0_6px_rgb(255,119,7)]'
            alt='LinkedIn icon'
          />
        </a>
      </div>
      {name}
    </div>
  );
};

export default FooterDeveloperName;
