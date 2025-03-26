import "./App.css";
import AboutMain from "./components/AboutSection/AboutMain";
import ExperienceMain from "./components/ExperienceSection/experienceMain";
import HelperSection from "./components/HelperSection";
import HeroGradient from "./components/HeroSection/HeroGradient";
import HeroMain from "./components/HeroSection/HeroMain";
import SubHeroSection from "./components/HeroSection/SubHeroSection";
import NavbarMain from "./components/Navbar/NavbarMain";
import ProjectMain from "./components/ProjectSection/ProjectMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/SkillsSection/SubSkills";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain />
      <HelperSection />
    </main>
  );
}

export default App;
