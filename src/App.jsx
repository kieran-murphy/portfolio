import Hero from "./components/Hero";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen min-w-screen z-50">
      {/* <div className="min-h-screen min-w-screen bg-gray-900"> */}
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      <Hero />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
