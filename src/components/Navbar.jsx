// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", to: "/" },
  // About removed – About content now lives on Home
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/achievements" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const baseLink =
    "text-sm md:text-base font-medium transition-colors duration-200";
  const activeClass = "text-[#e85a85]";
  const inactiveClass = "text-gray-200 hover:text-white";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-lg md:text-xl">
          <span className="text-white">Avi</span>
          <span className="text-[#e85a85]"> Chauhan</span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeClass : inactiveClass}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111] border-t border-gray-800">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : inactiveClass}`
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
