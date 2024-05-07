import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import 'animate.css';

export default function Home() {
  return (
    <main>
      {/* Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
