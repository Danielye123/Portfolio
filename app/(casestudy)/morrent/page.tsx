import { MorrentHero, MorrentRole, MorrentTech, MorrentDescription, MorrentProblem, MorrentFigmaDesign, MorrentProcess, MorrentChallenges, MorrentCaseStudiesOther, Contact, Footer } from "@/components"

const morrent = () => {
  return (
    <main className="container dark:bg-[#192333] bg-[#F3F8FF]">
      <div className="container">
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
      </div>
    </main>
  )
}

export default morrent