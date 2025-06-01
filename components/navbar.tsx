'use client';

import { BotMessageSquare, Menu } from 'lucide-react' 
import { Button } from '@/components/ui/button' 
import logo from '@/public/logo.png'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-4 lg:px-20 relative z-10">
          <div className="flex items-center gap-2">
            <Link href="/" aria-label="Página Inicial"> 
              <Image src={logo} width={45} height={45} alt="logo Respire" />
            </Link>
            <span className="text-white font-semibold text-lg hidden sm:inline">Respire</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#sobre" className="text-ash-gray hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="#impacto" className="text-ash-gray hover:text-white transition-colors">
              Impacto
            </Link>
            <Link 
              href="https://respire.streamlit.app/" 
              className="bg-sage flex items-center hover:bg-sea-green text-raisin-black font-medium px-6 py-2 rounded-full transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BotMessageSquare className='mr-3 h-5 w-5' /> Precisa de ajuda?
            </Link>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-ash-gray hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" /> 
            </Button>
          </div>

        {isMobileMenuOpen && (
          <div className="fixed top-0 right-0 left-0 mt-16 bg-raisin-black z-[9999] rounded-b-xl shadow-2xl p-4 md:hidden">
            <Link href="#sobre" className="block px-4 py-3 text-ash-gray hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
              Sobre
            </Link>
            <Link href="#impacto" className="block px-4 py-3 text-ash-gray hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
              Impacto
            </Link>
            <Link href="https://respire.streamlit.app/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-ash-gray hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
              Precisa de ajuda?
            </Link>
          </div>
        )}
        </nav>
    )
}