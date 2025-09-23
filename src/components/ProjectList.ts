import { nanoid } from "nanoid";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: Array<string>;
  link: string;
  codeLink: string;
  background: string;
}

export const projects: Array<ProjectItem> = [
  {
    id: nanoid(),
    title: "Is It Raining? Weather App",
    description:
      "Is It Raining? is a project I created to showcase my ability to consume an API and parse through the data and display as an app. I use Axios to consume the API.",
    tech: ["React", "Styled-Components", "Axios", "Javascript"],
    link: "https://is-it-raining-app.herokuapp.com/",
    codeLink: "https://github.com/hodge-b/is_it_raining",
    background: "/images/weatherapp.png",
  },
  {
    id: nanoid(),
    title: "Biker's Haven E-commerce Website",
    description:
      "(Work in Progress) This is a e-commerce website I'm designing and developing. Currently, it does not have functionality but it is a good example of my front-end capabilities showcasing my design/development skills with it's visuals and responsiveness. It is linked with a Node.js back-end, which I'm currently working on the functionality and dynamics for a full-stack application.",
    tech: [
      "React",
      "Styled-Components",
      "Axios",
      "Node.js",
      "Express",
      "MySQL",
      "Javascript",
    ],
    link: "https://bikers-haven.herokuapp.com/",
    codeLink: "https://github.com/hodge-b/bikers-haven",
    background: "/images/bikershaven.png",
  },
  {
    id: nanoid(),
    title: "Trackify - Bug Tracker",
    description:
      "An in-house application that companies can use to keep track of issues and bugs within their software projects. Trackify is a showcase of my backend capabilities with PHP and MySQL.",
    tech: ["HTML", "Bootstrap", "PHP", "MySQL"],
    link: "https://trackify-bugtracker.herokuapp.com/login.php",
    codeLink: "https://github.com/hodge-b/trackify",
    background: "/images/trackify.png",
  },
  {
    id: nanoid(),
    title: "bradleyhodge.ca",
    description:
      "My main portfolio website built with the React framework, it also utilizes React's styled-components.",
    tech: ["React", "Styled-Components", "CSS Styling", "JavaScript"],
    link: "https://bradleyhodge.ca",
    codeLink: "https://github.com/hodge-b/bradleyhodge.ca",
    background: "/images/bradleyhodge.png",
  },
  {
    id: nanoid(),
    title: "Wordle in React",
    description:
      "This is a Wordle clone I have built using only the React framework.",
    tech: ["React", "CSS Styling", "JavaScript"],
    link: "https://hodge-b.github.io/wordle_clone_app/index.html",
    codeLink: "https://github.com/hodge-b/wordle_clone_app",
    background: "/images/wordle.png",
  },
];
