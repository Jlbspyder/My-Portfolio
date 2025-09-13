import {useState} from "react";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-15 bg-[rgba(242,242,250,1)]"
    >
      <div className="container text-center">
        <p className="text-5xl font-semibold md:text-7xl md:w-[95%] mx-auto">
          👋 Hi, I’m{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gbadebo Debo
          </span>
        </p>
        <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
          Software Engineer — building scalable, user-centered applications. I
          work across the stack, shipping high-quality, maintainable software.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-3 bg-[blue] text-white rounded-md shadow-sm hover:bg-white hover:text-[blue]"
          >
            View My Work
          </a>
          <a
            href="mailto:gbadebodebo24@gmail.com"
            className="inline-flex gap-4 items-center justify-center px-5 py-3 shadow-sm rounded-md text-[blue] hover:bg-slate-50 hover:border-0"
          >
            <IoIosMail className="mt-1 size-5" />
            Contact Me
          </a>
        </div>
      </div>
      <div className="mt-10 py-10">
        {imgError ? (
          <div className="my-pix relative">
            <h2 className="absolute top-[50%] translate-y-[-60%] left-[50%] transform translate-x-[-50%] text-7xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">GD</h2>
          </div>
        ) : (
          <img
            src="/me.jpg"
            alt="my-picture"
            onError={() => setImgError(true)}
            className="my-pix"
          />
        )}
      </div>
    </motion.section>
  );
};

export default Hero;
