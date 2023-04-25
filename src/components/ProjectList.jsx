import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center">
      <Project
        props={{
          title: "Crypto Cards React",
          desc: "My first React application based on the coinGecko API and using Framer Motion for animations",
          image:
            "https://github.com/kieran-murphy/portfolio/blob/master/src/components/img/crypto.png?raw=true",
          technologies: [
            "JavaScript",
            "React",
            "React Router",
            "Framer Motion",
          ],
          codeLink: "https://github.com/kieran-murphy/crypto-cards-react",
          siteLink: "https://kieran-murphy.github.io/crypto-cards-react/",
        }}
      />
      <Project
        props={{
          title: "Colorle",
          desc: "A simple game where the user guesses the color swatch based on RGB values",
          image:
            "https://github.com/kieran-murphy/portfolio/blob/master/src/components/img/colorle.png?raw=true",
          technologies: ["JavaScript", "React", "TailwindCSS"],
          codeLink: "https://github.com/kieran-murphy/colorle",
          siteLink: "https://kieran-murphy.github.io/colorle/",
        }}
      />
      <Project
        props={{
          title: "Fragrance Finder",
          desc: "A full stack NextJS app for creating and viewing beautiful fragrances",
          image:
            "https://github.com/kieran-murphy/portfolio/blob/master/src/components/img/fragrancefinder.png?raw=true",
          technologies: [
            "JavaScript",
            "React",
            "Next.js",
            "TailwindCSS",
            "Prisma",
            "MongoDB",
          ],
          codeLink: "https://github.com/kieran-murphy/FragranceFinder",
          siteLink: "https://fragrance-finder.vercel.app/",
        }}
      />
      <Project
        props={{
          title: "Cliffhangr",
          desc: "A full stack MERN stack project where users can write reviews for their favourite TV shows [WIP]",
          image:
            "https://github.com/kieran-murphy/portfolio/blob/master/src/components/img/cliffhangr.png?raw=true",
          technologies: [
            "JavaScript",
            "Express.js",
            "React",
            "React Router",
            "TailwindCSS",
            "DaisyUI",
            "MongoDB",
          ],
          codeLink: "https://github.com/kieran-murphy/cliffhangr",
          siteLink: "",
        }}
      />
      <Project
        props={{
          title: "Piplupdex",
          desc: "A simple Pokedex application made in TailwindCSS and using Typescript React",
          image:
            "https://github.com/kieran-murphy/portfolio/blob/master/src/components/img/piplupdex.png?raw=true",
          technologies: ["TypeScript", "React", "React Router", "TailwindCSS"],
          codeLink: "https://github.com/kieran-murphy/piplupdex",
          siteLink: "https://kieran-murphy.github.io/piplupdex/",
        }}
      />
      <Project
        props={{
          title: "2703ICT Assignment",
          desc: "A PHP Laravel CRUD application for a class in my final year of uni",
          image:
            "https://github.com/kieran-murphy/portfolio/blob/master/src/components/img/2703ict.png?raw=true",
          technologies: ["PHP", "Laravel"],
          codeLink: "https://github.com/kieran-murphy/2703ICTAssignment2",
          siteLink: "",
        }}
      />
    </div>
  );
};

export default Projects;
