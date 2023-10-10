import { FilmpireHero, FilmpireRole, FilmpireTech, FilmpireDescription, FilmpireProblem, FilmpireFigmaDesign, FilmpireProcess, FilmpireChallenges, FilmpireCaseStudiesOther, Contact, Footer } from "@/components"

const filmpire = () => {
  return (
    <main>
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
  )
}

export default filmpire