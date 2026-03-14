// page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroFactory from "@/components/sections/HeroFactory";
import Solutions from "@/components/sections/Solutions";
import Results from "@/components/sections/Results";
import Process from "@/components/sections/Process";
import Company from "@/components/sections/Company";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroFactory />
        <Solutions />
        <Results />
        <Process />
        <Company />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}