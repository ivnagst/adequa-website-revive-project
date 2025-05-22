
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-adequa-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar a gestão contábil do seu negócio?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Solicite uma avaliação gratuita e descubra como nossos serviços podem ajudar sua empresa a crescer.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a href="#contato" className="btn-secondary">
              Falar com um Especialista
            </a>
            <a href="tel:+551199999999" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              Ligar Agora
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
