import { useEffect, useState } from "react";
import { gsap } from "gsap";
import image from "../../images/hi.png";
import "../style.css";
import { Material } from "three";

export default function ProjectsTabs() {
  const [active, setActive] = useState(0);
  const [pointing, setPointing] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".mockup-window",
      {
        duration: 0,
        scale: 0,
        translateY: 300,
      },
      {
        duration: 1,
        scale: 1,
        ease: "power4.out",
        translateY: 0,
      }
    );

    // Add mousemove event listener
    const skewContainer = document.querySelector(".mockup-window");
    skewContainer.addEventListener("mousemove", skewAnimation);

    return () => {
      // Remove mousemove event listener on cleanup
      skewContainer.removeEventListener("mousemove", skewAnimation);
    };
  }, []);

  // Skew animation function
  function skewAnimation(event) {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateY = -(clientY - centerY) * 0.015;
    const rotateX = (clientX - centerX) * 0.008;
    gsap.to(".mockup-window", {
      duration: 0.8,
      ease: "power4.out",
      rotateY: rotateX,
      rotateX: rotateY,
      // translateY: rotateY,
      // translateX: rotateX,
    });
  }

  return (
    <div
      className="mockup-window bg-base-300 self-center w-4/5 h-[80vh] transform  scale-0 border border-base-content border-opacity-25 opacity-90 overflow-hidden relative shadow-black shadow-lg"
      style={{ transformStyle: "preserve-3d", transform: "perspective(600px)" }}
    >
      <span className="absolute top-0 left-0 translate-x-[45%] translate-y-1/2 w-full font-bold font-serif text-2xl">
        My Works
      </span>
      <Tabs active={active} setActive={setActive} setPointing={setPointing} />
      <Content
        active={active}
        setActive={setActive}
        pointing={pointing}
        setPointing={setPointing}
      />
    </div>
  );
}

function Content({ active, setActive, pointing, setPointing }) {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <div className="flex flex-wrap overflow-y-scroll h-[70vh] items-center scrollbar-hide w-full justify-between  bg-base-200">
      <div className="flex flex-col w-2/5">
        {tabs[active].content.map((data, index) => {
          if (isHovered === index || pointing === index) {
            return (
              <a
                className={"flex items-center h-[15vh] opacity-100 font-bold"}
                key={data.title + index}
                onClick={() => {
                  setPointing(index);
                }}
                onMouseEnter={() => {
                  setIsHovered(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(-1);
                }}
              >
                <div className="flex align-middle items-center m-2 text-xl border-2 h-8 w-8 shrink-0 text-center justify-center">
                  {index + 1}
                </div>
                <div className="flex justify-start flex-col m-2">
                  <div className="text-xl whitespace-nowrap">{data.title}</div>
                  <div className="text-lg">{data.time}</div>
                </div>
                <div className="text-6xl">⏎</div>
              </a>
            );
          }
          return (
            <a
              className={"flex items-center h-[15%] opacity-60 font-bold"}
              key={data.title + index}
              onClick={() => {
                setPointing(index);
              }}
              onMouseEnter={() => {
                setIsHovered(index);
              }}
              onMouseLeave={() => {
                setIsHovered(-1);
              }}
            >
              <div className="flex align-middle items-center m-2 text-xl border-2 h-8 w-8 shrink-0 text-center justify-center">
                {index + 1}
              </div>
              <div className="flex justify-start flex-col m-2">
                <div className="text-xl whitespace-nowrap">{data.title}</div>
                <div className="text-lg">{data.time}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="detail flex-col flex w-3/5 h-full  p-4 overflow-y-scroll overflow-x-hidden font-bold">
        {/* <a className="flex self-center h-1/3 overflow-hidden">
                <img src={image} className="object-contain link self-center"></img>
            </a> */}
        <div className="text-xl breadcrumbs underline ">
          <ul>
            <li>
              <a>{tabs[active].name}</a>
            </li>
            <li>
              <a>{tabs[active].content[pointing].title}</a>
            </li>
          </ul>
        </div>
        <div className="flex w-full h-3/5 text-center justify-center p-4">
          <div className="w-2/3">
            {tabs[active].content[pointing].description}
          </div>
        </div>
        <div className="flex w-full justify-center p-3">
          {tabs[active].content[pointing].repo && (
            <button
              className="btn btn-outline m-2 "
              onClick={() => {
                window.open(tabs[active].content[pointing].repo);
              }}
            >
              repo
            </button>
          )}
          {tabs[active].content[pointing].deploy && (
            <button
              className="btn btn-outline m-2 "
              onClick={() => {
                window.open(tabs[active].content[pointing].deploy);
              }}
            >
              deploy
            </button>
          )}
        </div>
        <div className="flex w-full justify-center flex-wrap">
          {tabs[active].content[pointing].tools.map((item) => {
            return <div className="badge badge-outline m-2">{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

function Tabs({ active, setActive, setPointing }) {
  return (
    <div className="tabs font-bold ">
      {tabs.map((tab, index) => {
        if (active == index) {
          return (
            <a
              key={`${tab.name}`}
              className="tab tab-bordered tab-active text-xl tab-lifted"
            >
              {tab.name}
            </a>
          );
        }
        return (
          <a
            key={`${tab.name}`}
            className="tab tab-bordered text-xl tab-lifted"
            onClick={() => {
              setPointing(0);
              setActive(index);
            }}
          >
            {tab.name}
          </a>
        );
      })}
    </div>
  );
}


const tabs = [
  {
    name: "<Projects/>",
    content: [
      {
        title: "Event Master",
        time: "2023",
        repo: "https://github.com/Xin401/DBMS_project",
        description:
          "A Coursework done with Vite React+Fastapi+Postgres, providing a platform for event management, meeting scheduling, and group chat. Like a combined version of Google Calendar+When2meet+Slack. The project was focus on the backend and database design, providing a awesome postgres database schema design, using ER diagram, normalization, following general rules.",
        tools: ["React", "Fastapi", "Postgres", "Vite", "Docker"],
      },
      {
        title: "Jellycat Scrape App",
        time: "2023",
        repo: "https://github.com/YouMingYeh/jellycat-scrape-app",
        description:
          "A web scraping app that scrapes jellycat.com and related websites and provides a list of products with their name, price, and image. Compare and calculate the price and cost of the product in different real-time currencies. This app aims to help purchasing agents who purchase products for others. Also, it provides a awesome user interface for the user to scrape the real-time data and manage them.",
        tools: ["Nextjs", "Sellinium", "Flask"],
      },

      {
        title: "A Cat's Adventure",
        time: "2023",
        repo: "https://github.com/YouMingYeh/A-Cat-s-Adventure.git",
        deploy: "https://yehyouming.itch.io/the-cats-adventure",
        description: "A 2D platformer game, built with Unity, C#.",
        tools: ["Unity", "C#"],
      },

      {
        title: "NTU 2D Top-Down Game",
        time: "2023",
        repo: "Not provided",
        deploy: "https://112-1-game-programming.github.io/Game-Build/",
        description: "A 2D top-down game, built with Unity, C#.",
        tools: ["Unity", "C#", "Github Pages"],
      },

      {
        title: "BUJIO",
        time: "2022",
        repo: "https://github.com/YouMingYeh/BUJIOAPP",
        deploy: "https://bujio.onrender.com/",
        description:
          "A MERN Full-Stack community software, providing a matching platform for group activities with friends and strangers",
        tools: [
          "React",
          "Redux",
          "Express",
          "jsonwebtoken",
          "bcrypt",
          "MongoDB",
        ],
      },
      {
        title: "PDAO 2023",
        time: "2023",
        repo: "https://github.com/pdao-system/pdao-website",
        deploy: "https://pdaowebsite.gatsbyjs.io/",
        description:
          "PDAO 2023 promotional website and scoreboard, practicing parallax scrolling UI",
        tools: ["React", "Astro", "Node.js"],
      },
    ],
  },
  {
    name: "<Apps & Tools/>",
    content: [
      {
        title: "Task Manager",
        time: "2023",
        repo: "https://github.com/YouMingYeh/TaskAPI",
        description:
          "This project uses Github Issue API and Github search API, as well as Github Authentication, to assist users and teams in managing repo issues.",
        tools: [
          "React",
          "GitHub Issues API",
          "GitHub Search API",
          "Express",
          "OAuth",
          "styled-components",
          "RESTful API",
        ],
      },
      {
        title: "Text Base Math Calculator",
        time: "2023",
        repo: "https://github.com/YouMingYeh/text-base-math-calculator",
        description:
          "This is a math calculator that supports evaluating math expression, developed using tools of Electron and electron-react-boilerplate.",
        tools: ["React", "Electron", "Math.js", "Tailwind.css", "Typescript"],
      },
      {
        title: "Linker",
        time: "2023",
        repo: "https://github.com/YouMingYeh/Linker",
        deploy: "https://linker-eight.vercel.app/",
        description:
          "This a page for linking to my often used page, created with vite-ssr-plugin which support server-side-rendering",
        tools: [
          "Vite",
          "vite-ssr-plugin",
          "Three.js",
          "Tailwind.css",
          "Typescript",
        ],
      },
      {
        title: "dynamic-css-import",
        time: "2023",
        repo: "https://github.com/YouMingYeh/dynamic-css-import",
        description:
          "A npm package that support dynamically importing css file by modifying the document head directly",
        tools: ["npm package", "css-loader"],
      },
      {
        title: "Personal Website 1.0",
        time: "2023",
        repo: "https://github.com/YouMingYeh/Portfolio",
        deploy: "https://yehyouming.web.app/",
        description: "My personal website 1.0",
        tools: ["React", "UI/UX"],
      },
      {
        title: "Clean Architecture good practice",
        time: "2023",
        repo: "https://github.com/YouMingYeh/Clean-Architecture---Birthday-Greeting-Kata.git",
        description:
          "A good practice of clean architecture, using the birthday greeting kata as an example",
        tools: ["Clean Architecture", "Fastapi"],
      },
    ],
  },
  {
    name: "<Course Works/>",
    content: [
      {
        title: "AI article detection",
        time: "2023",
        repo: "https://github.com/YouMingYeh/IRTM-Final-Project-AI-Article-Detection.git",
        description:
          "A project that uses machine learning to classify the article into different categories. Information Retrieval and Text Mining Final Project. Reach 0.99 accuracy on the best model.",
        tools: ["Machine Learning", "NLP", "Deep Learning"],
      },
      {
        title: "real time chat room",
        time: "2022",
        repo: "https://github.com/YouMingYeh/myChatRoom",
        description: "A real time chat room built with web-socket",
        tools: ["Websocket", "MongoDB"],
      },
      {
        title: "Wordle",
        time: "2022",
        repo: "https://github.com/YouMingYeh/Wordle",
        description: "Wordle game !",
        tools: ["game"],
      },
      {
        title: "Mine Sweeper",
        time: "2022",
        repo: "https://github.com/YouMingYeh/Mine-Sweeper",
        deploy: "closet-9d7aa.web.app/",
        description: "Mine Sweeper game !",
        tools: ["game"],
      },
      {
        title: "wp1111",
        time: "2022",
        repo: "https://github.com/YouMingYeh/wp1111",
        description: "All the other works are here!",
        tools: ["web programming course"],
      },
    ],
  },
];
