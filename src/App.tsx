import Navbar from "./components/Navbar"
import Hero from "components/Hero"
import About from "components/About"
import Skills from "components/Skills"
import Projects from "components/Project"
import ProjectsMore from "./components/ProjectMore"
import Footer from "components/Footer"
import MouseEffects from "./components/MouseEffects"

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectsMore />
        </div>
        <Footer />
        <MouseEffects />
    </div>
  );
}

export default Home;