import React from "react";
import { motion } from "framer-motion";
import { SiThealgorithms } from "react-icons/si";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaCode, FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";

const About = ({ dark }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-18 transition duration-500 md:py-10 xl:py-15"
    >
      <div className={`container gap-8 items-center ${dark ? "darkmode" : ""}`}>
        <div className="flex flex-col gap-8 items-center justify-between md:flex-row">
          <div className="md:w-[65%] xl:w-[60%]">
            <h2 className={`text-2xl font-bold ${dark ? "text-white" : ""}`}>
              About Me
            </h2>
            <p
              className={`mt-4 text-xl md:text-[17px]/7  ${
                dark ? "text-white" : "text-slate-700"
              }`}
            >
              I am a dedicated Software Engineer with experience developing,
              and maintaining scalable software solutions. I specialize in building clean,
              efficient, and user focused applications while solving complex engineering
              problems through practical and maintainable solutions. My technical stack
              includes React, Node.js, databases, and cloud deployment technologies,
              enabling me to deliver modern fullstack applications with strong
              performance and usability.
            </p>
            <div
              className={`flex items-center gap-4 mt-4 ${
                dark ? "text-white" : ""
              }`}
            >
              <a
                href="https://github.com/Jlbspyder"
                target="_blank"
                rel="noreferrer"
                className={` cursor-pointer border-1 rounded-lg flex items-center p-1 gap-2 ${
                  dark
                    ? "border-gray-800 hover:bg-gray-900"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <FaGithub />
                <p className="font-semibold">GitHub</p>
              </a>
              <a
                href="https://www.linkedin.com/in/debo-gbadebo-01476060/"
                target="_blank"
                rel="noreferrer"
                className={` cursor-pointer border-1 rounded-lg flex items-center p-1 gap-2 ${
                  dark
                    ? "border-gray-800 hover:bg-gray-900"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <FaLinkedin />
                <p className="font-semibold">LinkedIn</p>
              </a>
            </div>
          </div>

          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={`md:grid gap-4 overflow-hidden grid-cols-2 xl:grid-cols-2 w-[90%] mt-10 ${
              dark ? "text-white" : ""
            }`}
          >
            <div
              className={`md:w-[100%] mx-auto border-1 p-2 shadow-sm rounded-md mb-8 ${
                dark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <FaCode className="icon text-green-500" />
                </div>
                <h5 className="font-bold text-green-500">Clean Code</h5>
              </div>
              <p className="md:text-[15px]">
                Developing clean, scalable, and maintainable software by applying
                engineering best practices, including DRY principles, clear code
                structure, version control, and Atomic Design for reusable
                component architecture.
              </p>
            </div>
            <div
              className={`md:w-[100%] mx-auto border-1 p-2 shadow-sm rounded-md mb-8 ${
                dark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <BsFillLightningChargeFill className="icon text-blue-500" />
                </div>
                <h5 className="font-bold text-blue-500">Responsive & Fast</h5>
              </div>
              <p className="md:text-[15px]">
                Delivering efficient, high quality solutions in fast paced
                environments while consistently meeting deadlines and adapting
                to evolving requirements.
              </p>
            </div>
            <div
              className={`md:w-[100%] mx-auto border-1 p-2 shadow-sm rounded-md mb-8 ${
                dark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <FaGlobe className="icon text-purple-500" />
                </div>
                <h5 className="font-bold text-purple-500">Modern Solutions</h5>
              </div>
              <p className="md:text-[15px]">
                Developing and implementing modern, innovative solutions using
                up-to-date technologies and industry best practices.
              </p>
            </div>
            <div
              className={`md:w-[100%] mx-auto border-1 p-2 shadow-sm rounded-md mb-8 ${
                dark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <SiThealgorithms className="icon text-amber-500" />
                </div>
                <h5 className="font-bold text-amber-500">Data structures</h5>
              </div>
              <p className="md:text-[15px]">
                Strong understanding of algorithms and data structures,
                with the ability to apply them effectively to problem solving
                and software development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
