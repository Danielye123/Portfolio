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
} from "@/components";

const hipnode = () => {
  return (
    <main className="dark:bg-[#192333] bg-[#F3F8FF] w-full">
      <div className="container">
        <HipnodeHero />
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
      </div>
    </main>
  );
};

export default hipnode;
