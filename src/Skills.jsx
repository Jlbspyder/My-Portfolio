import React from "react";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaGithub, FaNode, FaServer, FaCloud } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";

const Skills = () => {
  const skillColumns = [
    {
      title: "Languages",
      type: [
        {
          stack: "JavaScript",
          symbol: <IoLogoJavascript />,
        },
        {
          stack: "TypeScript",
          symbol: <SiTypescript />,
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      type: [
        {
          stack: "React",
          symbol: <FaReact />,
        },
        {
          stack: "React Native",
          symbol: <TbBrandReactNative />,
        },
        {
          stack: "Node.js",
          symbol: <FaNode />,
        },
        {
          stack: "Express",
          symbol: <FaServer />,
        },
        {
          stack: "TailwindCSS",
          symbol: <RiTailwindCssFill />,
        },
      ],
    },
    {
      title: "Databases",
      type: [
        {
          stack: "MongoDB",
          symbol: <SiMongodb />,
        },
        {
          stack: "Firebase",
          symbol: <IoLogoFirebase />,
        },
        {
          stack: "Mysql",
          symbol: <TbBrandMysql />,
        },
      ],
    },
    {
      title: "Tools & Platforms",
      type: [
        {
          stack: "Git",
          symbol: <FaGithub />,
        },
        {
          stack: "Docker",
          symbol: <FaServer />,
        },
        {
          stack: "AWS",
          symbol: <FaCloud />,
        },
        {
          stack: "Vercel",
          symbol: <IoLogoVercel />,
        },
      ],
    },
  ];
  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="skills"
      variants={slideInLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-16 md:py-25 xl:py-15  bg-slate-50"
    >
      <div className="container">
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <p className="mt-4 text-center text-xl md:text-[17px]/7 text-slate-700">
          I utilize a wide range of tools and frameworks to develop robust,
          scalable solutions.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skillColumns.map((column) => (
            <div
              key={column.title}
              className="skill-box p-4 bg-white cursor-pointer rounded-md shadow-sm "
            >
              <h4 className="font-bold text-[blue]">{column.title}</h4>
              <ul className="mt-3 md:block flex items-center gap-4 flex-wrap text-slate-600 md:space-y-2">
                {column.type.map((skill, idx) => (
                  <div className="flex gap-1 md:gap-2 items-center" key={idx}>
                    <div className="text-blue-500">{skill.symbol}</div>
                    <p className="font-semibold">{skill.stack}</p>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
