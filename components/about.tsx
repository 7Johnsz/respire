import { Zap, Leaf, Heart } from "lucide-react";

export default function About() {
  return (
      <section className="bg-white py-12 px-4 md:py-16 lg:py-24" id="sobre">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] text-raisin-black mb-4 md:mb-6">
              <span className="border mr-2 sm:mr-4"></span>Tecnologia que respira
            </h2>
            <p className="text-feldgrau text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
              Desenvolvemos um <span className="text-sea-green font-semibold">biofilme inteligente</span> a partir do eletrólito líquido presente nos cigarros eletrônicos. Essa inovação transforma resíduos tóxicos em soluções sustentáveis para saúde, meio ambiente e educação.
            </p>
            <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-2xl overflow-hidden">
              <video
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jqwrc8dae0b8v0rkmsw63mrf%2Ftask_01jqwrc8dae0b8v0rkmsw63mrf_genid_02dd8683-52e4-4e49-bbc5-1ca93b16e153_25_04_03_02_43_250878%2Fvideos%2F00000_329754525%2Fsource.mp4?st=2025-05-29T01%3A29%3A35Z&se=2025-06-04T02%3A29%3A35Z&sks=b&skt=2025-05-29T01%3A29%3A35Z&ske=2025-06-04T02%3A29%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=fdAArVGEHGlXFbA%2F9W0o%2BBBoDaC2XF4304pLAjAoYRA%3D&az=oaivgprodscus"
                aria-label="Tecnologia sustentável"
                className="object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-sage/10 hover:bg-sage/20 transition-colors rounded-xl shadow-sm p-4 sm:p-5 text-left">
              <div className="mb-3">
                <div className="w-8 h-8 bg-sage/30 text-sea-green rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-raisin-black mb-1">Eletroquímica aplicada</h3>
              <p className="text-feldgrau text-sm leading-relaxed">
                O eletrólito dos vapes, normalmente tóxico, é reaproveitado como base para o biofilme, com propriedades sensoriais e condutivas.
              </p>
            </div>

            <div className="bg-sage/10 hover:bg-sage/20 transition-colors rounded-xl shadow-sm p-4 sm:p-5 text-left">
              <div className="mb-3">
                <div className="w-8 h-8 bg-sage/30 text-sea-green rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-raisin-black mb-1">Película ecológica</h3>
              <p className="text-feldgrau text-sm leading-relaxed">
                Combinamos o eletrólito reaproveitado a compostos naturais, criando uma película funcional e biodegradável.
              </p>
            </div>

            <div className="bg-sage/10 hover:bg-sage/20 transition-colors rounded-xl shadow-sm p-4 sm:p-5 text-left">
              <div className="mb-3">
                <div className="w-8 h-8 bg-sage/30 text-sea-green rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-raisin-black mb-1">Impacto social</h3>
              <p className="text-feldgrau text-sm leading-relaxed">
                Esse biofilme pode ser usado em sensores ambientais, hortas urbanas e sistemas educacionais, promovendo inclusão e sustentabilidade.
              </p>
            </div>

            <div className="bg-sage/10 hover:bg-sage/20 transition-colors rounded-xl shadow-sm p-4 sm:p-5 text-left">
              <div className="mb-3">
                <div className="w-8 h-8 bg-sage/30 text-sea-green rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-raisin-black mb-1">Sustentabilidade</h3>
              <p className="text-feldgrau text-sm leading-relaxed">
                A tecnologia reduz o descarte inadequado de vapes, transformando resíduos em soluções ecológicas e inovadoras.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}