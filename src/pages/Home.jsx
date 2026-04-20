import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import AchievementsSection from "../sections/AchievementsSection";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const Home = () => {
  useDocumentMeta({
    title: "Avi Chauhan — Software Engineer & AI/ML Engineer",
    description:
      "Portfolio of Avi Chauhan — software engineer, AWS Certified Solutions Architect, and AI/ML engineer. Projects across AI, full-stack, and cloud systems.",
    canonical: "https://chauhanavi.com/",
  });

  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
    </main>
  );
};

export default Home;
