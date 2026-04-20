import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiAcademicCap, HiCode, HiBriefcase } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const InfoChip = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm text-gray-300">
    <span className="text-base" style={{ color: "#93c5fd" }}>{icon}</span>
    {text}
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-3 sm:px-4 overflow-x-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#93c5fd" }}>
            Get to know me
          </p>
          <h2 className="section-heading text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – image */}
          <motion.div
            className="relative"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <div className="relative mx-auto w-fit">
              <div className="absolute -bottom-4 -right-4 w-full h-full glass-card rounded-3xl" />
              <div
                className="absolute -bottom-2 -right-2 w-full h-full rounded-3xl"
                style={{ border: "1px solid rgba(59,130,246,0.22)" }}
              />
              <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-12 pointer-events-none"
                  style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
                />
                <img
                  src="/profile.jpg"
                  alt="Avi Chauhan — About"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-xs mx-auto rounded-2xl object-cover shadow-xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full max-w-xs mx-auto rounded-2xl aspect-square items-center justify-center text-6xl font-bold text-white hidden"
                  style={{ background: "linear-gradient(135deg, #2563eb, #93c5fd)" }}
                >
                  AC
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-3 -left-3 glass-card rounded-2xl px-4 py-2.5 text-center shadow-xl"
                  style={{ borderColor: "rgba(59,130,246,0.32)" }}
                >
                  <p className="text-xl font-bold gradient-text">15+</p>
                  <p className="text-[10px] text-gray-400">Projects Built</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – text */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Hi, I'm <span className="gradient-text-2">Avi Chauhan</span> 👋
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a software engineer and AI enthusiast passionate about building impactful
                solutions through machine learning, large language models, and modern web technology.
                I love blending tech with creativity and enjoy leading both code and community efforts.
              </p>
            </div>

            <p
              className="text-sm italic border-l-2 pl-4 leading-relaxed text-gray-400"
              style={{ borderColor: "#3b82f6" }}
            >
              "Combining applied machine learning, full-stack development, and research-driven
              problem solving to create impactful AI solutions."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoChip icon={<FaMapMarkerAlt />} text="Ahmedabad, India" />
              <InfoChip icon={<HiAcademicCap />}  text="Computer Science Graduate" />
              <InfoChip icon={<HiBriefcase />}     text="AI/ML & Web Dev" />
              <InfoChip icon={<HiCode />}          text="Open to Opportunities" />
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { href: "mailto:chauhanavi843@gmail.com",                      icon: <FaEnvelope />,  label: "Email",    color: "#3b82f6" },
                { href: "https://github.com/chauhanavi21",                     icon: <FaGithub />,    label: "GitHub",   color: "#60a5fa" },
                { href: "https://www.linkedin.com/in/avi-chauhan-1678a4204/", icon: <FaLinkedin />,  label: "LinkedIn", color: "#e2e8f0" },
              ].map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-gray-400 text-lg transition-all"
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
