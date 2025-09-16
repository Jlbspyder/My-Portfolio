import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { useInView } from "react-intersection-observer";
import { VscLiveShare } from "react-icons/vsc";
import projects from "./data";

const Projects = ({ dark }) => {
  // Controls for the animation
  const controls = useAnimation();

  // Hook for viewport detection
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of section is visible
    triggerOnce: false, // Animate again if user scrolls away & back
  });

  // Start animation when section enters the viewport
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -40 }); // reset when out of view
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      initial={{ opacity: 0, x: -40 }}
      className="py-18 transition duration-500"
    >
      <div className={`container ${dark ? "bg-[#121212]" : ""}`}>
        <h2
          className={`text-2xl font-bold text-center ${
            dark ? "text-white" : ""
          }`}
        >
          Projects
        </h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`rounded-lg skill-box border-1 shadow-sm ${
                dark
                  ? "bg-[#121212] border-gray-600"
                  : "bg-white border-gray-300"
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-img"
              />
              <div className="px-6 xl:px-3 mt-3">
                <h3
                  className={`font-semibold ${
                    dark ? "text-white text-2xl md:text-xl" : "text-[blue] text-2xl md:text-xl"
                  }`}
                >
                  {project.name}
                </h3>
                <p
                  className={`mt-2 h-[120px] xl:h-[150px] ${
                    dark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>
              <div className="mt-3 px-6 xl:px-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs xl:text-[10px] px-2 py-1 shadow-sm rounded-lg   ${
                      dark
                        ? "bg-slate-900 text-slate-400"
                        : "bg-blue-50 text-slate-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 px-6 xl:px-3 pb-4 flex justify-center xl:justify-between gap-3">
                {project.liveDemo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    className={`text-xs md:text-[12px] h-[30px] flex w-[100%] items-center justify-center font-semibold gap-2 bg-blue-50 px-4 py-1 rounded-lg shadow-sm cursor-pointer ${
                      dark
                        ? "bg-gray-800 text-gray-300 xl:text-[10px] hover:bg-slate-700 cursor-pointer"
                        : "hover:bg-blue-100 xl:text-[10px] text-gray-600"
                    }`}
                  >
                    <VscLiveShare />
                    Live Demo
                  </a>
                ) : (
                  <a
                    target="_blank"
                    className={`text-xs md:text-[12px] h-[30px] flex w-[100%] items-center justify-center font-semibold gap-2 bg-blue-50 px-4 py-1 rounded-lg shadow-sm cursor-pointer ${
                      dark
                        ? "bg-gray-800 text-gray-600 xl:text-[10px] cursor-text"
                        : "xl:text-[10px] text-gray-300 cursor-text"
                    }`}
                  >
                    <VscLiveShare />
                    Live Demo
                  </a>
                )}

                {project.privateCode ? (
                  <a
                    target="_blank"
                    className={`text-xs md:text-[12px] md:h-[30px] flex w-[100%] items-center justify-center  font-semibold gap-2  bg-blue-50 px-4 py-1 rounded-lg shadow-sm cursor-pointer ${
                      dark
                        ? "bg-gray-800 text-gray-600 xl:text-[10px] cursor-text"
                        : "xl:text-[10px] text-gray-300 cursor-text"
                    }`}
                  >
                    <LuGithub />
                    Code (Private)
                  </a>
                ) : (
                  <a
                    href={project.repo}
                    target="_blank"
                    className={`text-xs md:text-[12px] md:h-[30px] flex w-[100%] items-center justify-center  font-semibold gap-2  bg-blue-50 px-4 py-1 rounded-lg shadow-sm cursor-pointer ${
                      dark
                        ? "bg-gray-800 text-gray-300 xl:text-[10px] cursor-pointer hover:bg-slate-700"
                        : "hover:bg-blue-100 xl:text-[10px]"
                    }`}
                  >
                    <LuGithub />
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
