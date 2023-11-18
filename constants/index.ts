import {
  JavaScript,
  css,
  express,
  exDark,
  git,
  github,
  html,
  mongodb,
  motion,
  next,
  nodejs,
  react,
  tailwind,
  TypeScript,
  ICON1,
  ICON2,
  ICON3,
  ICON4,
  Filmpire,
  Hipnode,
  Morrent,
  ex,
  frontend,
  backend,
  opt,
  analytics,
  gnar,
  Malphite,
  richard,
  FrontEndIcon,
  BackEndIcon,
  WebOptIcon,
  AnalyticsIcon,
} from "@/assets";

import Analytics from "../components/svgComponents/Analytics";
import Frontend from "../components/svgComponents/frontend";
import Backend from "../components/svgComponents/backend";
import Opt from "../components/svgComponents/Opt";
import Cursor from "../components/svgComponents/Cursor";

export const navLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/",
    label: "Case Studies",
  },
  {
    route: "/",
    label: "Contact",
  },
];

export const skills = [
  {
    imgURL: JavaScript,
  },
  {
    imgURL: react,
  },
  {
    imgURL: next,
  },
  {
    imgURL: TypeScript,
  },
  {
    imgURL: html,
  },
  {
    imgURL: css,
  },
  {
    imgURL: tailwind,
  },
  {
    imgURL: github,
  },
  {
    imgURL: git,
  },
  {
    imgURL: mongodb,
  },
  {
    imgURL: nodejs,
  },
  {
    imgURL: ex,
  },
  {
    imgURL: motion,
  },
];

export const morrentSkills = [
  {
    imgURL: JavaScript,
  },
  {
    imgURL: react,
  },
  {
    imgURL: next,
  },
  {
    imgURL: html,
  },
  {
    imgURL: css,
  },
  {
    imgURL: tailwind,
  },
  {
    imgURL: github,
  },
  {
    imgURL: git,
  },
  {
    imgURL: mongodb,
  },
];

export const hipnodeSkills = [
  {
    imgURL: TypeScript,
  },
  {
    imgURL: JavaScript,
  },
  {
    imgURL: react,
  },
  {
    imgURL: next,
  },
  {
    imgURL: html,
  },
  {
    imgURL: css,
  },
  {
    imgURL: tailwind,
  },
  {
    imgURL: github,
  },
  {
    imgURL: git,
  },
  {
    imgURL: mongodb,
  },
];

export const filmpireSkills = [
  {
    imgURL: JavaScript,
  },
  {
    imgURL: react,
  },
  {
    imgURL: html,
  },
  {
    imgURL: css,
  },
  {
    imgURL: github,
  },
  {
    imgURL: git,
  },
];

export const services = [
  {
    // Component: Analytics,
    Component: Analytics,
    title: "Analytics & SEO",
    description:
      "Implement tracking & analytics tools to monitor website performance & improve SEO.",
  },
  {
    // Component: Frontend,
    Component: Cursor,
    title: "Front-End Dev",
    description:
      "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
  },
  {
    // Component: Backend,
    Component: Backend,
    title: "Back-End Dev",
    description:
      "Manages server-side logic, databases, and ensures seamless data flow in web applications.",
  },
  {
    // Component: Opt,
    Component: Opt,
    title: "Web Optimization",
    description:
      "Web optimization focuses on improving website performance for a smoother user experience",
  },
];

// export const services = [
//   {
//     // Component: Analytics,
//     imgURL: AnalyticsIcon,
//     title: "Analytics & SEO",
//     description:
//       "Implement tracking & analytics tools to monitor website performance & improve SEO.",
//     width: 21, 
//     height: 20, 
//   },
//   {
//     // Component: Frontend,
//     imgURL: FrontEndIcon,
//     title: "Front-End Dev",
//     description:
//       "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
//           width: 24, 
//     height: 20, 
//   },
//   {
//     // Component: Backend,
//     imgURL: BackEndIcon,
//     title: "Back-End Dev",
//     description:
//       "Manages server-side logic, databases, and ensures seamless data flow in web applications.",
//       width: 24, 
//       height: 20, 
//   },
//   {
//     // Component: Opt,
//     imgURL: WebOptIcon,
//     title: "Web Optimization",
//     description:
//       "Web optimization focuses on improving website performance for a smoother user experience",
//       width: 30, 
//       height: 24, 
//   },
// ];

export const featuredProjects = [
  {
    imgUrl: Hipnode,
    title: "Hipnode - Social Media Application",
    tech1: "TailwindCSS",
    tech2: "NextJs",
  },
  {
    imgUrl: Morrent,
    title: "Morrent - A Car Rental Application",
    tech: "React",
    tech2: "NextJs",
  },
  {
    imgUrl: Filmpire,
    title: "Filmpire - A Movie Review Application",
    tech: "React",
    tech2: "NextJs",
  },
];

export const recommendationsData = [
  {
    image: richard,
    text: "Daniel is a disciplined and problem-solving software developer focused on best practices and staying current with the latest technologies. Working alongside Daniel has been a pleasure as he is a team player and communicates efficiently. Under pressure, he has shown competence and dedication to the goal of delivering projects in a timely manner. I highly recommended Daniel to any organization looking for a passionate developer.",
    author: "Richard Gabriel",
    position: "React Software Engineer",
  },
  {
    image: gnar,
    text: "Daniel is a disciplined and problem-solving software developer focused on best practices and staying current with the latest technologies. ",
    author: "Random guy",
    position: "React Software Engineer",
  },
  {
    image: Malphite,
    text: "Daniel is a disciplined and problem-solving software developer. ",
    author: "2nd Random guy",
    position: "React Software Engineer",
  },
];

export const projects = [
  {
    title: "Hipnode",
    description: "Social Media Application",
    tech: ["ReactJS", "Next.js", "Node.js", "MongoDB"],
    link: "/hipnode",
    image: Hipnode,
    bgColor: "bg-[#416CEA]",
    isReversed: false, 
  },
  {
    title: "Filmpire",
    description: "A Movie Review Application",
    tech: ["ReactJS", "Next.js", "Node.js", "MongoDB"],
    link: "/filmpire",
    image: Filmpire,
    bgColor: "bg-[#0BAB7C]",
    isReversed: true, 
  },
  {
    title: "Morrent",
    description: "A Car Rental Application",
    tech: ["ReactJS", "Next.js", "Node.js", "MongoDB"],
    link: "/morrent",
    image: Morrent,
    bgColor: "bg-[#DB202C]",
    isReversed: false, 
  },
]