
import { Check, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Adequa Contabilidade
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Há mais de 10 anos no mercado, a Adequa Contabilidade atende empresas de diversos 
              segmentos com soluções contábeis personalizadas e atendimento humanizado.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Nossa missão é simplificar a gestão contábil e financeira dos nossos clientes, permitindo 
              que foquem no crescimento do seu negócio com tranquilidade e segurança.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-adequa-light rounded-full mr-4">
                  <Check size={20} className="text-adequa-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-xl text-gray-800 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Entendemos as necessidades específicas do seu negócio</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-adequa-light rounded-full mr-4">
                  <Award size={20} className="text-adequa-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-xl text-gray-800 mb-1">Equipe Especializada</h4>
                  <p className="text-gray-600">Profissionais qualificados e em constante atualização</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-adequa-light rounded-full mr-4">
                  <Clock size={20} className="text-adequa-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-xl text-gray-800 mb-1">Suporte Contínuo</h4>
                  <p className="text-gray-600">Acompanhamento proativo e atendimento ágil</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-adequa-primary mb-2">10+</div>
                <div className="text-gray-700 font-medium">Anos de experiência</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-adequa-primary mb-2">300+</div>
                <div className="text-gray-700 font-medium">Clientes satisfeitos</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-adequa-primary mb-2">15+</div>
                <div className="text-gray-700 font-medium">Especialistas</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-adequa-primary mb-2">98%</div>
                <div className="text-gray-700 font-medium">Taxa de satisfação</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-adequa-primary text-white rounded-lg">
              <h4 className="text-xl font-bold mb-3">Nossa Visão</h4>
              <p>Ser referência em contabilidade consultiva, oferecendo soluções que vão além do cumprimento de obrigações legais, contribuindo efetivamente para o sucesso e crescimento dos nossos clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
