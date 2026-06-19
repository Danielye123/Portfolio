import {
  FilmpireFrontPage,
  FilmpireHF,
  FilmpireShow,
  HF2,
  HFHipnode,
  HipnodeFrontPage,
  JavaScript,
  TypeScript,
  challenge,
  check,
  css,
  filmpireComputer,
  filmpirePhone,
  git,
  github,
  hipnodeComputer,
  hipnodeLink,
  hipnodePhone,
  html,
  mongodb,
  morrentComputer,
  morrentLink,
  morrentPhone,
  next,
  problem,
  react,
  tailwind,
  awwwardsComputer,
  awwwardsPhone,
  awwwardsBefore,
  awwwardsAfter,
  awwwardsVault,
  awwwardsRoadmap,
} from "@/assets";

export const projectData = [
  {
    /* Filmpire Data */
  },
  {
    id: "filmpire",
    hero: {
      name: "FilmpireHero",
      sectionClass: "w-full bg-[#F3F8FF] dark:bg-[#192333]",
      title1: "Filmpire ",
      title2: "- An AI-Powered Movie Application",
      demoLink: "https://filmpiredanielye.netlify.app/#/",
      sourceCodeLink: "https://github.com/Danielye123/Filmpire_Daniel",
      computerImage: filmpireComputer,
      phoneImage: filmpirePhone,
      projectType: "WEB DEV PROJECT",
      backgroundColor: "#ffbe62",
    },
    role: {
      role: "Software Engineer",
      startDate: "July - 2022",
      endDate: "August - 2022",
    },
    filmpireSkills: [
      {
        name: "JavaScript",
        imgURL: JavaScript,
      },
      {
        name: "React",
        imgURL: react,
      },
      {
        name: "HTML",
        imgURL: html,
      },
      {
        name: "CSS",
        imgURL: css,
      },
      {
        name: "Github",
        imgURL: github,
      },
      {
        name: "Git",
        imgURL: git,
      },
    ],
    description: {
      part1: `Filmpire, an AI-Powered Movie review application that was developed using React.
        The app boasts features such as integration with the IMDB API, Search, Categories, Genres etc.`,
      part2: `I developed this movie review application with the help of JavaSript Mastery, who taught me a lot absolute
        creating websites such as this one.`,
      part3: `This application was the start of my journey into web development and greatly bolstered my interest in it thanks to the uniqueness of the application 
        and the potential to create similar designs like this one from scratch.`,
    },
    problem: {
      statement: `In the realm of entertainment, a gap existed - a need for a seamless
        platform that marries the latest cinematic releases with the convenience
        of modern technology. Enter Filmpire: a groundbreaking movie
        application that aimed to bridge this gap by seamlessly delivering
        real-time movie data and captivating trailers to users, enhancing their
        cinematic experience. The problem was clear: how to create a dynamic,
        user-friendly interface that effortlessly integrates with an external
        API to provide up-to-the-minute movie information and trailers.`,
      image: FilmpireFrontPage,
    },
    figma: {
      image: FilmpireHF,
    },
    challenges: {
      challenges: [
        {
          text1: "First introduction to an advanced website",
          icon: challenge,
        },
        {
          text2: "Introduction to the TMDB API and APIs in general",
          icon: challenge,
        },
        {
          text3:
            "Introduction to many different technologies and features such as Alan AI, React, Material UI, Redux Toolkit",
          icon: challenge,
        },
      ],
      learnings: [
        {
          text1:
            "How to build a website from scratch using react and integrate an API",
          icon: check,
        },
        {
          text2:
            "User Authentication/Login features, Search Bar, Navigation etc.",
          icon: check,
        },
        {
          text3: "Light/Dark mode and other features.",
          icon: check,
        },
        {
          text4: "The introduction of linters such as ESLINT",
          icon: check,
        },
      ],
    },
    otherProjects: [
      {
        id: "morrent",
        name: "Morrent",
        description: "A car rental web application made with React",
        link: "/morrent",
        image: morrentLink,
      },
      {
        id: "hipnode",
        name: "Hipnode",
        description: "A social media application made with React and Next.js",
        link: "/hipnode",
        image: hipnodeLink,
      },
    ],
  },

  {
    /* Hipnode Data */
  },

  {
    id: "hipnode",
    hero: {
      name: "HipnodeHero",
      sectionClass: "w-full bg-[#F3F8FF] dark:bg-[#192333]",
      title1: "Hipnode ",
      title2: "- A Social Media Application",
      demoLink: "https://hip-node-jet.vercel.app",
      sourceCodeLink: "https://github.com/Danielye123/HipNode",
      computerImage: hipnodeComputer,
      phoneImage: hipnodePhone,
      projectType: "WEB DEV PROJECT",
      backgroundColor: "#ffbe62",
    },
    role: {
      role: "Software Engineer",
      startDate: "January - 2023",
      endDate: "March - 2023",
    },
    hipnodeSkills: [
      {
        name: "TypeScript",
        imgURL: TypeScript,
      },
      {
        name: "JavaScript",
        imgURL: JavaScript,
      },
      {
        name: "React",
        imgURL: react,
      },
      {
        name: "Next.js",
        imgURL: next,
      },
      {
        name: "HTML",
        imgURL: html,
      },
      {
        name: "CSS",
        imgURL: css,
      },
      {
        name: "TailwindCSS",
        imgURL: tailwind,
      },
      {
        name: "Github",
        imgURL: github,
      },
      {
        name: "Git",
        imgURL: git,
      },
      {
        name: "MongoDB",
        imgURL: mongodb,
      },
    ],
    description: {
      part1: `Introducing Hipnode: A Revolutionary Social Media Experience Hipnode is
        not just another social media application - it&apos;s a transformative platform
        that takes your online interactions to a whole new level.`,
      part2: `Crafted with innovation and user experience in mind, Hipnode offers a
        dynamic and engaging environment for you to connect, share, and explore.
        Imagine a space where your creativity knows no bounds. With Hipnode, you
        have the power to express yourself through captivating visuals,
        thought-provoking posts, and meaningful connections. Our intuitive
        interface makes it effortless to navigate and discover the content that
        resonates with you. Embrace a new era of social networking where your
        interests, passions, and connections come to life. Whether you&apos;re an
        artist, an entrepreneur, a tech enthusiast, or a globetrotter, Hipnode
        welcomes you to a vibrant community where diversity is celebrated and
        conversations are limitless.`,
      part3: `Join the movement and embark on a journey of self-expression, inspiration,
        and genuine connections. With Hipnode, your social media experience will
        never be the same again. Explore, engage, and elevate - welcome to the
        future of social networking.`,
    },
    problem: {
      statement: `The digital landscape lacked a unified platform that seamlessly
        amalgamates the robust features of a social media network with the
        modern advancements of Next.js and Tailwind. SocialConnect, a dynamic
        social media application, emerged as the solution. The challenge was
        set: to create a comprehensive, full-stack social media experience
        encompassing user authentication, real-time interactions, and a
        feature-rich CRUD functionality.`,
      image: HipnodeFrontPage,
    },
    figma: {
      image: HFHipnode,
    },
    challenges: {
      challenges: [
        {
          text1:
            "Gained extensive knowledge on frontend and backend and connecting them together.",
          icon: challenge,
        },
        {
          text2: `Difficulty of communication between this new group of people and this
            large extensive project.`,
          icon: challenge,
        },
        {
          text3: `However, we collaborated effectively to overcome these obstacles and
            ultimately delivered a high-quality product within the given timeline.`,
          icon: challenge,
        },
      ],
      learnings: [
        {
          text1: `How to build a website from scratch using react and integrate an API`,
          icon: check,
        },
        {
          text2: `User Authentication/Login features, Search Bar, Navigation etc.`,
          icon: check,
        },
        {
          text3: `Light/Dark mode and other features.`,
          icon: check,
        },
        {
          text4: `The introduction of linters such as ESLINT`,
          icon: check,
        },
      ],
    },
    otherProjects: [
      {
        id: "filmpire",
        name: "Filmpire",
        description: "A movie web application made with React",
        link: "/filmpire",
        image: FilmpireShow,
      },
      {
        id: "morrent",
        name: "Morrent",
        description: "A car rental web application made with React",
        link: "/morrent",
        image: morrentLink,
      },
    ],
  },

  {
    /* Morrent Data */
  },

  {
    id: "morrent",
    hero: {
      name: "MorrentHero",
      sectionClass: "w-full bg-[#F3F8FF] dark:bg-[#192333]",
      title1: "Morrent ",
      title2: "- A Car Rental Website",
      demoLink: "https://web3-car-rent.vercel.app/car-rent",
      sourceCodeLink: "https://github.com/Danielye123/CarRent",
      computerImage: morrentComputer,
      phoneImage: morrentPhone,
      projectType: "WEB DEV PROJECT",
      backgroundColor: "#ffbe62",
    },
    role: {
      role: "Software Engineer",
      startDate: "October - 2022",
      endDate: "November - 2022",
    },
    morrentSkills: [
      {
        name: "JavaScript",
        imgURL: JavaScript,
      },
      {
        name: "React.js",
        imgURL: react,
      },
      {
        name: "Next.js",
        imgURL: next,
      },
      {
        name: "HTML",
        imgURL: html,
      },
      {
        name: "CSS",
        imgURL: css,
      },
      {
        name: "TailwindCSS",
        imgURL: tailwind,
      },
      {
        name: "Github",
        imgURL: github,
      },
      {
        name: "Git",
        imgURL: git,
      },
      {
        name: "MongoDB",
        imgURL: mongodb,
      },
    ],
    description: {
      part1: `Morent, a cutting-edge car rental application that was developed using the
        MERN stack. The app boasts a dynamic homepage that showcases featured
        vehicles, along with convenient pickup & drop-off location options & a
        comprehensive list of available cars. `,
      part2: `My team and I also developed the car
        listing page which offers a search bar and various filtering options for
        users to find the perfect vehicle. Additionally, it has a car details page
        which provides users with detailed information along with suggestions for
        other recommended vehicles.`,
      part3: `Car owners are also able to list their cars
        for rent through our Add Car page, while users can easily track their
        rented and rented-out cars through their profile page. Overall, we&apos;ve
        created an intuitive and user-friendly MVP version of the platform that
        will make renting a car a breeze.`,
    },
    problem: {
      statement: `One of the main problems that people face when looking to rent a car is
        the hassle of finding a reliable and user-friendly platform to search
        for and book rental cars. In addition, car owners who want to rent out
        their vehicles often struggle to find a suitable platform to list their
        cars and manage their rentals.`,
      image: problem,
    },
    figma: {
      image: HF2,
    },
    challenges: {
      challenges: [
        {
          text1: "First time creating and integrating the backend/database.",
          icon: challenge,
        },
        {
          text2: `First time using Nextjs so it was a struggle to learn all of its features and implementing a backend without express.`,
          icon: challenge,
        },
        {
          text3: `First time using TailwindCSS`,
          icon: challenge,
        },
      ],
      learnings: [
        {
          text1: `Successfully learned the differences between NextJs backend and React/normal express backend.`,
          icon: check,
        },
        {
          text2: `Sharpened my backend skills, specifically in building a database and quering the database.`,
          icon: check,
        },
        {
          text3: `Sharpened my skills with TailwindCSS`,
          icon: check,
        },
        {
          text4: `Acquired proficiency in NextJS and implemented various features
            utilizing industry-standard best practices.`,
          icon: check,
        },
      ],
    },
    otherProjects: [
      {
        id: "filmpire",
        name: "Filmpire",
        description: "A movie web application made with React",
        link: "/filmpire",
        image: FilmpireShow,
      },
      {
        id: "hipnode",
        name: "Hipnode",
        description: "A social media application made with React and Next.js",
        link: "/hipnode",
        image: hipnodeLink,
      },
    ],
  },

  {
    id: "awwwards",
    hero: {
      name: "AwwwardsHero",
      sectionClass: "w-full bg-[#F3F8FF] dark:bg-[#192333]",
      title1: "Zentry ",
      title2: "- An Animated GSAP Landing Page",
      demoLink: "https://animationproject-pi.vercel.app",
      sourceCodeLink: "https://github.com/Danielye123/AdvancedAnime",
      computerImage: awwwardsComputer,
      phoneImage: awwwardsPhone,
      projectType: "FRONT-END / GSAP",
      backgroundColor: "#ffbe62",
    },
    role: {
      role: "Front-End Developer",
      startDate: "May - 2026",
      endDate: "June - 2026",
    },
    awwwardsSkills: [
      {
        name: "JavaScript",
        imgURL: JavaScript,
      },
      {
        name: "React",
        imgURL: react,
      },
      {
        name: "TailwindCSS",
        imgURL: tailwind,
      },
      {
        name: "HTML",
        imgURL: html,
      },
      {
        name: "CSS",
        imgURL: css,
      },
      {
        name: "Github",
        imgURL: github,
      },
      {
        name: "Git",
        imgURL: git,
      },
    ],
    description: {
      part1: `An animated, scroll-driven landing page built with React, Vite, Tailwind CSS and GSAP.
        It features a video hero carousel, scroll-pinned reveals, a bento feature grid and a custom interactive roadmap.`,
      part2: `It began as a follow-along of a Zentry-style GSAP tutorial. I used that as a foundation and then made it my own, adding six brand-new sections and several custom interactions while keeping the original animation system intact.`,
      part3: `This project pushed my comfort with GSAP ScrollTrigger (pinning, scrubbing, snapping) and taught me how to
        extend an existing codebase cleanly rather than building everything from scratch.`,
    },
    beforeAfter: {
      title: "From tutorial to my own",
      description: `This started as a follow-along of a Zentry-style GSAP tutorial. I used it as a foundation and made it my own, adding six new sections and several custom interactions.
        Watch the original tutorial build and my version side
        by side below, then scroll through some of the new sections I added.`,
      before: awwwardsBefore,
      after: awwwardsAfter,
      // Side-by-side autoplay players (the screenshots above are used as posters):
      beforeVideo: "/videos/tutorial.mp4",
      afterVideo: "/videos/finishedproduct.mp4",
      beforeLabel: "Tutorial",
      afterLabel: "My",
      beforeLink: "https://animationproject-5ro1djdzx-danielye123s-projects.vercel.app",
      afterLink: "https://animationproject-pi.vercel.app",
      newSectionsIntro: `The tutorial baseline was only Hero → About → Features → Story → Contact. On top of that I
        built six new sections, listed in the order they appear on the page:`,
      newSections: [
        {
          title: "Marquee",
          file: "Marquee.jsx",
          description: `A full-width violet band of looping words (Play · Connect · Earn · Explore · Compete · Evolve) separated by diamonds, scrolling infinitely via GSAP, a rhythmic transition strip between the Hero/About and Features.`,
        },
        {
          title: `Stats — "By the Numbers"`,
          file: "Stats.jsx",
          description: `Four headline metrics (120M+ players, 50+ worlds, 99% uptime, 24/7 support) that count up from
            zero when scrolled into view, driven by a GSAP ScrollTrigger tween on a counter object.`,
        },
        {
          title: `Gallery — "The Vault"`,
          file: "Gallery.jsx",
          image: awwwardsVault,
          description: `A bento-style mixed-media grid with three tile types: mouse-tracking 3D tilt cards, a
            click-to-cycle video tile that rotates through the four hero videos, and a glowing "relic" tile with a
            floating animation. This section used all the unused assets from the original tutorial documents.`,
        },
        {
          title: `Timeline — "The Roadmap"`,
          file: "Timeline.jsx",
          image: awwwardsRoadmap,
          description: `An interactive horizontal-scroll roadmap that pins the viewport and turns
            vertical scroll into horizontal travel through four phases (Genesis → Expansion → Convergence → Ascension),
            with snap-to-phase scrolling, a progress bar that fills and lights up phase markers, and a direction-aware
            Skip button.`,
        },
        {
          title: `Testimonials — "What Players Are Saying"`,
          file: "Testimonials.jsx",
          description: `An infinite auto-scrolling marquee of quote cards (name + role) that pauses on hover, reusing
            the same GSAP loop pattern as the Marquee section.`,
        },
        {
          title: `FAQ — "Frequently Asked"`,
          file: "Faq.jsx",
          description: `An accordion with smooth grid-rows height transitions and a rotating + icon, opening one item
            at a time.`,
        },
      ],
      newSectionsNote: `These aren't random additions, they reuse the project's own primitives (the AnimatedTitle, the GSAP marquee loop, ScrollTrigger, the bento tilt), so they read as native to the original design rather than bolted on.`,
    },
    challenges: {
      challenges: [
        {
          text1:
            "Extending an unfamiliar GSAP codebase without breaking its existing animations.",
          icon: challenge,
        },
        {
          text2:
            "Building a horizontal scroll-pinned roadmap with a synced progress bar and phase snapping.",
          icon: challenge,
        },
        {
          text3:
            "Resolving a conflict between CSS smooth-scroll and GSAP ScrollTrigger snapping.",
          icon: challenge,
        },
      ],
      learnings: [
        {
          text1:
            "Added six new sections: Marquee, Stats, Gallery, Roadmap, Testimonials and FAQ.",
          icon: check,
        },
        {
          text2:
            "Built an interactive roadmap with scroll-snapping and a direction-aware skip button.",
          icon: check,
        },
        {
          text3:
            "Wired up real navigation and fixed bugs left over from the tutorial.",
          icon: check,
        },
        {
          text4:
            "Learned to reuse a project's existing patterns so new work looks native to it.",
          icon: check,
        },
      ],
    },
    otherProjects: [
      {
        id: "filmpire",
        name: "Filmpire",
        description: "A movie web application made with React",
        link: "/filmpire",
        image: FilmpireShow,
      },
      {
        id: "hipnode",
        name: "Hipnode",
        description: "A social media application made with React and Next.js",
        link: "/hipnode",
        image: hipnodeLink,
      },
    ],
  },
];
