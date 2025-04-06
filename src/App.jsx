import "./App.css";
import AboutMain from "./components/AboutSection/AboutMain";
import ContactMeMain from "./components/ContactSection/ContactMeMain";
import ExperienceMain from "./components/ExperienceSection/ExperienceMain";
import FooterMain from "./components/Footer/FooterMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import HeroMain from "./components/HeroSection/HeroMain";
import SubHeroSection from "./components/HeroSection/SubHeroSection";
import NavbarMain from "./components/Navbar/NavbarMain";
import ProjectMain from "./components/ProjectSection/ProjectMain";
import SkillsMain from "./components/SkillsSection/SkillsMain";
import SubSkills from "./components/SkillsSection/SubSkills";

function App() {
  return (
    <main className="font-body w-full overflow-x-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
