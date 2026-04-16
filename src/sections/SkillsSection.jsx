import React, { useRef } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  { title: "Programming Languages", icon: "⌨️", color: "#FF4D1A", items: ["Python", "Java", "C", "C++", "Bash", "R", "C#"] },
  { title: "Machine Learning",       icon: "🧠", color: "#FF6B35", items: ["Regression", "Classification", "Clustering", "Decision Trees", "MLOps", "MLflow", "Model Evaluation"] },
  { title: "Deep Learning & Gen AI", icon: "⚡", color: "#FF8C00", items: ["PyTorch", "TensorFlow", "Keras", "CNNs", "LLMs", "Fine-tuning"] },
  { title: "NLP",                    icon: "💬", color: "#FFA500", items: ["Transformers", "Hugging Face", "NER", "Sentiment Analysis", "Text Preprocessing"] },
  { title: "Data & Visualization",   icon: "📊", color: "#FFB347", items: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "Power BI", "Excel"] },
  { title: "Computer Vision",        icon: "👁️", color: "#FF6B35", items: ["OpenCV", "YOLO", "Image Classification", "Object Detection", "Model Fine-tuning"] },
  { title: "Web & Frameworks",       icon: "🌐", color: "#FF8C00", items: ["React", "Next.js", "React Native", "Node.js", "Express", "TypeScript", "Redux"] },
  { title: "Tools & Cloud",          icon: "☁️", color: "#FF4D1A", items: ["AWS", "Docker", "Git", "GitHub", "SageMaker", "Lambda", "EC2", "S3"] },
  { title: "Databases",              icon: "🗄️", color: "#FFD700", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "pgvector"] },
  { title: "CS Fundamentals",        icon: "🔬", color: "#FFC107", items: ["Data Structures", "Algorithms", "Operating Systems", "System Design"] },
];

const TiltCard = ({ children, color }) => {
  const ref = useRef(null);

  const move = (e) => {
    const c = ref.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    const rx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * 8;
    const ry = ((r.width / 2 - (e.clientX - r.left)) / (r.width / 2)) * 8;
    c.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    c.style.boxShadow = `0 20px 50px ${color}25, 0 0 0 1px ${color}28`;
  };

  const leave = () => {
    const c = ref.current;
    if (!c) return;
    c.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    c.style.boxShadow = "";
  };

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} style={{ transition: "transform 0.18s ease, box-shadow 0.18s ease" }}>
      {children}
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => (
  <section id="skills" className="relative py-16 sm:py-24 px-3 sm:px-4 overflow-x-hidden">
    <div
      className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none blur-3xl"
      style={{ background: "radial-gradient(circle, #FF8C00, transparent 70%)" }}
    />
    <div className="max-w-7xl mx-auto">
      <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#FF8C00" }}>What I know</p>
        <h2 className="section-heading text-white">Technical <span className="gradient-text">Skills</span></h2>
        <div className="section-divider" />
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={i}
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: (i % 4) * 0.07 }}
          >
            <TiltCard color={g.color}>
              <div className="glass-card rounded-2xl p-5 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${g.color}12`, border: `1px solid ${g.color}28` }}
                  >
                    {g.icon}
                  </div>
                  <h3 className="text-sm font-bold leading-tight" style={{ color: g.color }}>{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-300"
                      style={{ background: `${g.color}0e`, border: `1px solid ${g.color}22` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
