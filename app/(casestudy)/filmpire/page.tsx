import { FilmpireHero, FilmpireRole, FilmpireTech, FilmpireDescription, FilmpireProblem, FilmpireFigmaDesign, FilmpireProcess, FilmpireChallenges } from "@/components"

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
    </main>
  )
}

export default filmpire