import { 
  Hero,
  Skills,
  Services,
  FeaturedProjects,
  Recommendations,
  Footer,
} from "../components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[57px] bg-[#F6F6F6] w-full">
      <Hero />
      <Skills />
      <Services />
    </main>
  )
}
