import { MorrentHero, MorrentRole, MorrentTech, MorrentDescription, MorrentProblem, MorrentFigmaDesign, MorrentProcess, MorrentChallenges, MorrentCaseStudiesOther, Contact, Footer } from "@/components"

const morrent = () => {
  return (
    <main className="dark:bg-[#192333] bg-[#FFFFFF] w-full">
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