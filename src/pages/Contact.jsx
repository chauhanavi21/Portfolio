import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail, HiChatAlt2, HiUserGroup } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contactCards = [
  { icon: <HiMail size={22} />,     title: "Email Me",       desc: "Best way to reach me directly. I typically respond within 24 hours.",             link: "mailto:chauhanavi843@gmail.com",                       label: "chauhanavi843@gmail.com",   color: "#FF4D1A" },
  { icon: <HiChatAlt2 size={22} />, title: "Coffee Chat",    desc: "Open to virtual chats about tech, AI, or careers — let's connect.",               link: "https://www.linkedin.com/in/avi-chauhan-1678a4204/",  label: "Message on LinkedIn",       color: "#FF8C00" },
  { icon: <HiUserGroup size={22} />, title: "Collaborations", desc: "Always interested in meaningful projects and ideas worth building.",               link: "https://www.linkedin.com/in/avi-chauhan-1678a4204/",  label: "Let's collaborate",         color: "#FFD700" },
];

const Contact = () => (
  <div
    className="relative min-h-screen pb-12 sm:pb-16 px-3 sm:px-4 overflow-x-hidden"
    style={{ paddingTop: "max(5.5rem, calc(4rem + env(safe-area-inset-top, 0px) + 0.75rem))" }}
  >
    {/* Background orbs */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 opacity-[0.07] pointer-events-none blur-3xl"
      style={{ background: "linear-gradient(90deg, #FF4D1A, #FF8C00, #FFD700)" }} />
    <div className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.07] pointer-events-none blur-3xl rounded-full"
      style={{ background: "radial-gradient(circle, #FF4D1A, transparent 70%)" }} />

    <div className="max-w-5xl mx-auto">
      {/* Heading */}
      <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" animate="show">
        <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#FF8C00" }}>Get in touch</p>
        <h1 className="section-heading text-white">Let's <span className="gradient-text">Connect</span></h1>
        <div className="section-divider" />
        <p className="text-gray-400 mt-5 text-sm max-w-md mx-auto leading-relaxed">
          Whether it's a project idea, collaboration, or just a question — I'm happy to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: contact cards */}
        <motion.div className="space-y-4" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.15 }}>
          {contactCards.map(({ icon, title, desc, link, label, color }) => (
            <a
              key={title}
              href={link}
              target={link.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 flex gap-4 items-start group transition-all block"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = color + "40")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
                {icon}
              </div>
              <div>
                <h2 className="text-base font-semibold text-white mb-0.5">{title}</h2>
                <p className="text-xs text-gray-400 mb-2 leading-relaxed">{desc}</p>
                <span className="text-sm font-medium group-hover:opacity-80 transition-opacity" style={{ color }}>{label}</span>
              </div>
            </a>
          ))}

          {/* Social row */}
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest font-medium">Also find me on</p>
            <div className="flex gap-3 flex-wrap">
              {[
                { href: "https://github.com/chauhanavi21",                      icon: <FaGithub size={17} />,   label: "GitHub",   color: "#FF8C00" },
                { href: "https://www.linkedin.com/in/avi-chauhan-1678a4204/", icon: <FaLinkedin size={17} />, label: "LinkedIn", color: "#FFD700" },
                { href: "mailto:chauhanavi843@gmail.com",                       icon: <FaEnvelope size={17} />, label: "Email",    color: "#FF4D1A" },
              ].map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-400 transition-all"
                  style={{ background: `${color}0a`, border: `1px solid ${color}20` }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color + "50"; e.currentTarget.style.background = color + "15"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = ""; e.currentTarget.style.borderColor = color + "20"; e.currentTarget.style.background = color + "0a"; }}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div className="glass-card rounded-3xl p-7" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.25 }}>
          <h2 className="text-xl font-bold text-white mb-1">Send a Message</h2>
          <p className="text-xs text-gray-500 mb-6">I'll get back to you as soon as possible.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              window.location.href = `mailto:chauhanavi843@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${name || "a visitor"}`)}`;
            }}
            className="space-y-4"
          >
            {[
              { name: "name",    type: "text",  label: "Name",    placeholder: "Your name" },
              { name: "email",   type: "email", label: "Email",   placeholder: "your@email.com" },
            ].map(({ name, type, label, placeholder }) => (
              <div key={name}>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">{label}</label>
                <input
                  name={name} type={type} placeholder={placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,77,26,0.14)" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(255,140,0,0.5)")}
                  onBlur={(e)  => (e.target.style.borderColor = "rgba(255,77,26,0.14)")}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-medium">Message</label>
              <textarea
                name="message" rows={5} placeholder="Tell me about your idea, project, or question..."
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,77,26,0.14)" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,140,0,0.5)")}
                onBlur={(e)  => (e.target.style.borderColor = "rgba(255,77,26,0.14)")}
              />
            </div>

            <button type="submit" className="btn-primary w-full py-3 text-sm font-semibold">
              Send Message →
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Contact;
