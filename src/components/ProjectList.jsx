import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center">
      <Project
        props={{
          title: "Crypto Cards React",
          desc: "something",
          image: "",
          technologies: [
            "Javascript",
            "React",
            "React Router",
            "Framer Motion",
          ],
          codeLink: "",
          siteLink: "https://kieran-murphy.github.io/crypto-cards-react/",
        }}
      />
      <Project
        props={{
          title: "Colorle",
          desc: "something",
          image: "",
          technologies: ["Javascript", "React", "TailwindCSS"],
          codeLink: "",
          siteLink: "https://kieran-murphy.github.io/colorle/",
        }}
      />
      <Project
        props={{
          title: "Cliffhangr",
          desc: "something",
          image: "",
          technologies: [
            "Javascript",
            "Express.js",
            "React",
            "React Router",
            "TailwindCSS",
            "DaisyUI",
            "MongoDB",
          ],
          codeLink: "",
          siteLink: "",
        }}
      />
      <Project
        props={{
          title: "Piplupdex",
          desc: "something",
          image: "",
          technologies: ["Typescript", "React", "React Router", "TailwindCSS"],
          codeLink: "",
          siteLink: "",
        }}
      />
      <Project
        props={{
          title: "2803ICT Assignment",
          desc: "something",
          image: "",
          technologies: ["PHP", "Laravel"],
          codeLink: "",
          siteLink: "",
        }}
      />
    </div>
  );
};

export default Projects;
