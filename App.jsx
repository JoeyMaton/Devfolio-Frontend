import "./styles/main.css";
import { Header } from "./components/Header.jsx";
import { HeroSection} from "./components/HeroSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import { SkillsSection } from "./components/SkillSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}