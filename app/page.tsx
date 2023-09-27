import { 
  Hero,
  Skills,
  Services,
  FeaturedProjects,
  Recommendations,
  Contact,
  Footer,
} from "../components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F6F6F6] w-full">
      <Hero />
      <Skills />
      <Services />
      <FeaturedProjects />
      <Recommendations />
      <Contact />
      <Footer />
    </main>
  )
}
