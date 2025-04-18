import Hero from "./portfolio-components/hero"
import Gallery from "./portfolio-components/gallery"
import Portfolio from "./portfolio-components/portfolio"
import Contact from "./portfolio-components/contact"
import Footer from "./portfolio-components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}