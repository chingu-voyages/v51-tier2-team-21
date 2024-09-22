interface Developer {
  name: string;
  github: string;
  linkedin: string;
  role: string;
  image: string;
}

const DEVELOPERS: Developer[] = [
  {
    name: "Mudhar",
    github: "https://github.com/muudar",
    linkedin: "https://www.linkedin.com/in/mohammed-al-obaidi-41b1a8209/",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-1.webp",
  },
  {
    name: "Parykhan Jameel",
    github: "https://github.com/parykhan-jameel",
    linkedin: "https://linkedin.com/in/parykhan-jameel",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-1.webp",
  },
  {
    name: "Amin Alizadeh",
    github: "https://github.com/m-aminalizadeh",
    linkedin: "https://www.linkedin.com/in/m-amin-alizadeh/",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-1.webp",
  },
  {
    name: "Marwan Baz",
    github: "https://github.com/marwanbz",
    linkedin: "https://www.linkedin.com/in/marwanbz/",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-1.webp",
  },
  {
    name: "Nadiia Lashtun",
    github: "https://github.com/NadiiaLashtun",
    linkedin: "https://www.linkedin.com/in/lashtun/",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-1.webp",
  },
];

const SCRUMMASTER: Developer = {
  name: "Oluwadunsin Falore",
  github: "https://github.com/Dunsin0802",
  linkedin: "http://linkedin.com/in/oluwadunsin-falore",
  role: "Scrum Master",
  image: "https://readymadeui.com/team-6.webp",
};

const TEAM = { DEVELOPERS, SCRUMMASTER };

export default TEAM;
