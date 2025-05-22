
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-adequa-primary to-adequa-secondary py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMThoNjB2NjBIMTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Contabilidade que se <span className="text-adequa-light">adequa</span> ao seu negócio
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8">
              Soluções contábeis personalizadas para empresas de todos os portes. Simplifique sua gestão financeira e foque no que realmente importa: o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#servicos" className="btn-primary">
                Nossos Serviços
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contato" className="btn-secondary bg-white/20 border-white/40 text-white hover:bg-white/30">
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-float">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 max-w-md">
              <div className="text-center">
                <div className="text-white mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Primeira Consulta Gratuita</h3>
                <p className="text-white/80 mb-4">
                  Entenda como podemos ajudar seu negócio com uma análise personalizada.
                </p>
                <a href="#contato" className="inline-block bg-white text-adequa-primary font-medium px-6 py-2 rounded-lg hover:bg-adequa-light transition-colors duration-300">
                  Agendar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
