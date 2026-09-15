import React from "react";
import { motion } from "framer-motion";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  FaReact,
  FaGitAlt,
  FaServer,
  FaNodeJs,
  FaCloud,
  FaDocker,
  FaPython
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiVercel,
  SiJest,
  SiCypress,
  SiNetlify,
  SiFigma,
  SiSupabase,
  SiFastapi,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandMysql } from "react-icons/tb";

const Skills = ({ dark }) => {
  const skillColumns = [
    {
      title: "Languages",
      type: [
        {
          stack: "JavaScript",
          icon: <IoLogoJavascript />,
        },
        {
          stack: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          stack: "Python",
          icon: <FaPython />,
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      type: [
        {
          stack: "React",
          icon: <FaReact />,
        },
        {
          stack: "React Native",
          icon: <TbBrandReactNative />,
        },
        {
          stack: "Next.js",
          icon: <SiNextdotjs />,
        },
        {
          stack: "Express",
          icon: <FaServer />,
        },
        {
          stack: "TailwindCSS",
          icon: <RiTailwindCssFill />,
        },
        {
          stack: "FastAPI",
          icon: <SiFastapi />,
        },
      ],
    },
    {
      title: "Databases",
      type: [
        {
          stack: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          stack: "Firebase",
          icon: <IoLogoFirebase />,
        },
        {
          stack: "Supabase",
          icon: <SiSupabase />,
        },
        {
          stack: "MySQL",
          icon: <TbBrandMysql />,
        },
        {
          stack: "PostgreSQL",
          icon: <SiPostgresql />,
        },
      ],
    },
    {
      title: "Tools & Platforms",
      type: [
        {
          stack: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          stack: "Git",
          icon: <FaGitAlt />,
        },
        {
          stack: "Jest",
          icon: <SiJest />,
        },
        {
          stack: "Cypress",
          icon: <SiCypress />,
        },
        {
          stack: "Figma",
          icon: <SiFigma />,
        },
        {
          stack: "Vercel",
          icon: <SiVercel />,
        },
        {
          stack: "Netlify",
          icon: <SiNetlify />,
        },
      ],
    },
    {
      title: "Familiar With",
      type: [
        {
          stack: "Docker",
          icon: <FaDocker />,
        },
        {
          stack: "AWS",
          icon: <FaCloud />,
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
      className={`py-16 transition duration-500 md:py-25 xl:py-15  ${
        dark ? "darkmode" : "bg-slate-50"
      }`}
    >
      <div className={`container ${dark ? "bg-[#0A0F1F] text-white" : ""} `}>
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <p
          className={`mt-4 text-center text-xl md:text-[17px]/7 ${
            dark ? "text-white" : "text-slate-700"
          }`}
        >
          I utilize a wide range of tools and frameworks to develop robust,
          scalable solutions.
        </p>
        <div className="mt-6 grid sm:grid-cols-4 md:grid-cols-5 gap-4">
          {skillColumns.map((column) => (
            <div
              key={column.title}
              className={`skill-box p-4 cursor-pointer rounded-md shadow-sm  ${
                dark ? "bg-[#262626]" : "bg-white"
              }`}
            >
              <h4
                className={`font-bold ${dark ? "text-white" : "text-[blue]"}`}
              >
                {column.title}
              </h4>
              <div className="mt-3 md:block flex items-center gap-4 flex-wrap text-slate-600 md:space-y-2">
                {column.type.map((skill, idx) => (
                  <div
                    className={`flex gap-1 md:gap-2 items-center ${
                      dark ? "text-gray-400" : ""
                    }`}
                    key={idx}
                  >
                    <div className="text-blue-500">{skill.icon}</div>
                    <p className="font-semibold">{skill.stack}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
