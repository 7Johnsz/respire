import { Heart, ChevronDown, Zap, LeafIcon, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "@/public/logo.png"
import nature from "@/public/nature.jpeg"
import About from "@/components/about"

export default function Component() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-raisin-black via-feldgrau to-sea-green">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <Image src={logo} width={45} height={45} alt="logo"/>
            <span className="text-white font-semibold text-lg">Respire</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-ash-gray hover:text-white transition-colors">
              Como funciona
            </a>
            <a href="#" className="text-ash-gray hover:text-white transition-colors">
              Benefícios
            </a>
            <a href="#" className="text-ash-gray hover:text-white transition-colors">
              IA
            </a>
            <Button className="bg-sage hover:bg-sea-green text-raisin-black font-medium px-6 py-2 rounded-full transition-colors">
              Comece
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-ash-gray">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
          <div className="mb-5">
            <Image src={logo} width={100} height={100} alt="logo"/>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Respire</h1>

          <p className="text-sage text-xl md:text-2xl mb-8 font-medium">Respire. Reflita. Reaja</p>

          <p className="text-ash-gray text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Transforme o descarte do seu vape em um ato de saúde, consciência e impacto positivo.
          </p>

          <Button className="bg-sage hover:bg-sea-green text-raisin-black font-medium px-8 py-3 rounded-full text-lg transition-colors mb-16">
            Comece Agora
          </Button>

          <div className="flex flex-col items-center text-ash-gray text-sm">
            <span className="mb-2">Role para descobrir como funciona</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-ash-gray py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-raisin-black mb-4">Seu impacto em tempo real</h2>
            <p className="text-feldgrau text-lg md:text-xl max-w-2xl mx-auto">
              Acompanhe como suas ações estão transformando o mundo
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-sea-green rounded-2xl p-8 text-center text-white border">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                12<span className="text-2xl font-medium">kg</span>
              </div>
              <p className="text-lg opacity-90">de lixo eletrônico economizado</p>
            </div>

            {/* Card 2 */}
            <div className="bg-sea-green rounded-2xl p-8 text-center text-white border">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                0.8<span className="text-2xl font-medium">anos</span>
              </div>
              <p className="text-lg opacity-90">de vida estimados desde seu último descarte</p>
            </div>

            {/* Card 3 */}
            <div className="bg-sea-green rounded-2xl p-8 text-center text-white border">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                18<span className="text-2xl font-medium">baterias</span>
              </div>
              <p className="text-lg opacity-90">a menos no ambiente</p>
            </div>
          </div>

          {/* Collective Impact */}
          <div className="bg-sage/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 text-feldgrau">
              <Zap className="w-6 h-6 text-sage" />
              <span className="text-lg font-medium">
                Impacto coletivo: <span className="font-bold text-raisin-black">2.847 vapes</span> descartados
                corretamente esta semana
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-raisin-black text-white py-16 px-6 text-center">
        <Heart className="w-16 h-16 mx-auto mb-4 text-sage" />
        <h1 className="text-4xl font-[800]">O próximo respiro pode ser mais leve</h1>
        <h2 className="mt-4 text-[18px]">— para você e para o planeta.</h2>
      </div>

      <About />

    </div>
  )
}
