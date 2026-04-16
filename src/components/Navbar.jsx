import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const sectionLinks = [
  { label: "Home",         hash: "home" },
  { label: "About",        hash: "about" },
  { label: "Experience",   hash: "experience" },
  { label: "Skills",       hash: "skills" },
  { label: "Projects",     hash: "projects" },
  { label: "Achievements", hash: "achievements" },
];

const routeLinks = [
  { label: "Blog",    to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (hash) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(8,8,8,0.95)",
              borderBottom: "1px solid rgba(255,77,26,0.12)",
              boxShadow: "0 4px 30px rgba(255,77,26,0.06)",
              paddingTop: "env(safe-area-inset-top, 0px)",
            }
          : { paddingTop: "env(safe-area-inset-top, 0px)" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 min-h-[4rem] flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="font-bold text-lg md:text-xl tracking-tight">
          <span className="text-white">Avi</span>
          <span className="gradient-text-2"> Chauhan</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {sectionLinks.map((item) => (
            <button
              key={item.hash}
              onClick={() => scrollToSection(item.hash)}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              {item.label}
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-[2px] rounded-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg, #FF4D1A, #FF8C00)" }}
              />
            </button>
          ))}

          <div className="w-px h-5 bg-white/10 mx-2" />

          {routeLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? "text-white bg-[rgba(255,77,26,0.15)] border border-[rgba(255,77,26,0.3)]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden backdrop-blur-xl border-t"
          style={{ background: "rgba(8,8,8,0.98)", borderColor: "rgba(255,77,26,0.08)" }}
        >
          <div className="flex flex-col px-5 py-4 gap-1">
            {sectionLinks.map((item) => (
              <button
                key={item.hash}
                onClick={() => scrollToSection(item.hash)}
                className="text-left px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all"
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,77,26,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                {item.label}
              </button>
            ))}
            <div className="my-2 h-px bg-white/5" />
            {routeLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-orange-400 bg-[rgba(255,77,26,0.12)]"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
