// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm text-gray-400">
        <p className="text-center md:text-left">
          © {year} Avi Chauhan. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/chauhanavi21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/avi-chauhan-1678a4204/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
