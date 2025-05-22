
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ArrowRight, Users, Award, Shield, Target } from 'lucide-react';

const Empresa = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-adequa-primary to-adequa-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Conheça a Adequa Contabilidade
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Uma empresa focada em resultados e comprometida com a excelência contábil.
              </p>
            </div>
          </div>
        </section>

        {/* História */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
                <div className="w-20 h-1 bg-adequa-secondary mx-auto"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Fundada em 2010, a Adequa Contabilidade nasceu com a missão de transformar a maneira como as empresas lidam com a contabilidade, 
                  oferecendo um serviço personalizado e altamente especializado para atender às necessidades específicas de cada cliente.
                </p>
                
                <p className="mb-6">
                  Desde o início, nosso compromisso tem sido com a excelência técnica, a transparência e a construção de relacionamentos 
                  duradouros com nossos clientes. Ao longo dos anos, construímos uma reputação sólida no mercado contábil, 
                  sendo reconhecidos pela qualidade dos nossos serviços e pelo atendimento diferenciado.
                </p>
                
                <p>
                  Hoje, contamos com uma equipe de mais de 15 especialistas em diferentes áreas da contabilidade, 
                  prontos para oferecer soluções sob medida para empresas de todos os portes e segmentos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Missão, Visão e Valores</h2>
              <div className="w-20 h-1 bg-adequa-secondary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="p-3 bg-adequa-light rounded-full inline-flex mb-4">
                  <Target className="h-8 w-8 text-adequa-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-700">
                  Simplificar a gestão contábil e financeira dos nossos clientes, permitindo que foquem 
                  no crescimento do seu negócio com tranquilidade e segurança.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="p-3 bg-adequa-light rounded-full inline-flex mb-4">
                  <Users className="h-8 w-8 text-adequa-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-700">
                  Ser referência em contabilidade consultiva, oferecendo soluções que vão além do 
                  cumprimento de obrigações legais, contribuindo efetivamente para o sucesso dos nossos clientes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="p-3 bg-adequa-light rounded-full inline-flex mb-4">
                  <Shield className="h-8 w-8 text-adequa-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
                <ul className="text-left text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-adequa-secondary rounded-full mr-2"></span>
                    Ética e transparência
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-adequa-secondary rounded-full mr-2"></span>
                    Excelência técnica
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-adequa-secondary rounded-full mr-2"></span>
                    Atendimento humanizado
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-adequa-secondary rounded-full mr-2"></span>
                    Inovação constante
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-adequa-secondary rounded-full mr-2"></span>
                    Responsabilidade social
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
              <div className="w-20 h-1 bg-adequa-secondary mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Contamos com profissionais altamente qualificados e em constante atualização para oferecer 
                o melhor serviço para o seu negócio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Membros da equipe seriam renderizados aqui */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">João Silva</h3>
                  <p className="text-adequa-primary font-medium mb-3">Contador Sênior</p>
                  <p className="text-gray-700">
                    Especialista em contabilidade empresarial com mais de 15 anos de experiência.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Maria Oliveira</h3>
                  <p className="text-adequa-primary font-medium mb-3">Especialista Fiscal</p>
                  <p className="text-gray-700">
                    Especialista em planejamento tributário com experiência em diversos segmentos.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Carlos Santos</h3>
                  <p className="text-adequa-primary font-medium mb-3">Consultor Empresarial</p>
                  <p className="text-gray-700">
                    Especialista em gestão empresarial e análise financeira para tomada de decisões.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a href="#contato" className="btn-primary">
                Fale com nossa equipe
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificações e Parcerias</h2>
              <div className="w-20 h-1 bg-adequa-secondary mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Mantemos as melhores práticas e parcerias para garantir excelência em nossos serviços.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-adequa-light rounded-full mb-4">
                  <Award className="h-10 w-10 text-adequa-primary" />
                </div>
                <p className="font-medium">CRC</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-3 bg-adequa-light rounded-full mb-4">
                  <Award className="h-10 w-10 text-adequa-primary" />
                </div>
                <p className="font-medium">ISO 9001</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-3 bg-adequa-light rounded-full mb-4">
                  <Award className="h-10 w-10 text-adequa-primary" />
                </div>
                <p className="font-medium">SESCON</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-3 bg-adequa-light rounded-full mb-4">
                  <Award className="h-10 w-10 text-adequa-primary" />
                </div>
                <p className="font-medium">FENACON</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Empresa;
