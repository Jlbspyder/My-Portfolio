import React from "react";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { VscLiveShare } from "react-icons/vsc";
import projects from "./data";

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="projects"
      variants={slideInLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-18"
    >
      <div className="container">
        <h2 className="text-2xl font-bold text-center">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-lg skill-box border-gray-300 border-1 bg-white shadow-sm"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-img"
              />
              <div className="px-6 mt-3">
                <h3 className="text-lg font-semibold text-[blue]">
                  {project.name}
                </h3>
                <p className="mt-2 text-slate-600">{project.description}</p>
              </div>
              <div className="mt-3 px-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 shadow-sm rounded-lg bg-blue-50 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 px-6 pb-4 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  className={`text-sm flex items-center font-semibold gap-2 bg-blue-50 px-4 py-1 rounded-lg shadow-sm cursor-pointer ${
                    project.name === "Mobile App"
                      ? "bg-gray-100 text-gray-300 cursor-text"
                      : "hover:bg-blue-100"
                  }`}
                >
                  <VscLiveShare />
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className={`text-sm flex items-center font-semibold gap-2  bg-blue-50 px-4 py-1 rounded-lg shadow-sm cursor-pointer ${
                    project.name === "Mobile App"
                      ? "bg-gray-100 text-gray-300 cursor-text"
                      : "hover:bg-blue-100"
                  }`}
                >
                  <LuGithub />
                  {project.name === "Mobile App" ? "Code (Private)" : "Code"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
