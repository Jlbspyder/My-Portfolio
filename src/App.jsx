import { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function App() {
  const [active, setActive] = useState("about");
  const [darkMode, setDarkMode] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // how much of section must be visible
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const scrollTop = () => {
      // simple and reliable
      window.scrollTo(0, 0);
    };

    // try immediately
    scrollTop();

    // also ensure it runs after any browser restoration (pageshow covers bfcache/back-forward/reload)
    window.addEventListener("pageshow", scrollTop);

    // small fallback for browsers that might restore after scripts:
    requestAnimationFrame(scrollTop);

    return () => window.removeEventListener("pageshow", scrollTop);
  }, []);

  useEffect(() => {
    if (openMenu) {
      // lock scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // restore scroll
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // cleanup (runs on unmount)
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [openMenu]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("nav");
    const headerOffset = navbar ? navbar.offsetHeight : 0;

    const elementPosition =
      section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    setOpenMenu(false);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <div
      className={`min-h-screen relative flex flex-col ${
        darkMode ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      <header
        className={`md:hidden backdrop-blur fixed top-0 right-0 left-0 z-30 shadow-sm ${
          darkMode ? "bg-[#262626]" : "bg-white/80"
        }`}
      >
        <div
          className={`container flex items-center justify-between h-[60px] py-4 ${
            darkMode ? "header-dark" : ""
          }`}
        >
          <div className={`font-bold text-xl ${darkMode ? "text-white" : ""}`}>Debo</div>
          {!openMenu ? (
            <GiHamburgerMenu
              onClick={() => setOpenMenu(true)}
              className={`text-[30px] md:hidden ${darkMode ? "text-white" : ""}`}
            />
          ) : (
            <RiCloseLargeFill
              onClick={() => setOpenMenu(false)}
              className={`text-[30px] md:hidden ${darkMode ? "text-white" : ""}`}
            />
          )}
          {
            <div
              className={`flex flex-col w-full menu fixed top-15 left-0 right-0 h-[100vh] ${
                openMenu ? " active" : ""
              } ${darkMode ? "bg-[#213547]" : "bg-white"}`}
            >
              {navItems.map((item) => (
                <nav
                  key={item.id}
                  className="space-x-4 text-sm p-3 text-slate-600"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-semibold hover:text-slate-900 text-lg md:text-[15px] px-3 md:px-0 py-2  
                      ${ active === item.id
                        ? "bg-blue-50 block rounded-sm w-full md:bg-white md:rounded-none md:border-b-2 text-[blue]"
                        : ""
                    } 
                    ${darkMode && active !== item.id ? "text-slate-400" : darkMode && active === item.id ? "text-white bg-slate-600" : ""} `}
                  >
                    {item.label}
                  </a>
                </nav>
              ))}
              <div className="mt-2 pl-6">
                {darkMode ? (
                  <MdSunny
                    onClick={() => setDarkMode(false)}
                    className="text-lg cursor-pointer"
                    color="yellow"
                  />
                ) : (
                  <FaMoon
                    onClick={() => setDarkMode(true)}
                    className="text-lg cursor-pointer"
                    color="black"
                  />
                )}
              </div>
            </div>
          }
        </div>
      </header>
      <header
        className={`hidden md:block backdrop-blur fixed top-0 right-0 left-0 z-30 shadow-sm ${
          darkMode ? "bg-[#262626]" : "bg-white/80"
        }`}
      >
        <div className="flex items-center justify-between h-[60px] py-4 px-8">
          <div className={`font-bold text-xl ${darkMode ? "text-white" : ""}`}>
            Debo
          </div>
          <div className="flex items-center gap-3">
            <div
              className={
                "flex md:h-[100%] md:static md:flex md:flex-row md:items-center"
              }
            >
              {navItems.map((item) => (
                <nav
                  key={item.id}
                  className={`space-x-4 text-sm nav-dark p-5 ${
                    darkMode ? "text-white" : "text-slate-600"
                  }`}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-semibold bg-transparent hover:text-[#ccc] text-lg md:text-[15px] px-3 md:px-0 py-5  ${
                      active === item.id
                        ? "block rounded-sm w-full md:rounded-none md:border-b-2 text-[blue]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </nav>
              ))}
            </div>
            {darkMode ? (
              <MdSunny
                onClick={() => setDarkMode(false)}
                className="text-lg cursor-pointer"
                color="yellow"
              />
            ) : (
              <FaMoon
                onClick={() => setDarkMode(true)}
                className="text-lg cursor-pointer"
                color="black"
              />
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Hero dark={darkMode} setDark={setDarkMode} />
        <About dark={darkMode} setDark={setDarkMode} />
        <Skills dark={darkMode} setDark={setDarkMode} />
        <Projects dark={darkMode} setDark={setDarkMode} />
        <Contact dark={darkMode} setDark={setDarkMode} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
