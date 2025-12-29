import React, { useState } from "react";
import { motion } from "framer-motion";

// TODO: replace these paths with your actual image files
import certAIF from "../assets/certificates/aws-certified-ai-practitioner.png";
import certAIUse from "../assets/certificates/Exploring_Artificial_Intelligence.png";
import certFund from "../assets/certificates/Fundamentals_of_Machine.png";
import certRotaract from "../assets/certificates/rotract.jpg";
import certSAA from "../assets/certificates/aws-certified-solutions-architect-associate.png";
import certReact from "../assets/certificates/frontend_developer_react.png";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const achievements = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    date: "October 11, 2025",
    details:
      "Validated ability to design, implement, and optimize secure, scalable, and highly available architectures on AWS.",
    image: certSAA,
  },
  {
    title: "AWS Certified AI Practitioner (AIF–C01)",
    date: "August 09, 2025",
    details:
      "Scored 933/1000. Covered AI & ML fundamentals, generative AI, foundation models, responsible AI, and AI security & governance.",
    image: certAIF,
  },
  {
    title: "AI Use Cases & Applications",
    date: "June 26, 2025",
    details:
      "Explored real-world applications of AI in finance, healthcare, education, and startups with a strong focus on practical problem-solving.",
    image: certAIUse,
  },
  {
    title: "Fundamentals of ML & AI",
    date: "June 04, 2025",
    details:
      "Mastered core ML workflows, supervised vs unsupervised learning, model evaluation, and hands-on labs using AWS AI tools.",
    image: certFund,
  },
  {
    title: "Rotaract Club Volunteer",
    date: "2023 – 2024",
    details:
      "Served as Teach Director at Rotaract Club of Ahmedabad Eleos, contributing to 9+ volunteer projects focused on youth development.",
    image: certRotaract,
  },
  {
    title: "Frontend Developer - React",
    date: "2025",
    details:
      "Certified in React development, covering modern frontend development practices, component architecture, state management, and building scalable web applications.",
    image: certReact,
  },
];

const Achievements = () => {
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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Certifications &amp; Achievements
        </h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          A few milestones that reflect my learning journey.
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setSelected(a)}
              className="bg-[#202020] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all text-left min-h-[230px] md:min-h-[260px] focus:outline-none"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">
                {a.title}
              </h2>
              <p className="text-xs text-gray-400 mb-3 text-center">
                {a.date}
              </p>
              <p className="text-sm text-gray-300 text-center leading-relaxed">
                {a.details}
              </p>
              <p className="text-xs text-[#e85a85] mt-4 text-center">
                Click to view certificate
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="bg-[#202020] border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-4 md:p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">
                  {selected.title}
                </h2>
                <p className="text-xs text-gray-400">{selected.date}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>

            {selected.image && (
              <div className="mb-4 flex justify-center">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-lg max-h-[60vh] object-contain"
                />
              </div>
            )}

            <p className="text-sm text-gray-200 leading-relaxed">
              {selected.details}
            </p>
          </div>
        </div>
      )}
    </motion.main>
  );
};

export default Achievements;
