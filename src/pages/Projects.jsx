import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const projects = [
  {
    title: "FriendNest",
    description:
      "A modern social platform for connecting with language exchange partners through real-time chat and video calling.",
    tech: ["React", "Node.js", "MongoDB", "Stream.io"],
    github: "https://github.com/chauhanavi21/FriendNest",
    live: "https://friendnest-56q7.onrender.com/",
  },
  {
    title: "FinVista",
    description:
      "A financial analytics tool providing portfolio insights, sentiment tracking, and optimization.",
    tech: ["React", "Flask", "yFinance", "PyPortfolioOpt"],
    github: "https://github.com/chauhanavi21/FinVista",
  },
  {
    title: "Online Exam Monitoring System",
    description:
      "AI-driven system for live exam supervision using facial recognition, object detection, and cheat detection.",
    tech: ["Python", "OpenCV", "React", "FastAPI"],
    github: "https://github.com/chauhanavi21/Online-Exam-Monitoring-System",
  },
  {
    title: "Football Analysis System",
    description:
      "Vision-based football analysis engine with tracking, metrics, and performance insights.",
    tech: ["Python", "YOLO", "OpenCV", "Analytics"],
    github: "https://github.com/chauhanavi21/Football_Analysis_System",
  },
  {
    title: "Attendance Management System",
    description:
      "Automated attendance tracking using face recognition and a simple dashboard.",
    tech: ["Python", "FastAPI", "SQLModel", "React"],
    github: "https://github.com/chauhanavi21/Attendance_system",
  },
  {
    title: "FinBridge",
    description:
      "Fintech dashboard integrating multiple APIs for real-time portfolio and sentiment data.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/chauhanavi21/FinBridge",
  },
  {
    title: "Intelligent Arts",
    description:
      "A creative AI-driven platform around books, authors, and curated content.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/chauhanavi21/Intelligent-arts",
  },
  {
    title: "Course Master",
    description:
      "AI-powered LMS platform with course management, automation, and companion features.",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
    github: "https://github.com/chauhanavi21/Course_Master",
  },
  {
    title: "InkBound",
    description:
      "Story app with genres, read-aloud support, and page-flip style reading experience.",
    tech: ["React Native", "Expo", "OpenAI"],
    github: "https://github.com/chauhanavi21/InkBound",
  },
  {
    title: "QVisor",
    description:
      "Quantum-assisted visual reasoning toolkit combining computer vision and simulation.",
    tech: ["Python", "FastAPI", "Vision", "Research"],
    github: "https://github.com/chauhanavi21/Qvisor",
  },
];

const Projects = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] px-6 py-10"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Projects</h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          A selection of projects I’ve built across AI, web, and systems.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#202020] border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-[#2b2b2b] border border-gray-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs border border-gray-600 rounded-full px-4 py-2 hover:bg-[#e85a85] hover:border-[#e85a85] transition-all"
                >
                  View on GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs border border-gray-600 rounded-full px-4 py-2 hover:bg-[#e85a85] hover:border-[#e85a85] transition-all"
                  >
                    Live Website <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
