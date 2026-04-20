import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "CLAWD – Local AI Coding Agent",
    description: "A fully local AI coding agent running 100% on your machine. Connects a local LLM via Ollama to coding tools with a WebSocket-streamed agent loop. No API keys, no cloud.",
    tech: ["Python", "FastAPI", "React", "Ollama", "WebSocket", "Vite"],
    github: "https://github.com/chauhanavi21/Self_Clawd",
    featured: true,
    accent: "#3b82f6",
  },
  {
    title: "Collaborative Whiteboard",
    description: "Local-first, real-time collaborative whiteboard using Yjs CRDTs with live cursors, offline sync, layers, comments, and E2E encryption.",
    tech: ["React", "TypeScript", "Yjs", "Konva", "Node.js", "WebSocket"],
    github: "https://github.com/chauhanavi21/WhiteBoard",
    accent: "#2563eb",
  },
  {
    title: "OrbitOps",
    description: "Production-grade multi-tenant B2B SaaS with RBAC, Stripe billing, usage metering, audit logging, and background jobs.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Stripe"],
    github: "https://github.com/chauhanavi21/Company_Saas",
    accent: "#60a5fa",
  },
  {
    title: "Enterprise AI Knowledge Copilot",
    description: "Self-hosted AI knowledge platform with RAG chat, prompt registry, LLM observability, evaluation pipelines, and multi-tenant RBAC.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "Celery", "Redis"],
    github: "https://github.com/chauhanavi21/EnterpriseAI",
    accent: "#38bdf8",
  },
  {
    title: "HelixDesk",
    description: "Omnichannel customer support platform with real-time chat, SLA engine, smart routing, embeddable widget, and background workers.",
    tech: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Redis", "Socket.IO"],
    github: "https://github.com/chauhanavi21/helixdesk",
    accent: "#818cf8",
  },
  {
    title: "FriendNest",
    description: "A modern social platform for connecting with language exchange partners through real-time chat and video calling.",
    tech: ["React", "Node.js", "MongoDB", "Stream.io"],
    github: "https://github.com/chauhanavi21/FriendNest",
    live: "https://friendnest-56q7.onrender.com/",
    accent: "#93c5fd",
  },
];

const TiltCard = ({ children, accent }) => {
  const ref = useRef(null);
  const move = (e) => {
    const c = ref.current; if (!c) return;
    const r = c.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height/2) / (r.height/2)) * 7;
    const ry = ((r.width/2 - (e.clientX - r.left)) / (r.width/2)) * 7;
    c.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    c.style.boxShadow = `0 24px 60px ${accent}25, 0 0 0 1px ${accent}30`;
  };
  const leave = () => {
    const c = ref.current; if (!c) return;
    c.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
    c.style.boxShadow = "";
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} style={{ transition: "transform 0.18s ease, box-shadow 0.18s ease" }} className="h-full">
      {children}
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => (
  <section id="projects" className="relative py-16 sm:py-24 px-3 sm:px-4 overflow-x-hidden">
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-48 opacity-[0.06] pointer-events-none blur-3xl"
      style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa, #e2e8f0)" }}
    />
    <div className="max-w-7xl mx-auto">
      <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#93c5fd" }}>What I've built</p>
        <h2 className="section-heading text-white">Featured <span className="gradient-text">Projects</span></h2>
        <div className="section-divider" />
        <p className="text-gray-400 mt-5 text-sm max-w-xl mx-auto">
          A selection of projects across AI, full-stack, and systems engineering.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <motion.div key={i} className="h-full" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-30px" }} transition={{ delay: (i % 3) * 0.1 }}>
            <TiltCard accent={p.accent}>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                {p.featured && (
                  <div
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold"
                    style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.35)", color: "#3b82f6" }}
                  >
                    ✦ NEW
                  </div>
                )}
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-[0.1] pointer-events-none" style={{ background: p.accent }} />

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-white leading-tight pr-8">{p.title}</h3>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                      <FaGithub size={18} />
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium" style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}30`, color: p.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border transition-all"
                    style={{ borderColor: `${p.accent}38`, color: p.accent }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = `${p.accent}15`)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <FaGithub size={12} /> GitHub
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border transition-all"
                      style={{ borderColor: `${p.accent}38`, color: p.accent }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = `${p.accent}15`)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <FaExternalLinkAlt size={10} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <motion.div className="flex justify-center mt-12" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Link
          to="/projects"
          className="group flex items-center gap-3 px-8 py-3.5 rounded-full glass-card text-sm font-semibold text-white transition-all"
          style={{ border: "1px solid rgba(59,130,246,0.28)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(59,130,246,0.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "")}
        >
          View All Projects
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
