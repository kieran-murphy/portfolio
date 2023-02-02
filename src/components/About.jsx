import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col h-screen justify-center items-center text-center text-slate-200 text-2xl "
    >
      <div className="flex lg:w-5/6 mx-2">
        <h1>
          I am an aspiring web developer from the Gold Coast, Australia ☀️ I'm
          super passionate about learning new technologies and bringing awesome
          web applications to life. My main strengths lie in Python, JavaScript,
          TypeScript, ReactJS, Tailwind, REST APIs, Express.js and MongoDB. I
          have 2 degrees from Griffith University in Business and Information
          Technology
        </h1>
        <div className="hidden lg:block avatar">
          <div className="rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/68723269?v=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
