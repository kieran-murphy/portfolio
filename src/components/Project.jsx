import React from "react";
import { motion } from "framer-motion";

const Project = ({ props }) => {
  return (
    <motion.div
      className="card lg:card-side lg:w-1/2 bg-[#082a3a] shadow-xl my-4 text-slate-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <figure>
        <img
          src="https://static.wixstatic.com/media/2f9f4e_9c1fffc643084747a1ac779421d10616~mv2.jpg/v1/fill/w_640,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f9f4e_9c1fffc643084747a1ac779421d10616~mv2.jpg"
          alt="Album"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="flex flex-row flex-wrap">
          {props.technologies.map((tech) => {
            switch (tech) {
              case "DaisyUI":
                return <div className="badge bg-rose-400 m-2">{tech}</div>;
              case "Express.js":
                return (
                  <div className="badge text-slate-900 bg-white m-2">
                    {tech}
                  </div>
                );
              case "Framer Motion":
                return (
                  <div className="badge text-purple-400 bg-black m-2">
                    {tech}
                  </div>
                );
              case "Javascript":
                return <div className="badge badge-warning m-2">{tech}</div>;
              case "Laravel":
                return (
                  <div className="badge text-red-500 bg-white m-2">{tech}</div>
                );
              case "MongoDB":
                return (
                  <div className="badge text-slate-900 bg-green-400 m-2">
                    {tech}
                  </div>
                );
              case "Next.js":
                return (
                  <div className="badge text-slate-200 bg-black m-2">
                    {tech}
                  </div>
                );
              case "PHP":
                return (
                  <div className="badge text-slate-900 bg-purple-400 m-2">
                    {tech}
                  </div>
                );
              case "React":
                return (
                  <div className="badge text-slate-200 badge-primary m-2">
                    {tech}
                  </div>
                );
              case "React Router":
                return (
                  <div className="badge text-slate-200 badge-primary m-2">
                    {tech}
                  </div>
                );
              case "TailwindCSS":
                return (
                  <div className="badge text-slate-200 bg-blue-600 m-2">
                    {tech}
                  </div>
                );
              case "Typescript":
                return (
                  <div className="badge badge-info text-slate-200 m-2">
                    {tech}
                  </div>
                );
              default:
                return <div className="badge badge-warning m-2">null</div>;
            }
          })}

          {/* <div className="badge badge-primary m-2">nodeJS</div>
          <div className="badge badge-secondary m-2">Tailwind</div>
          <div className="badge badge-accent m-2">React</div>
          <div className="badge badge-warning m-2">Javascript</div>
          <div className="badge badge-accent m-2">React</div>
          <div className="badge badge-warning m-2">Javascript</div> */}
        </div>
        <div className="flex flex-row place-content-between mt-4">
          <div className="card-actions justify-end">
            <button className="btn bg-blue-500 text-slate-200">Code</button>
          </div>
          {props.siteLink.length > 0 ? (
            <div className="card-actions justify-end">
              <button className="btn bg-green-600 text-slate-200">Visit</button>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
