import { HipnodeHero, HipnodeRole, HipnodeTech, HipnodeDescription, HipnodeProblem, HipnodeFigmaDesign, HipnodeProcess, HipnodeChallenges, HipnodeCaseStudiesOther, Contact, Footer } from "@/components"

const hipnode = () => {
  return (
    <main>
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
    </main>
  )
}

export default hipnode