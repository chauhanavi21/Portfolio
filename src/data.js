export const profile = {
  name: "Avi Chauhan",
  location: "Baton Rouge, LA",
  email: "chauhanavi2311@gmail.com",
  phone: "332-203-6732",
  github: "https://github.com/chauhanavi21",
  linkedin: "https://www.linkedin.com/in/developeravichauhan",
  resume: "/Avi_Chauhan_Resume.pdf",
  tagline: "Software engineer shipping AI & cloud systems",
  intro:
    "I build production AI pipelines, cloud-native platforms and full-stack apps that scale, perform and ship with confidence.",
  about:
    "Software engineer who turns messy, ambitious problems into reliable production systems, from RAG pipelines serving whole engineering teams to enterprise cloud migrations.",
};

export const nav = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// Highlights: drive the hero strip, the impact card and the "now" cards.
export const highlights = [
  { value: 38, prefix: "−", suffix: "%", decimals: 0, label: "Inference latency", note: "ONNX export + INT8 quantization", palette: ["#9aa3ad", "#2b3138", "#0d0f12"] },
  { value: 5000, prefix: "", suffix: "+", decimals: 0, label: "Documents served", note: "Production hybrid FAISS + BM25 RAG", palette: ["#e08a3c", "#7a2f10", "#150a05"] },
  { value: 92, prefix: "", suffix: "%", decimals: 0, label: "Model accuracy", note: "Up from 71% fine-tuning VGG-16", palette: ["#6f8790", "#c49a55", "#0b1013"] },
  { value: 0.86, prefix: "", suffix: "", decimals: 2, label: "Faithfulness score", note: "Ragas eval on the Knowledge Copilot", palette: ["#d9b3b3", "#ff6a3d", "#150a0a"] },
];

export const projects = [
  {
    title: "CLAWD",
    year: "2025",
    palette: ["#9ca3aa", "#3b4249", "#101214"],
    desc: "A local AI coding agent that plans, edits and tests changes across a repo through LLM tool calling, judging when to trust the model's proposed changes.",
    tech: ["Python", "LangChain", "Tool Calling", "CLI"],
    link: "https://github.com/chauhanavi21",
    linkLabel: "View on GitHub",
  },
  {
    title: "Developer Platform Portal",
    year: "2025",
    palette: ["#e58a33", "#8d3a12", "#180b04"],
    desc: "A Backstage internal developer portal cataloging 8+ microservices with golden-path templates, delivered via GitHub Actions, ArgoCD and AWS EKS.",
    tech: ["Backstage", "Terraform", "EKS", "ArgoCD", "Grafana"],
  },
  {
    title: "Enterprise AI Knowledge Copilot",
    year: "2025",
    palette: ["#6b8089", "#c7a059", "#0c1115"],
    desc: "A self-hosted AI platform with 3+ connectors and 1,000+ indexed chunks. Celery + Redis ingestion, pgvector retrieval, Langfuse tracing, Ragas evals.",
    tech: ["FastAPI", "Next.js", "pgvector", "Celery", "Langfuse"],
  },
  {
    title: "Local-First Collaborative Whiteboard",
    year: "2025",
    palette: ["#c7bcc8", "#ff7c4a", "#14090a"],
    desc: "A real-time whiteboard for 10+ collaborators on Yjs CRDTs with sub-100ms sync, offline-first IndexedDB, and full session restore from PostgreSQL snapshots.",
    tech: ["React", "TypeScript", "Yjs", "WebSockets", "Canvas"],
  },
];

export const skills = [
  {
    title: "AI & GenAI",
    tags: ["RAG", "LangChain", "Tool Calling"],
    blurb: "Production RAG, LLM tool calling and evaluation, from hybrid retrieval to faithfulness scoring.",
    items: ["LangChain", "LLM Tool Calling", "Prompt Engineering", "GenAI Coding Assistants", "FAISS", "BM25", "Sentence Transformers", "ONNX", "Ragas", "Langfuse"],
    palette: ["#9aa3ad", "#2b3138", "#0d0f12"],
  },
  {
    title: "Backend & APIs",
    tags: ["FastAPI", "Node.js", "REST"],
    blurb: "Fast, well-tested services and async pipelines with clean REST and WebSocket interfaces.",
    items: ["FastAPI", "Node.js", "REST APIs", "Celery", "WebSockets"],
    palette: ["#e08a3c", "#7a2f10", "#150a05"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["AWS", "Azure", "Kubernetes"],
    blurb: "Infrastructure as code, GitOps and CI/CD on AWS and Azure, with observability built in.",
    items: ["AWS EC2", "S3", "Lambda", "EKS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "OpenTelemetry", "Prometheus", "Grafana"],
    palette: ["#6f8790", "#c49a55", "#0b1013"],
  },
  {
    title: "Data & Storage",
    tags: ["PostgreSQL", "Redis", "pgvector"],
    blurb: "Relational, document and vector stores, picked for the access pattern, not the hype.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "pgvector"],
    palette: ["#d9b3b3", "#ff6a3d", "#150a0a"],
  },
  {
    title: "Languages & Craft",
    tags: ["Python", "TypeScript", "Go"],
    blurb: "Strong CS fundamentals across a range of languages, with a code-review mindset.",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "C#", "Go", "Bash", "Data Structures", "Algorithms", "OOD", "Debugging", "Code Review"],
    palette: ["#9ca3aa", "#3b4249", "#101214"],
  },
];

export const process = [
  { title: "Scope", text: "Understand the problem, constraints and current architecture before touching code.", icon: "zap" },
  { title: "Architect", text: "Design for scale: the right services, data flow and failure modes.", icon: "target" },
  { title: "Ship", text: "Containerize, automate with CI/CD and deploy with zero-touch releases.", icon: "layers" },
  { title: "Measure", text: "Evaluate with real metrics (latency, accuracy, faithfulness), then iterate.", icon: "gauge" },
];

export const experience = [
  {
    company: "IBM Consulting",
    role: "Associate Application Developer",
    period: "Sep 2026 – Present",
    mode: "On-site",
    tags: ["Azure", "Migration", "Architecture"],
    points: [
      "Partnered with an enterprise client on a two-week engagement to migrate their software from a legacy on-premises setup to Microsoft Azure, scoping requirements against the current architecture.",
      "Re-architected core application components for Azure, replacing legacy infrastructure dependencies with Azure-native services for a scalable, cloud-first deployment.",
      "Found and fixed legacy workflow bottlenecks uncovered during the migration, streamlining operations and improving system efficiency.",
    ],
    palette: ["#9aa3ad", "#2b3138", "#0d0f12"],
  },
  {
    company: "Silent Infotech Pvt Ltd",
    role: "Software Engineer",
    period: "Apr 2022 – May 2024",
    mode: "On-site",
    tags: ["RAG", "ONNX", "AWS Lambda"],
    points: [
      "Engineered a production RAG pipeline over 5,000+ internal documents (FastAPI, Sentence Transformers, hybrid FAISS + BM25) serving 20+ engineers and cutting manual lookup time by 60%+.",
      "Optimized model serving with ONNX export and INT8 quantization, reducing inference latency by 38% while holding accuracy thresholds.",
      "Designed the end-to-end data pipeline and beat the baseline LLM by 38% on internal faithfulness benchmarks.",
      "Containerized with Docker, deployed on AWS Lambda + S3, and built 4-stage GitHub Actions CI/CD for zero-touch deploys.",
    ],
    palette: ["#e08a3c", "#7a2f10", "#150a05"],
  },
  {
    company: "Opus Technologies",
    role: "Software Engineering Intern",
    period: "Sep 2021 – Feb 2022",
    mode: "Remote",
    tags: ["VGG-16", "scikit-learn", "Pandas"],
    points: [
      "Fine-tuned VGG-16 on a 100K+ image dataset across 5 disease classes, lifting test accuracy from 71% to 92% with targeted augmentation and class-weighting.",
      "Built preprocessing and evaluation pipelines that cut experiment cycle time 3x across 15+ model configurations.",
      "Delivered a modular, documented Python codebase that let the team onboard 2 more datasets in under 4 hours each.",
    ],
    palette: ["#6f8790", "#c49a55", "#0b1013"],
  },
];

export const education = [
  { school: "State University of New York at Albany", degree: "MS, Computer and Information Sciences", gpa: "3.4", period: "Aug 2024 – May 2026", place: "Albany, NY" },
  { school: "Indus University", degree: "BE, Computer Science and Engineering", gpa: "3.7", period: "Sep 2020 – May 2024", place: "Ahmedabad, India" },
];

export const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified AI Practitioner",
  "IBM Generative and Agentic AI Foundation",
];

export const faqs = [
  { q: "What are you working on right now?", a: "At IBM Consulting I'm helping an enterprise client migrate legacy on-prem software to Microsoft Azure, re-architecting components onto Azure-native services." },
  { q: "What do you specialize in?", a: "Production AI systems (RAG, evaluation, model optimization), cloud and DevOps on AWS and Azure, and full-stack apps with FastAPI, Node.js and React." },
  { q: "Are you open to new roles?", a: "Yes, I'm open to software engineering roles and interesting projects. The fastest way to reach me is email." },
  { q: "Which tools do you reach for first?", a: "Python and TypeScript, FastAPI, PostgreSQL (with pgvector), Docker, Terraform and GitHub Actions, then whatever the problem needs." },
  { q: "Where are you based?", a: "Baton Rouge, Louisiana. I've also worked remotely and on-site with teams across time zones." },
];
