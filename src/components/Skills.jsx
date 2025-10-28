import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { title: 'Programming Languages', skills: 'Python, Java, C, C++, Bash, R, C#' },
  { title: 'Machine Learning', skills: 'Regression, Classification, Clustering, Decision Trees, Data Preprocessing, Pipelines, CI/CD, MLOps, MLflow' },
  { title: 'Deep Learning & Generative AI', skills: 'PyTorch, TensorFlow, Keras, CNN Model Development, LLM' },
  { title: 'Natural Language Processing', skills: 'Text Preprocessing, NER, Sentiment Analysis, Transformers, Hugging Face' },
  { title: 'Data Analysis & Visualization', skills: 'Pandas, NumPy, Matplotlib, Scikit-Learn, Power BI, Excel' },
  { title: 'Computer Vision', skills: 'Customizing and Fine-Tuning Models for Image Classification' },
  { title: 'Web Services & Frameworks', skills: 'Human-Computer Interaction, JavaScript, TypeScript, HTML5, CSS3, Ajax, React.js, React Native, Express.js, Node.js, Redux, Next.js' },
  { title: 'Tools', skills: 'Git, GitHub, Microsoft Office Suite, Docker, Open-source tools, MATLAB' },
  { title: 'AWS Services', skills: 'SageMaker, Lambda, EC2, S3, DynamoDB, CloudWatch, SES, EventBridge, CloudFront, EBS, EFS' },
  { title: 'Core CS Concepts', skills: 'Data Structures, Algorithms, Operating Systems, Systems Programming' },
  { title: 'Databases', skills: 'MySQL, SQL Server, PostgreSQL' }
]

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 text-center min-h-screen snap-start">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="bg-[#2d2d2d] p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold text-lg mb-2">{group.title}</h4>
            <p className="text-gray-300 text-sm">{group.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
