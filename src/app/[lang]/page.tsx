import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function LangHome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
