// src/pages/Experience.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const experiences = [
  {
    role: "AI / LLM Intern",
    company: "Silent Infotech Pvt Ltd, Ahmedabad, India",
    period: "Jan 2024 – Apr 2024",
    description:
      "Worked on AI-assisted workflows, LLM integrations, and internal tools for automation.",
    longDescription:
      "As an AI / LLM Intern at Silent Infotech, I worked on integrating large language models into existing business workflows. I helped design and prototype internal tools that automated repetitive tasks for the team, such as document summarization, email drafting, and query answering. I also contributed to prompt design, evaluation of different model variants, and building small FastAPI services that exposed these capabilities to internal dashboards. This role strengthened my understanding of production-grade AI systems, prompt engineering, and evaluation strategies.",
  },
  {
    role: "Remote Internship Trainee (Web Design)",
    company: "Karvi Engineering & Consultancy, Vadodara, India",
    period: "Jan 2022 – Apr 2022",
    description:
      "Contributed to multiple live React projects in the web design team.",
    longDescription:
      "At Karvi Engineering & Consultancy, I worked remotely as a Web Design Intern on multiple live client projects. My responsibilities included building responsive React components, implementing new UI flows based on Figma designs, and fixing layout issues across different breakpoints. I collaborated with senior developers to refactor older components to modern React patterns and improved performance by optimizing asset loading and state management. This internship gave me strong exposure to client expectations, timelines, and real-world front-end best practices.",
  },
  {
    role: "Web Developer Intern",
    company: "Peace Solutions Private Limited, Pune, India",
    period: "Jul 2021 – Aug 2021",
    description:
      "Built a portfolio website using React and Express.js as part of a live project.",
    longDescription:
      "During my internship at Peace Solutions, I built a portfolio website using React on the frontend and Express.js on the backend. I implemented routing, reusable UI components, and an API layer that served dynamic content from the server. I also worked on deploying the project, managing environment variables, and setting up basic logging. This was one of my first experiences shipping a complete end-to-end web application and it helped me understand how front-end and back-end pieces fit together.",
  },
  {
    role: "Teach Director & Volunteer",
    company: "Rotaract Club of Ahmedabad Eleos",
    period: "Volunteer Experience",
    description:
      "Led and contributed to 9+ teaching and community projects as Teach Director.",
    longDescription:
      "At the Rotaract Club of Ahmedabad Eleos, I served as Teach Director and actively volunteered across more than nine projects. I was involved in planning and conducting teaching sessions for underprivileged students, coordinating with other volunteers, and designing simple learning materials. Beyond teaching, I helped with event logistics, communication, and reporting impact back to the club. This experience significantly improved my leadership, communication, and teamwork skills, and reinforced my interest in using technology and education to create meaningful impact.",
  },
];

const Experience = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] px-6 py-10"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Experience
        </h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          A snapshot of internships and roles I’ve taken on so far.
        </p>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(exp)}
              className="w-full text-left bg-[#202020] border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all focus:outline-none"
            >
              <h2 className="text-xl font-semibold mb-1">{exp.role}</h2>
              <p className="text-sm text-gray-300 mb-1">{exp.company}</p>
              <p className="text-xs text-gray-400 mb-3">{exp.period}</p>
              <p className="text-sm text-gray-300">{exp.description}</p>
              <p className="text-xs text-[#e85a85] mt-2">
                Click to read more
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal for long description */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#202020] border border-gray-700 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 shadow-xl">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  {selected.role}
                </h2>
                <p className="text-sm text-gray-300">{selected.company}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {selected.period}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-sm text-gray-400 hover:text-white ml-4"
              >
                Close
              </button>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              {selected.longDescription}
            </p>
          </div>
        </div>
      )}
    </motion.main>
  );
};

export default Experience;
