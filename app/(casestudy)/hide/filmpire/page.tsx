import {
  FilmpireHero,
  FilmpireRole,
  FilmpireTech,
  FilmpireDescription,
  FilmpireProblem,
  FilmpireFigmaDesign,
  FilmpireProcess,
  FilmpireChallenges,
  FilmpireCaseStudiesOther,
  Contact,
  Footer,
  CaseStudiesHero
} from "@/components";

const filmpire = () => {
  return (
    <main className="dark:bg-[#151E2C] bg-[#FFFFFF] w-full">
        <FilmpireHero />
        <FilmpireRole />
        <FilmpireTech />
        <FilmpireDescription />
        <FilmpireProblem />
        <FilmpireFigmaDesign />
        <FilmpireProcess />
        <FilmpireChallenges />
        <FilmpireCaseStudiesOther />
        <Contact />
        <Footer />
    </main>
  );
};

export default filmpire;
