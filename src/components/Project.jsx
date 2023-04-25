import React from "react";
import { motion } from "framer-motion";

const Project = ({ props }) => {
  return (
    <motion.div
      className="z-10 card lg:card-side lg:w-1/2 bg-[#082a3a] shadow-xl my-4 text-slate-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <figure className="lg:w-1/2 md:w-1/2">
        <img src={props.image} alt={props.title} className="w-full h-full" />
      </figure>
      <div className="card-body lg:w-1/2 md:w-1/2">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="flex flex-row flex-wrap ">
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
                  <div className="truncate badge text-purple-400 bg-black m-2">
                    {tech}
                  </div>
                );
              case "JavaScript":
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
              case "Prisma":
                return (
                  <div className="badge text-blue-800 bg-white m-2">{tech}</div>
                );
              case "React":
                return (
                  <div className="badge text-slate-200 badge-primary m-2">
                    {tech}
                  </div>
                );
              case "React Router":
                return (
                  <div className="truncate badge text-slate-200 badge-primary m-2">
                    {tech}
                  </div>
                );
              case "TailwindCSS":
                return (
                  <div className="badge text-slate-200 bg-blue-600 m-2">
                    {tech}
                  </div>
                );
              case "TypeScript":
                return (
                  <div className="badge badge-info text-slate-200 m-2">
                    {tech}
                  </div>
                );
              default:
                return <div className="badge badge-warning m-2">null</div>;
            }
          })}
        </div>
        <div className="flex flex-row place-content-between mt-4">
          <a href={props.codeLink}>
            <div className="card-actions justify-end">
              <button className="btn bg-blue-500 text-slate-200">Code</button>
            </div>
          </a>
          {props.siteLink.length > 0 ? (
            <div className="card-actions justify-end">
              <a href={props.siteLink}>
                <button className="btn bg-green-600 text-slate-200">
                  Visit
                </button>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
