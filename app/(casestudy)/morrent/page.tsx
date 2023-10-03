import { MorrentHero, MorrentRole, MorrentTech, MorrentDescription, MorrentProblem, MorrentFigmaDesign, MorrentProcess, MorrentChallenges } from "@/components"

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
    </main>
  )
}

export default morrent