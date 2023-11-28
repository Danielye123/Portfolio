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
} from "@/components";

const filmpire = () => {
  return (
    <main className="dark:bg-[#151E2C] bg-[#F3F8FF] w-full">
      <div className="container">
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
      </div>
    </main>
  );
};

export default filmpire;
