import Image from 'next/image'
import logo from '@/public/logo.png'
import { Button } from '@/components/ui/button'
import { BotMessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() { 
    return (
        <nav className="flex items-center justify-between px-6 py-4 lg:px-22 relative z-10">
          <div className="flex items-center gap-2">
            <Image src={logo} width={45} height={45} alt="logo"/>
            <span className="text-white font-semibold text-lg">Respire</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-ash-gray hover:text-white transition-colors">
              Impactos
            </Link>
            <Link href="#" className="text-ash-gray hover:text-white transition-colors">
              Protótipos
            </Link>
            <Link href="#" className="bg-sage flex hover:bg-sea-green text-raisin-black font-medium px-6 py-2 rounded-full transition-colors">
              <BotMessageSquare className='mr-3' /> Precisa de ajuda?
            </Link>
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
    )
}