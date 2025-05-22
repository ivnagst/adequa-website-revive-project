
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Roberto",
    position: "Empresário, Setor de Varejo",
    content: "A Adequa transformou completamente a gestão contábil da minha empresa. Hoje temos mais clareza sobre nossa situação financeira e conseguimos tomar decisões mais assertivas. Recomendo fortemente.",
    rating: 5
  },
  {
    name: "Ana Silva",
    position: "Diretora, Empresa de Tecnologia",
    content: "Trabalhar com a Adequa nos trouxe tranquilidade e segurança. Estão sempre disponíveis para esclarecer nossas dúvidas e nos ajudam a encontrar as melhores soluções para nosso negócio.",
    rating: 5
  },
  {
    name: "Marcelo Santos",
    position: "Proprietário, Restaurante",
    content: "Desde que contratamos a Adequa, conseguimos reduzir significativamente nossa carga tributária de forma legal. O atendimento personalizado faz toda a diferença.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    position: "Gerente Financeira, Indústria",
    content: "Profissionais extremamente capacitados e atualizados. Nos mantêm informados sobre mudanças na legislação e como elas impactam nosso negócio. Parceria de valor inestimável.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira os depoimentos de quem já experimentou nossos serviços e transformou a gestão contábil do seu negócio.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view - show multiple testimonials */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view - carousel */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonials[currentIndex].content}"</p>
              <div>
                <p className="font-medium text-gray-900">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                className="p-2 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50"
                onClick={prevSlide}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="p-2 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50"
                onClick={nextSlide}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full ${
                    index === currentIndex ? 'bg-adequa-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
