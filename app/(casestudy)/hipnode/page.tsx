import {
  HipnodeHero,
  HipnodeRole,
  HipnodeTech,
  HipnodeDescription,
  HipnodeProblem,
  HipnodeFigmaDesign,
  HipnodeProcess,
  HipnodeChallenges,
  HipnodeCaseStudiesOther,
  Contact,
  Footer,
  CaseStudiesHero,
} from "@/components";

const hipnode = () => {
  return (
    <main className="dark:bg-[#192333] bg-[#FFFFFF] w-full">
        <CaseStudiesHero />
        <HipnodeRole />
        <HipnodeTech />
        <HipnodeDescription />
        <HipnodeProblem />
        <HipnodeFigmaDesign />
        <HipnodeProcess />
        <HipnodeChallenges />
        <HipnodeCaseStudiesOther />
        <Contact />
        <Footer />
    </main>
  );
};

export default hipnode;
