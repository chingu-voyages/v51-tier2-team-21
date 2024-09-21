interface Developer {
  name: string;
  github: string;
  linkedin: string;
}

const DEVELOPERS: Developer[] = [
  {
    name: 'Mudhar',
    github: 'https://github.com/muudar',
    linkedin: 'https://www.linkedin.com/in/mohammed-al-obaidi-41b1a8209/',
  },
  {
    name: 'Parykhan Jameel',
    github: 'https://github.com/parykhan-jameel',
    linkedin: 'https://linkedin.com/in/parykhan-jameel',
  },
  {
    name: 'Amin Alizadeh',
    github: 'https://github.com/m-aminalizadeh',
    linkedin: 'https://www.linkedin.com/in/m-amin-alizadeh/',
  },
  {
    name: 'Marwan Baz',
    github: 'https://github.com/marwanbz',
    linkedin: 'https://www.linkedin.com/in/marwanbz/',
  },
  {
    name: 'Nadiia Lashtun',
    github: 'https://github.com/NadiiaLashtun',
    linkedin: 'https://www.linkedin.com/in/lashtun/',
  },
];

const SCRUMMASTER: Developer = {
  name: 'Oluwadunsin Falore',
  github: 'https://github.com/Dunsin0802',
  linkedin: 'http://linkedin.com/in/oluwadunsin-falore',
};

const TEAM = { DEVELOPERS, SCRUMMASTER };

export default TEAM;
