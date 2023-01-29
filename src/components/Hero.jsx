import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex h-screen text-slate-200 justify-center items-center">
      <div className="flex text-center h-90% font-semibold text-6xl font-mono">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`Hello World, my name is Kieran.`)
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </div>
      <div className="flex flex-col absolute bottom-10 left-10 text-xl">
        <motion.div className="my-1" whileHover={{ translateX: 10 }}>
          <a href="#about">About</a>
        </motion.div>
        <motion.div
          className="my-1 scroll-smooth"
          whileHover={{ translateX: 10 }}
        >
          <a href="#projects">Projects</a>
        </motion.div>
        <motion.div className="my-1" whileHover={{ translateX: 10 }}>
          <a href="#about">Contact</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
