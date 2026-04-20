import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload, HiMail } from "react-icons/hi";

const roles = [
  "Software Development Engineer",
  "Data Analyst",
  "AWS Solutions Architect",
  "AI / ML Engineer",
  "Full-Stack Developer",
];

const Typewriter = () => {
  const [idx, setIdx]           = useState(0);
  const [text, setText]         = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    let timer;
    if (!deleting && text.length < current.length) {
      timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 75);
    } else if (!deleting && text.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(text.slice(0, -1)), 42);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, idx]);

  return (
    <span style={{ color: "#93c5fd" }} className="font-semibold text-base sm:text-lg md:text-2xl px-1">
      {text}
      <span className="animate-blink" style={{ color: "#3b82f6" }}>|</span>
    </span>
  );
};

const StatCard = ({ value, label }) => (
  <div className="glass-card rounded-xl sm:rounded-2xl px-3 py-3 sm:px-6 sm:py-4 text-center min-w-0 flex-1 sm:min-w-[100px] sm:flex-initial">
    <p className="text-lg sm:text-2xl font-bold gradient-text leading-tight">{value}</p>
    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 leading-tight">{label}</p>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] min-h-screen flex-col overflow-x-hidden overflow-y-visible"
      style={{
        paddingTop: "max(4.5rem, calc(env(safe-area-inset-top, 0px) + 4rem))",
      }}
    >
      {/* Background orbs — blue + soft white */}
      <div
        className="absolute rounded-full pointer-events-none blur-3xl animate-aurora opacity-[0.18] max-w-[100vw]"
        style={{
          width: "min(600px, 140vw)",
          height: "min(600px, 140vw)",
          background: "radial-gradient(circle, #2563eb, transparent 70%)",
          top: "5%",
          left: "-20%",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none blur-3xl animate-aurora opacity-14 max-w-[100vw]"
        style={{
          width: "min(500px, 120vw)",
          height: "min(500px, 120vw)",
          background: "radial-gradient(circle, #3b82f6, transparent 70%)",
          bottom: "8%",
          right: "-15%",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none blur-3xl animate-aurora opacity-10"
        style={{
          width: "min(300px, 80vw)",
          height: "min(300px, 80vw)",
          background: "radial-gradient(circle, #e2e8f0, transparent 70%)",
          top: "45%",
          left: "40%",
          animationDelay: "-12s",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "min(60px, 12vw) min(60px, 12vw)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-8 min-h-0">
        <div className="flex w-full flex-col items-center text-center">
          <motion.div
            className="relative mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <div
              className="absolute rounded-full animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, #2563eb, #60a5fa, #e2e8f0, #2563eb)",
                padding: "3px",
                width: "calc(100% + 12px)",
                height: "calc(100% + 12px)",
                top: "-6px",
                left: "-6px",
                borderRadius: "9999px",
              }}
            />
            <div
              className="absolute rounded-full animate-spin-rev opacity-50"
              style={{
                background: "conic-gradient(from 180deg, transparent 50%, #93c5fd 100%)",
                padding: "2px",
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                top: "-10px",
                left: "-10px",
                borderRadius: "9999px",
              }}
            />
            <img
              src="/profile.jpg"
              alt="Portrait of Avi Chauhan"
              width="176"
              height="176"
              fetchpriority="high"
              decoding="async"
              className="relative z-10 h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full border-4 border-[#030712] object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="relative z-10 hidden h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 items-center justify-center rounded-full border-4 border-[#030712] text-3xl sm:text-4xl font-bold text-white"
              style={{ background: "linear-gradient(135deg, #2563eb, #60a5fa)" }}
            >
              AC
            </div>
          </motion.div>

          <motion.div
            className="mb-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium sm:mb-5 sm:text-xs"
            style={{ border: "1px solid rgba(59,130,246,0.35)", color: "#93c5fd" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="mb-2 text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-white">Avi </span>
            <span className="gradient-text">Chauhan</span>
          </motion.h1>

          <motion.div
            className="mb-2 flex min-h-[2.5rem] sm:min-h-[2.75rem] w-full max-w-xl items-center justify-center px-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter />
          </motion.div>

          <motion.div
            className="mb-6 flex max-w-md flex-wrap justify-center gap-2 sm:mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            {["AWS Certified Solutions Architect", "AWS AI Practitioner"].map((cert) => (
              <span
                key={cert}
                className="rounded-full px-2.5 py-1 text-[10px] leading-tight sm:px-3 sm:text-xs"
                style={{
                  color: "#e2e8f0",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(148,163,184,0.25)",
                }}
              >
                ✦ {cert}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mb-8 flex w-full max-w-sm flex-col gap-3 sm:mb-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="/Avi_Chauhan.pdf"
              download
              className="btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              <HiDownload className="text-base" /> Download CV
            </a>
            <a
              href="/contact"
              className="btn-outline inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              <HiMail className="text-base" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mb-8 grid w-full max-w-md grid-cols-2 gap-2 sm:mb-10 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
          >
            <StatCard value="16+" label="Projects Built" />
            <StatCard value="4+" label="Internships" />
            <StatCard value="2" label="AWS Certs" />
            <StatCard value="9+" label="Volunteer Projects" />
          </motion.div>

          <motion.div
            className="flex items-center gap-4 sm:gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { href: "https://github.com/chauhanavi21", icon: <FaGithub size={22} />, label: "GitHub", color: "#60a5fa" },
              { href: "https://www.linkedin.com/in/avi-chauhan-1678a4204/", icon: <FaLinkedin size={22} />, label: "LinkedIn", color: "#e2e8f0" },
            ].map(({ href, icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full glass-card text-gray-400 transition-all touch-manipulation sm:h-11 sm:w-11 min-h-[44px] min-w-[44px]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.borderColor = `${color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative z-10 mt-auto flex flex-col items-center gap-1 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 text-gray-500 sm:pb-4"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-widest uppercase sm:text-xs">Scroll</span>
        <div
          className="h-6 w-px sm:h-8"
          style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.55), transparent)" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
