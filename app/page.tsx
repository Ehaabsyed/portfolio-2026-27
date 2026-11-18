import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
