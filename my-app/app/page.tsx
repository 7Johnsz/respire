import Impacts from "@/components/impacts"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Hero from "@/components/hero"
import { Heart } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen tracking-tight">
      <div className="bg-gradient-to-br from-raisin-black via-feldgrau to-sea-green">
        <Navbar />      
        <Hero />
      </div>
      <About />

      <div className="bg-raisin-black text-white py-16 px-6 text-center">
        <Heart className="w-16 h-16 mx-auto mb-4 text-sage" />
        <h1 className="text-4xl font-[800]">O próximo respiro pode ser mais leve</h1>
        <h2 className="mt-4 text-[18px]">— para você e para o planeta.</h2>
      </div>

      <Impacts />
      <Footer />
    </div>
  )
}
