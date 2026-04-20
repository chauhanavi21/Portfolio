import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const allProjects = [
  {
    title: "CLAWD – Local AI Coding Agent",
    description:
      "A fully local AI coding agent running 100% on your machine. Connects a local LLM via Ollama to a set of coding tools with a WebSocket-streamed agent loop. Like Claude Code, but no API keys, no cloud, no cost per token.",
    tech: ["Python", "FastAPI", "React", "Ollama", "WebSocket", "Vite"],
    github: "https://github.com/chauhanavi21/Self_Clawd",
    featured: true,
    accent: "#3b82f6",
  },
  {
    title: "Collaborative Whiteboard",
    description:
      "A local-first, real-time collaborative whiteboard using Yjs CRDTs with live cursors, offline sync, layers, comments, and E2E encryption.",
    tech: ["React", "TypeScript", "Yjs", "Konva", "Node.js", "WebSocket"],
    github: "https://github.com/chauhanavi21/WhiteBoard",
    accent: "#2563eb",
  },
  {
    title: "OrbitOps",
    description:
      "Production-grade multi-tenant B2B SaaS with RBAC, Stripe billing, usage metering, audit logging, and background jobs.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Stripe"],
    github: "https://github.com/chauhanavi21/Company_Saas",
    accent: "#60a5fa",
  },
  {
    title: "Enterprise AI Knowledge Copilot",
    description:
      "Self-hosted AI knowledge platform with RAG chat, prompt registry, LLM observability, evaluation pipelines, and multi-tenant RBAC.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "Celery", "Redis"],
    github: "https://github.com/chauhanavi21/EnterpriseAI",
    accent: "#38bdf8",
  },
  {
    title: "Developer Platform Portal",
    description:
      "Internal Developer Platform with Backstage, GitOps via Argo CD, Terraform EKS provisioning, polyglot microservices, and full observability.",
    tech: ["Backstage", "Terraform", "Argo CD", "AWS EKS", "GitHub Actions", "OpenTelemetry"],
    github: "https://github.com/chauhanavi21/Gitops_Portal",
    accent: "#818cf8",
  },
  {
    title: "HelixDesk",
    description:
      "Omnichannel customer support platform with real-time chat, SLA engine, smart routing, embeddable widget, and background workers.",
    tech: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Redis", "Socket.IO"],
    github: "https://github.com/chauhanavi21/helixdesk",
    accent: "#60a5fa",
  },
  {
    title: "FriendNest",
    description:
      "A modern social platform for connecting with language exchange partners through real-time chat and video calling.",
    tech: ["React", "Node.js", "MongoDB", "Stream.io"],
    github: "https://github.com/chauhanavi21/FriendNest",
    live: "https://friendnest-56q7.onrender.com/",
    accent: "#93c5fd",
  },
  {
    title: "FinVista",
    description:
      "A financial analytics tool providing portfolio insights, sentiment tracking, and optimization.",
    tech: ["React", "Flask", "yFinance", "PyPortfolioOpt"],
    github: "https://github.com/chauhanavi21/FinVista",
    accent: "#cbd5e1",
  },
  {
    title: "Online Exam Monitoring System",
    description:
      "AI-driven system for live exam supervision using facial recognition, object detection, and cheat detection.",
    tech: ["Python", "OpenCV", "React", "FastAPI"],
    github: "https://github.com/chauhanavi21/Online-Exam-Monitoring-System",
    accent: "#3b82f6",
  },
  {
    title: "Football Analysis System",
    description:
      "Vision-based football analysis engine with tracking, metrics, and performance insights.",
    tech: ["Python", "YOLO", "OpenCV", "Analytics"],
    github: "https://github.com/chauhanavi21/Football_Analysis_System",
    accent: "#2563eb",
  },
  {
    title: "Attendance Management System",
    description:
      "Automated attendance tracking using face recognition and a simple dashboard.",
    tech: ["Python", "FastAPI", "SQLModel", "React"],
    github: "https://github.com/chauhanavi21/Attendance_system",
    accent: "#60a5fa",
  },
  {
    title: "FinBridge",
    description:
      "Fintech dashboard integrating multiple APIs for real-time portfolio and sentiment data.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/chauhanavi21/FinBridge",
    accent: "#818cf8",
  },
  {
    title: "Intelligent Arts",
    description:
      "A creative AI-driven platform around books, authors, and curated content.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/chauhanavi21/Intelligent-arts",
    accent: "#93c5fd",
  },
  {
    title: "Course Master",
    description:
      "AI-powered LMS platform with course management, automation, and companion features.",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
    github: "https://github.com/chauhanavi21/Course_Master",
    accent: "#38bdf8",
  },
  {
    title: "InkBound",
    description:
      "Story app with genres, read-aloud support, and page-flip style reading experience.",
    tech: ["React Native", "Expo", "OpenAI"],
    github: "https://github.com/chauhanavi21/InkBound",
    accent: "#2563eb",
  },
  {
    title: "QVisor",
    description:
      "Quantum-assisted visual reasoning toolkit combining computer vision and simulation.",
    tech: ["Python", "FastAPI", "Vision", "Research"],
    github: "https://github.com/chauhanavi21/Qvisor",
    accent: "#3b82f6",
  },
];

const TiltCard = ({ children, accent }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * 6;
    const ry = ((cx - x) / cx) * 6;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    card.style.boxShadow = `0 20px 50px ${accent}30, 0 0 0 1px ${accent}30`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
    card.style.boxShadow = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      className="h-full"
    >
      {children}
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  useDocumentMeta({
    title: "Projects — Avi Chauhan",
    description:
      "All projects by Avi Chauhan — AI, full-stack, data, and systems engineering builds.",
    canonical: "https://chauhanavi.com/projects",
  });

  const [search, setSearch] = useState("");

  const filtered = allProjects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div
      className="relative min-h-screen pb-12 sm:pb-16 px-3 sm:px-4 overflow-x-hidden"
      style={{ paddingTop: "max(5.5rem, calc(4rem + env(safe-area-inset-top, 0px) + 0.75rem))" }}
    >
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 opacity-[0.07] pointer-events-none blur-3xl"
        style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa, #e2e8f0)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#93c5fd" }}>
            All work
          </p>
          <h1 className="section-heading text-white">
            All <span className="gradient-text">Projects</span>
          </h1>
          <div className="section-divider" />
          <p className="text-gray-400 mt-4 text-sm">
            {allProjects.length} projects spanning AI, web, data, and systems.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="relative max-w-md mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
        >
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search by name, tech, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl glass-card bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
            style={{ outline: "none" }}
          />
        </motion.div>

        {/* Count */}
        {search && (
          <p className="text-center text-sm text-gray-500 mb-8">
            Showing {filtered.length} of {allProjects.length} projects
          </p>
        )}

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              className="h-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: (i % 3) * 0.07 }}
            >
              <TiltCard accent={project.accent}>
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                  {/* Featured badge */}
                  {project.featured && (
                    <div
                      className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}
                    >
                      ✦ NEW
                    </div>
                  )}

                  {/* Inner glow */}
                  <div
                    className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-xl opacity-15 pointer-events-none"
                    style={{ background: project.accent }}
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h2
                        className="text-base font-bold leading-tight pr-8"
                        style={{ color: "#f1f5f9" }}
                      >
                        {project.title}
                      </h2>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                      >
                        <FaGithub size={17} />
                      </a>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                          style={{
                            background: `${project.accent}15`,
                            border: `1px solid ${project.accent}30`,
                            color: project.accent,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 flex-wrap mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border transition-all"
                      style={{
                        borderColor: `${project.accent}40`,
                        color: project.accent,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${project.accent}18`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <FaGithub size={11} /> View on GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border transition-all"
                        style={{
                          borderColor: `${project.accent}40`,
                          color: project.accent,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${project.accent}18`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
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

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg">No projects match "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
