interface Developer {
  name: string;
  github: string;
  linkedin: string;
  role: string;
  image: string;
}

const DEVELOPERS: Developer[] = [
  {
    name: 'Mudhar',
    github: 'https://github.com/muudar',
    linkedin: 'https://www.linkedin.com/in/mohammed-al-obaidi-41b1a8209/',
     role: "Software Engineer",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: 'Parykhan Jameel',
    github: 'https://github.com/parykhan-jameel',
    linkedin: 'https://linkedin.com/in/parykhan-jameel',
     role: "Software Engineer",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: 'Amin Alizadeh',
    github: 'https://github.com/m-aminalizadeh',
    linkedin: 'https://www.linkedin.com/in/m-amin-alizadeh/',
     role: "Software Engineer",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: 'Marwan Baz',
    github: 'https://github.com/marwanbz',
    linkedin: 'https://www.linkedin.com/in/marwanbz/',
     role: "Software Engineer",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: 'Nadiia Lashtun',
    github: 'https://github.com/NadiiaLashtun',
    linkedin: 'https://www.linkedin.com/in/lashtun/',
     role: "Software Engineer",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];

const SCRUMMASTER: Developer = {
  name: 'Oluwadunsin Falore',
  github: 'https://github.com/Dunsin0802',
  linkedin: 'http://linkedin.com/in/oluwadunsin-falore',
  role: "Scrum Master",
  image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
};

const TEAM = { DEVELOPERS, SCRUMMASTER };

export default TEAM;
