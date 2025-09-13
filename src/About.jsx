import React from "react";
import { motion } from "framer-motion";
import { SiThealgorithms } from "react-icons/si";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaCode, FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
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
      className="py-18 md:py-10 xl:py-15"
    >
      <div className="container gap-8 items-center">
        <div className="flex flex-col gap-8 items-center justify-between md:flex-row">
          <div className="md:w-[65%] xl:w-[60%]">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-4 text-xl md:text-[17px]/7 text-slate-700">
              I am a dedicated Software Engineer experienced in designing,
              developing, and maintaining scalable software solutions. I write
              clean, efficient code and enjoy solving complex problems through
              practical engineering. I work with React, Node.js, databases and
              cloud deployment tools to deliver user-focused results.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://github.com/Jlbspyder"
                target="_blank"
                rel="noreferrer"
                className="border-gray-300 hover:bg-gray-100 cursor-pointer border-1 rounded-lg flex items-center p-1 gap-2"
              >
                <FaGithub />
                <p className="font-semibold">GitHub</p>
              </a>
              <a
                href="https://www.linkedin.com/in/debogbadebo-01476060/"
                target="_blank"
                rel="noreferrer"
                className="border-gray-300 border-1 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center p-1 gap-2"
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
            className="md:grid gap-4 overflow-hidden grid-cols-2 xl:grid-cols-2 w-[90%] mt-10"
          >
            <div className="md:w-[100%] mx-auto border-gray-200 border-1 p-2 shadow-sm rounded-md mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <FaCode className="icon text-green-500" />
                </div>
                <h5 className="font-semibold text-green-500">Clean Code</h5>
              </div>
              <p className="md:text-[15px]">
                Developing clean, maintainable, and scalable code by following
                best practices such as DRY, clear naming, version control, and
                the Atomic Design methodology for reusable components.
              </p>
            </div>
            <div className="md:w-[100%] mx-auto border-gray-200 border-1 p-2 shadow-sm rounded-md mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <BsFillLightningChargeFill className="icon text-blue-500" />
                </div>
                <h5 className="font-semibold text-blue-500">
                  Responsive & Fast
                </h5>
              </div>
              <p className="md:text-[15px]">
                Delivering solutions quickly and responsively, consistently
                meeting deadlines while adapting to changing requirements.
              </p>
            </div>
            <div className="md:w-[100%] mx-auto border-gray-200 border-1 p-2 shadow-sm rounded-md mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <FaGlobe className="icon text-purple-500" />
                </div>
                <h5 className="font-semibold text-purple-500">
                  Modern Solutions
                </h5>
              </div>
              <p className="md:text-[15px]">
                Developing and implementing modern, innovative solutions using
                up-to-date technologies and industry best practices.
              </p>
            </div>
            <div className="md:w-[100%] mx-auto border-gray-200 border-1 p-2 shadow-sm rounded-md mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <SiThealgorithms className="icon text-amber-500" />
                </div>
                <h5 className="font-semibold text-amber-500">
                  Data structures
                </h5>
              </div>
              <p className="md:text-[15px]">
                Proficient in applying algorithms and data structures to
                problem-solving.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
