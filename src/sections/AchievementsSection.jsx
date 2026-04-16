import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiStar } from "react-icons/hi";

import certSAA      from "../assets/certificates/aws-certified-solutions-architect-associate.png";
import certAIF      from "../assets/certificates/aws-certified-ai-practitioner.png";
import certAIUse    from "../assets/certificates/Exploring_Artificial_Intelligence.png";
import certFund     from "../assets/certificates/Fundamentals_of_Machine.png";
import certReact    from "../assets/certificates/frontend_developer_react.png";
import certRotaract from "../assets/certificates/rotract.jpg";

const achievements = [
  { title: "AWS Certified Solutions Architect – Associate", date: "October 11, 2025", category: "AWS Certification", icon: "☁️", color: "#FF4D1A", image: certSAA,      details: "Validated ability to design, implement, and optimize secure, scalable, and highly available architectures on AWS. Covers EC2, S3, VPC, RDS, Lambda, and more." },
  { title: "AWS Certified AI Practitioner (AIF-C01)",       date: "August 09, 2025",  category: "AWS Certification", icon: "🤖", color: "#FF8C00", image: certAIF,      details: "Scored 933/1000. Covered AI & ML fundamentals, generative AI, foundation models, responsible AI, and AI security & governance." },
  { title: "AI Use Cases & Applications",                    date: "June 26, 2025",    category: "Course Certificate", icon: "💡", color: "#FFB347", image: certAIUse,   details: "Explored real-world applications of AI in finance, healthcare, education, and startups with a strong focus on practical problem-solving." },
  { title: "Fundamentals of ML & AI",                       date: "June 04, 2025",    category: "Course Certificate", icon: "🧠", color: "#FFD700", image: certFund,    details: "Mastered core ML workflows, supervised vs unsupervised learning, model evaluation, and hands-on labs using AWS AI tools." },
  { title: "Frontend Developer – React",                    date: "2025",             category: "Certification",      icon: "⚛️", color: "#FFA500", image: certReact,   details: "Certified in React development, covering modern frontend development practices, component architecture, state management, and building scalable web applications." },
  { title: "Rotaract Club Volunteer",                       date: "2023 – 2024",      category: "Community",          icon: "🤝", color: "#FF6B35", image: certRotaract, details: "Served as Teach Director at Rotaract Club of Ahmedabad Eleos, contributing to 9+ volunteer projects focused on youth development and community education." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AchievementsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className="relative py-16 sm:py-24 px-3 sm:px-4 overflow-x-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none blur-3xl" style={{ background: "radial-gradient(circle, #FF4D1A, transparent 70%)" }} />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none blur-3xl"   style={{ background: "radial-gradient(circle, #FFD700, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#FF8C00" }}>Milestones</p>
          <h2 className="section-heading text-white">Certifications & <span className="gradient-text">Achievements</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.button
              key={i}
              className="text-left glass-card rounded-2xl p-6 group transition-all focus:outline-none"
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(item)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${item.color}12`, border: `1px solid ${item.color}28` }}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: `${item.color}12`, border: `1px solid ${item.color}28`, color: item.color }}>
                  {item.category}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1 leading-snug">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{item.date}</p>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{item.details}</p>
              <p className="text-xs mt-4 flex items-center gap-1 group-hover:gap-2 transition-all font-medium" style={{ color: item.color }}>
                <HiStar /> Click to view certificate
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${selected.color}12`, border: `1px solid ${selected.color}30` }}>
                    {selected.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full inline-block mb-1" style={{ background: `${selected.color}12`, border: `1px solid ${selected.color}30`, color: selected.color }}>
                      {selected.category}
                    </span>
                    <h2 className="text-lg font-bold text-white leading-tight">{selected.title}</h2>
                    <p className="text-xs text-gray-500 mt-0.5">{selected.date}</p>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-all ml-2 flex-shrink-0">
                  <HiX size={20} />
                </button>
              </div>

              {selected.image && (
                <div className="mb-4 rounded-2xl overflow-hidden border" style={{ borderColor: `${selected.color}20` }}>
                  <img src={selected.image} alt={selected.title} className="w-full object-contain max-h-[55vh]" />
                </div>
              )}

              <p className="text-sm text-gray-200 leading-relaxed">{selected.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;
