// pa
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroFactory from "@/components/sections/HeroFactory";
import Solutions from "@/components/sections/Solutions";
import Systems from "@/components/sections/Systems";
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
        <Systems />
        <Solutions />
        <Process />
        <Company />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}