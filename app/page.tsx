import BackgroundAnimation from "./components/BackgroundAnimation";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
// import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />

      <main>
        <HomeSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
    </>
  );
}