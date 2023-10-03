import { MorrentHero, MorrentRole, MorrentTech, MorrentDescription, MorrentProblem } from "@/components"

const morrent = () => {
  return (
    <main>
        <MorrentHero />
        <MorrentRole />
        <MorrentTech />
        <MorrentDescription />
        <MorrentProblem />
    </main>
  )
}

export default morrent