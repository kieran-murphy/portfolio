import React from "react";

const Project = () => {
  return (
    <div className="card lg:card-side bg-gray-800 shadow-xl my-4 text-slate-200">
      <figure>
        <img
          src="https://static.wixstatic.com/media/2f9f4e_9c1fffc643084747a1ac779421d10616~mv2.jpg/v1/fill/w_640,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f9f4e_9c1fffc643084747a1ac779421d10616~mv2.jpg"
          alt="Album"
          className="w-full"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="badge">neutral</div>
        <div className="badge badge-primary">primary</div>
        <div className="badge badge-secondary">secondary</div>
        <div className="badge badge-accent">accent</div>
        <div className="badge badge-ghost">ghost</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
