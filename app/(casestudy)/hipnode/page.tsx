import { HipnodeHero, HipnodeRole, HipnodeTech, HipnodeDescription, HipnodeProblem, HipnodeFigmaDesign, HipnodeProcess, HipnodeChallenges } from "@/components"

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
    </main>
  )
}

export default hipnode