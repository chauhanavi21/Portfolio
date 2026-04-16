import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import AchievementsSection from "../sections/AchievementsSection";

const Home = () => {
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
