import {
  Hero,
  Skills,
  Services,
  Experience,
  FeaturedProjects,
  Recommendations,
  Contact,
  Footer,
} from "../components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-[#192333] bg-[#F3F8FF] w-full">
        <Hero />
        <Skills />
        <Services />
        <Experience />
        <FeaturedProjects />
        <Recommendations />
        <Contact />
        <Footer />
    </main>
  );
}
