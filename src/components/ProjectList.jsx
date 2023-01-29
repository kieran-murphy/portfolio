import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col h-screen justify-center items-center"
    >
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
