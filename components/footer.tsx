import logo from "@/public/logo.png"
import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-raisin-black text-ash-gray py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-3">
            <Image src={logo} alt="Logo Respire" width={40} height={40} />
            <span className="text-lg font-semibold text-white">Respire</span>
          </div>
          <p className="text-sm leading-relaxed max-w-md">
            Reutilizamos resíduos eletrônicos para criar soluções sustentáveis com impacto social real. Porque até o ar merece uma nova chance.
          </p>
        </div>

        <div>
            <div className="flex justify-center gap-4">
            <Link
              href="https://www.instagram.com/respireprojeto/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-feldgrau/40 pt-6 text-center text-xs text-feldgrau">
        © {new Date().getFullYear()} Respire. Todos os direitos reservados.
      </div>
    </footer>
  )
}
