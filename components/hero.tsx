'use client';

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"
import logo from "@/public/logo.png"
import { useState, useEffect } from "react"
import Image from "next/image";

export default function Hero() {
    const [showBadge, setShowBadge] = useState(false)

    const handleHover = () => {
        setShowBadge(true)
    }

    useEffect(() => {
        if (showBadge) {
        const timer = setTimeout(() => {
            setShowBadge(false)
        }, 2000)

        return () => clearTimeout(timer)
        }
    }, [showBadge])

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
          <div className="absolute inset-0 opacity-10">
            <video
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jnms1z5affrbqcradw05qwse%2Ftask_01jnms1z5affrbqcradw05qwse_genid_ecc9e6d5-84c5-4aa3-9cad-de5f4ce17efd_25_03_06_03_51_093354%2Fvideos%2F00000_601159959%2Fsource.mp4?st=2025-05-29T01%3A29%3A35Z&se=2025-06-04T02%3A29%3A35Z&sks=b&skt=2025-05-29T01%3A29%3A35Z&ske=2025-06-04T02%3A29%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=BF1UQoSorqDKiCP8Loz0VVCr2sRuioWmFcgUHQt49RE%3D&az=oaivgprodscus"
              className="w-full h-full object-cover opacity-50"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Nature Background"
            />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="mb-5 justify-center flex">
              <Image src={logo} width={100} height={100} alt="logo"/>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Respire</h1>

            <p className="text-sage text-xl md:text-2xl mb-8 font-medium">Respire. Reflita. Reaja</p>

            <p className="text-ash-gray text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Transforme o descarte do seu vape em um ato de saúde, consciência e impacto positivo.
            </p>

            <div className="relative inline-block" onMouseEnter={handleHover}>
                <Button className="bg-sage hover:bg-sea-green text-raisin-black font-medium px-8 py-3 rounded-full text-lg transition-colors mb-4">
                    Comece Agora
                </Button>

                <AnimatePresence>
                    {showBadge && (
                    <motion.div
                        className="absolute top-[1rem] ml-4 -translate-y-1/2 bg-sea-green text-white text-sm px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                    >
                        Estamos em beta 🚧
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex flex-col items-center text-ash-gray text-sm">
              <span className="mb-2">Role para descobrir os impactos</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
    )
}