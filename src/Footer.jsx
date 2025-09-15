import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 transition duration-500 border-t">
      <div className="container text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Gbadebo Debo. Built with React &
        Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
