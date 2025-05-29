import { Zap } from "lucide-react";

export default function Impacts() {
    return (
        <div className="bg-ash-gray py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-raisin-black mb-4">Seu impacto em tempo real</h2>
                    <p className="text-feldgrau text-lg md:text-xl max-w-2xl mx-auto">
                    Acompanhe como suas ações estão transformando o mundo
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-sea-green rounded-2xl p-8 text-center text-white border">
                    <div className="text-5xl md:text-6xl font-bold mb-2">
                        12<span className="text-2xl font-medium">kg</span>
                    </div>
                    <p className="text-lg opacity-90">de lixo eletrônico economizado</p>
                    </div>

                    <div className="bg-sea-green rounded-2xl p-8 text-center text-white border">
                    <div className="text-5xl md:text-6xl font-bold mb-2">
                        0.8<span className="text-2xl font-medium">anos</span>
                    </div>
                    <p className="text-lg opacity-90">de vida estimados desde seu último descarte</p>
                    </div>

                    <div className="bg-sea-green rounded-2xl p-8 text-center text-white border">
                    <div className="text-5xl md:text-6xl font-bold mb-2">
                        18<span className="text-2xl font-medium">baterias</span>
                    </div>
                    <p className="text-lg opacity-90">a menos no ambiente</p>
                    </div>
                </div>

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
    )
}