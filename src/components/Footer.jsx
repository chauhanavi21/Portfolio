import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "mailto:chauhanavi843@gmail.com",                     icon: <FaEnvelope />,  label: "Email",    color: "#FF4D1A" },
  { href: "https://github.com/chauhanavi21",                    icon: <FaGithub />,    label: "GitHub",   color: "#FF8C00" },
  { href: "https://www.linkedin.com/in/avi-chauhan-1678a4204/", icon: <FaLinkedin />,  label: "LinkedIn", color: "#FFD700" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ borderColor: "rgba(255,77,26,0.08)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(255,77,26,0.03), transparent)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold text-base">
            <span className="text-white">Avi</span>
            <span className="gradient-text-2"> Chauhan</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">© {year} · Built with React & Tailwind</p>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, icon, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <span className="text-base">{icon}</span>
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
