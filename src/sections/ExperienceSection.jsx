import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiArrowRight } from "react-icons/hi";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Silent Infotech Pvt Ltd",
    location: "Remote",
    period: "Jan 2024 – Apr 2024",
    type: "Internship",
    color: "#FF4D1A",
    description:
      "Engineered a production RAG pipeline, optimized ML model serving with ONNX/INT8, and deployed via AWS Lambda with GitHub Actions CI/CD.",
    bullets: [
      "Engineered a production RAG pipeline over 5,000+ internal documents using FastAPI, Sentence Transformers, and hybrid FAISS + BM25 retrieval, serving semantic Q&A to a 20+ engineer team and reducing manual doc lookup time by over 60%.",
      "Optimized model serving via ONNX export and INT8 quantization, reducing inference latency by 38% while maintaining accuracy thresholds for production deployment on resource-constrained servers.",
      "Designed end-to-end ML pipeline covering ingestion, chunking, embedding, retrieval, and eval, then measured answer relevance using faithfulness scoring and outperformed baseline LLM by 38% on benchmarks.",
      "Containerized the full pipeline with Docker and deployed via AWS Lambda + S3, configured GitHub Actions CI/CD across 4 pipeline stages, reducing release overhead and enabling zero-touch deployments on every merge.",
    ],
    skills: ["FastAPI", "RAG", "FAISS", "Sentence Transformers", "ONNX", "Docker", "AWS Lambda", "GitHub Actions"],
  },
  {
    role: "Software Engineering Intern",
    company: "Opus Technologies",
    location: "Ahmedabad, India",
    period: "Jun 2023 – Jul 2023",
    type: "Internship",
    color: "#FF8C00",
    description:
      "Fine-tuned VGG-16 on 100K+ medical images, lifting accuracy from 71% to 92%, and built preprocessing + evaluation pipelines.",
    bullets: [
      "Fine-tuned VGG-16 on a 100K+ image dataset across 5 disease classes for medical image classification, lifting test accuracy from 71% to 92% by applying targeted augmentation and class-weighting on severely imbalanced data.",
      "Developed preprocessing and evaluation pipelines with Pandas, NumPy, and Scikit-Learn, streamlining hyperparameter tuning across 15+ model configurations and reducing experiment cycle time by 3×.",
      "Delivered modular Python codebase with documented APIs across 3 classification modules, enabling the team to onboard 2 additional disease datasets with under 4 hours of integration work each.",
    ],
    skills: ["PyTorch", "VGG-16", "Transfer Learning", "Pandas", "NumPy", "Scikit-Learn", "Computer Vision"],
  },
  {
    role: "React Intern",
    company: "Karvi Engineering & Consultancy",
    location: "Vadodara, India (Remote)",
    period: "Jan 2022 – Apr 2022",
    type: "Remote Internship",
    color: "#FFD700",
    description: "Built responsive React components and implemented UI flows across multiple live client projects.",
    bullets: [
      "Built responsive React components and implemented new UI flows based on Figma designs across multiple live client projects.",
      "Fixed layout issues across breakpoints and collaborated with senior developers to refactor older components to modern React patterns.",
      "Improved performance by optimizing asset loading and state management, gaining hands-on exposure to client timelines and real-world front-end best practices.",
    ],
    skills: ["React", "Figma", "CSS", "JavaScript", "Responsive Design", "Component Architecture"],
  },
  {
    role: "Web Developer Intern",
    company: "Peace Solutions Private Limited",
    location: "Pune, India",
    period: "Jul 2021 – Aug 2021",
    type: "Internship",
    color: "#FFB347",
    description:
      "Built a portfolio website with React and Express.js—routing, reusable components, API layer, deployment, and environment setup.",
    bullets: [
      "Built a portfolio website using React on the frontend and Express.js on the backend as part of a live project, implementing client-side routing and reusable UI components.",
      "Implemented an API layer that served dynamic content from the server and integrated it with the React frontend for a cohesive full-stack experience.",
      "Worked on deployment, managed environment variables, and set up basic logging to support maintainability and debugging in production.",
      "Shipped one of my first end-to-end web applications, strengthening how front-end and back-end pieces fit together in a real client context.",
    ],
    skills: ["React", "Express.js", "Node.js", "REST API", "Deployment", "JavaScript"],
  },
  {
    role: "Teach Director & Volunteer",
    company: "Rotaract Club of Ahmedabad Eleos",
    location: "Ahmedabad, India",
    period: "2023 – 2024",
    type: "Volunteer",
    color: "#FFA500",
    description: "Led and contributed to 9+ teaching and community projects as Teach Director.",
    bullets: [
      "Planned and conducted teaching sessions for underprivileged students as Teach Director across 9+ community projects.",
      "Coordinated volunteers, designed learning materials, and managed event logistics and communication.",
      "Reinforced leadership, communication, and teamwork skills while driving meaningful educational impact.",
    ],
    skills: ["Leadership", "Community", "Education", "Event Management", "Teamwork"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ExperienceSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience" className="relative py-16 sm:py-24 px-3 sm:px-4 overflow-x-hidden">
      <div
        className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full opacity-[0.07] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #FF4D1A, transparent 70%)" }}
      />

      <div className="max-w-3xl mx-auto w-full min-w-0">
        <motion.div
          className="text-center mb-10 sm:mb-16 px-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#FF8C00" }}>
            Career journey
          </p>
          <h2 className="section-heading text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Mobile-friendly vertical timeline: single column, line + dots, full-width cards */}
        <div className="relative w-full min-w-0">
          {/* Continuous vertical line */}
          <div
            className="absolute left-[13px] sm:left-[15px] top-2 bottom-2 w-px z-0"
            style={{ background: "linear-gradient(to bottom, #FF4D1A50, #FF8C0038, transparent)" }}
            aria-hidden
          />

          <ul className="relative z-[1] space-y-6 sm:space-y-10 list-none m-0 p-0">
            {experiences.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${i}`}
                className="relative pl-9 sm:pl-11 min-w-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[5px] sm:left-[7px] top-5 sm:top-6 z-[2] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#080808] flex-shrink-0"
                  style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}90` }}
                  aria-hidden
                />

                <button
                  type="button"
                  onClick={() => setSelected(exp)}
                  className="w-full min-w-0 text-left glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 group hover:shadow-xl transition-all active:scale-[0.99]"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3 mb-1">
                    <span
                      className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full w-fit"
                      style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}35` }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap sm:order-last">{exp.period}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mt-2 mb-0.5 leading-snug break-words">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium break-words" style={{ color: exp.color }}>
                    {exp.company}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-500 mb-2 sm:mb-3">{exp.location}</p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 break-words">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2 sm:mb-3">
                    {exp.skills.slice(0, 5).map((s) => (
                      <span key={s} className="tech-badge text-[10px] sm:text-[11px]">
                        {s}
                      </span>
                    ))}
                    {exp.skills.length > 5 && (
                      <span className="tech-badge text-[10px] sm:text-[11px]">+{exp.skills.length - 5} more</span>
                    )}
                  </div>

                  <p
                    className="text-[10px] sm:text-xs flex items-center gap-1 group-hover:gap-2 transition-all font-medium"
                    style={{ color: exp.color }}
                  >
                    Read more <HiArrowRight className="flex-shrink-0" />
                  </p>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass-card rounded-t-2xl sm:rounded-3xl w-full max-w-2xl max-h-[92dvh] sm:max-h-[85vh] overflow-y-auto overscroll-contain p-4 sm:p-7 shadow-2xl mt-auto sm:mt-0 safe-pb"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start gap-3 mb-4 sm:mb-5">
                <div className="min-w-0 flex-1">
                  <span
                    className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block"
                    style={{
                      background: `${selected.color}15`,
                      color: selected.color,
                      border: `1px solid ${selected.color}35`,
                    }}
                  >
                    {selected.type}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-white mt-1 leading-tight break-words">
                    {selected.role}
                  </h2>
                  <p className="text-sm font-semibold mt-1 break-words" style={{ color: selected.color }}>
                    {selected.company}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                    {selected.location} · {selected.period}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-white/5 transition-all flex-shrink-0 touch-manipulation"
                  aria-label="Close"
                >
                  <HiX size={22} />
                </button>
              </div>

              <ul className="space-y-3 mb-5 sm:mb-6">
                {selected.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-200 leading-relaxed">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: selected.color }}
                    />
                    <span className="min-w-0 break-words">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selected.skills.map((s) => (
                  <span key={s} className="tech-badge text-[10px] sm:text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
