import { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

function App() {
  const [active, setActive] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const sections = ["about", "skills", "projects", "contact"];

  const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
  
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
    } else {
      // restore scroll
      document.body.style.overflow = "";
    }

    // cleanup (runs on unmount)
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);


  const handleClick = (e, id) => {
    e.preventDefault(); // prevent default anchor jump
    setActive(id);
    setOpenMenu(false)

    // Smooth scroll to section
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const navbar = document.querySelector("nav"); // adjust if different selector
  const headerOffset = navbar ? navbar.offsetHeight : 0;

  const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

   setOpenMenu(false)

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  setActive(id);
};

  return (
    <div className="min-h-screen relative flex flex-col">
      <header className="md:hidden bg-white/80 backdrop-blur sticky top-0 right-0 left-0 z-30 shadow-sm">
        <div className="container flex items-center justify-between h-[60px] py-4">
          <div className="font-bold text-xl">Gbadebo Debo</div>
          {!openMenu ?<GiHamburgerMenu onClick={() => setOpenMenu(true)} className="text-[30px] md:hidden" /> : <RiCloseLargeFill onClick={() => setOpenMenu(false)} className="text-[30px] md:hidden" />}
          {<div className={`bg-white flex flex-col w-full menu fixed top-15 left-0 right-0 h-[100vh] ${openMenu ? " active" : ""}`}>
            {navItems.map((item) => (
            <nav key={item.id} className="space-x-4 text-sm p-3 text-slate-600">
              <a
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold hover:text-slate-900 text-lg md:text-[15px] px-3 md:px-0 py-2  ${
                  active === item.id
                    ? "bg-blue-50 block rounded-sm w-full md:bg-white md:rounded-none md:border-b-2 text-[blue]"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </nav>
            ))}
          </div>}
        </div>
      </header>
      <header className="hidden md:block bg-white/80 backdrop-blur sticky top-0 right-0 left-0 z-30 shadow-sm">
        <div className="container flex items-center justify-between h-[60px] py-4">
          <div className="font-bold text-xl">Gbadebo Debo</div>
          {<div className={`bg-white flex md:w-[45%] md:h-[100%] md:static md:flex md:flex-row md:items-center xl:w-[27%] ${openMenu ? "active" : ""}`}>
            {navItems.map((item) => (
            <nav key={item.id} className="space-x-4 text-sm p-5 text-slate-600">
              <a
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold hover:text-slate-900 text-lg md:text-[15px] px-3 md:px-0 py-5  ${
                  active === item.id
                    ? "bg-blue-50 block rounded-sm w-full md:bg-white md:rounded-none md:border-b-2 text-[blue]"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </nav>
            ))}
          </div>}
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
