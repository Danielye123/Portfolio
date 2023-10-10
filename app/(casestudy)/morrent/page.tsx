import { MorrentHero, MorrentRole, MorrentTech, MorrentDescription, MorrentProblem, MorrentFigmaDesign, MorrentProcess, MorrentChallenges, MorrentCaseStudiesOther, Contact, Footer } from "@/components"

const morrent = () => {
  return (
    <main>
        <MorrentHero />
        <MorrentRole />
        <MorrentTech />
        <MorrentDescription />
        <MorrentProblem />
        <MorrentFigmaDesign />
        <MorrentProcess />
        <MorrentChallenges />
        <MorrentCaseStudiesOther />
        <Contact />
        <Footer />
    </main>
  )
}

export default morrent