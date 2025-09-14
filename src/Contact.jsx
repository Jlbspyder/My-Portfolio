import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

const Contact = () => {
      const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contact"
      variants={fadeInUp}
      initial="hidden" 
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container text-center">
        <h2 className="text-2xl font-bold">Let's build something together</h2>
        <p className="mt-3 text-slate-600">
          I'm open to new opportunities and exciting projects — feel free to reach out.
        </p>

        <div className="mt-6 inline-flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:gbadebodebo24@gmail.com"
            className="px-6 py-3 flex items-center justify-center gap-5 bg-[rgba(242,242,250,1)] text-[blue] shadow-sm hover:bg-white rounded-md"
          >
            <IoIosMail className="size-5"/>
            Email Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 flex items-center justify-center gap-5 shadow-sm bg-[blue] rounded-md text-white hover:bg-white hover:text-[blue]"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
      <div className="pt-10 flex justify-center items-center space-x-8">
        <a href="https://github.com/Jlbspyder" target="_blank" className="px-4 py-2 hover:shadow-sm hover:bg-[rgba(242,242,250,1)] hover:rounded-md">
          <LuGithub className="text-2xl" />
        </a>
        <a href="mailto:gbadebodebo24@gmail.com" target="_blank" className="px-4 py-2 hover:shadow-sm hover:bg-[rgba(242,242,250,1)] hover:rounded-md">
          <IoIosMail className="text-2xl" />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
