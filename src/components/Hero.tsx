
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-adequa-primary to-adequa-secondary py-16 md:py-24">
      {/* Banner background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMThoNjB2NjBIMTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Main banner content */}
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
          
          {/* Banner image side */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Large banner image */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Equipe de contabilidade profissional"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adequa-primary/60 to-transparent rounded-lg"></div>
              </div>
              
              {/* Floating promo card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-adequa-light/20 max-w-xs transform rotate-2 animate-float">
                <div className="text-center">
                  <div className="text-adequa-primary mb-2 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-adequa-dark mb-1">Primeira Consulta Gratuita</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Análise personalizada para seu negócio
                  </p>
                  <a href="#contato" className="inline-block bg-adequa-primary text-white font-medium px-4 py-2 rounded-lg hover:bg-adequa-dark transition-colors duration-300 text-sm">
                    Agendar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-[60px] fill-white">
          <path d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
