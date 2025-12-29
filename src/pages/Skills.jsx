import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const skillGroups = [
  {
    title: "Programming Languages",
    items: "Python, Java, C, C++, Bash, R, C#",
  },
  {
    title: "Machine Learning",
    items:
      "Regression, Classification, Clustering, Decision Trees, Data Preprocessing, Pipelines, CI/CD pipelines, Model Training & Evaluation, MLOps, MLflow",
  },
  {
    title: "Deep Learning & Generative AI",
    items: "PyTorch, TensorFlow, Keras, CNNs, LLMs",
  },
  {
    title: "NLP",
    items:
      "Text Preprocessing, NER, Sentiment Analysis, Transformers, Hugging Face",
  },
  {
    title: "Data Analysis & Visualization",
    items: "Pandas, NumPy, Matplotlib, Scikit-Learn, Power BI, Excel",
  },
  {
    title: "Computer Vision",
    items: "Customizing & fine-tuning models for image classification",
  },
  {
    title: "Web / Frameworks",
    items:
      "Human-Computer Interaction, JavaScript, TypeScript, HTML5, CSS3, React.js, React Native, Next.js, Express.js, Node.js, Redux",
  },
  {
    title: "Tools & Cloud",
    items:
      "Git, GitHub, Docker, Matlab, AWS (SageMaker, Lambda, EC2, S3, DynamoDB, CloudWatch, SES, EventBridge, CloudFront, EBS, EFS)",
  },
  {
    title: "CS Fundamentals",
    items:
      "Data Structures, Algorithms, Operating Systems, Systems Programming",
  },
  {
    title: "Databases",
    items: "MySQL, SQL Server, PostgreSQL",
  },
];

const Skills = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Skills</h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          A snapshot of the technologies and concepts I work with.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-[#202020] border border-gray-800 rounded-xl p-5 shadow-md"
            >
              <h2 className="text-lg font-semibold mb-2">{group.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {group.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Skills;
