import Impacts from "@/components/impacts"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Hero from "@/components/hero"
import { ArrowUpRight, Heart } from "lucide-react"
import Image from "next/image"

import ai_preview from "@/public/AI.png"
import Link from "next/link"

export default function Home() {
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
        <h2 className="mt-4 text-[18px]">para você e para o planeta.</h2>
      </div>

      <div className="bg-white py-12 px-6 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          {/* Imagem à esquerda */}
          <div className="flex-shrink-0">
            <Image
              src={ai_preview}
              alt="Interface da Respire AI"
              className="rounded-2xl shadow-2xl border border-sage"
              width={500}
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-[800] text-raisin-black mb-4 md:mb-6">
              Respire AI
            </h1>
            <p className="text-feldgrau text-base sm:text-lg md:text-[21px] max-w-2xl">
              A <strong>Respire AI</strong> é uma inteligência artificial criada para acolher, orientar e transformar.  
              Ela conversa com você de forma humana, entende seus desafios e oferece estratégias reais para vencer o vício em cigarros eletrônicos.
              <br /><br />
              Mais do que um chatbot, ela é uma aliada. Ela te escuta, te entende — e mostra, em tempo real, o impacto positivo que suas escolhas estão gerando.
              <br /><br />
              Porque parar de usar vape não precisa ser solitário. E todo recomeço começa com uma conversa.
            </p>

            <Link 
              href="https://respire.streamlit.app/" 
              className="inline-flex items-center gap-2 text-feldgrau hover:text-sage mt-6 text-base font-medium transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Acessar Respire AI
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>




      <Impacts />
      <Footer />
    </div>
  )
}
