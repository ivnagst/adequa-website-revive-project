
import { 
  BookOpen, 
  FileText, 
  Users, 
  TrendingUp, 
  CheckCircle 
} from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features 
}: { 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  features: string[] 
}) => (
  <div id={title.toLowerCase().replace(/\s+/g, '-')} className="service-card">
    <div className="flex items-center mb-4">
      <div className="mr-4 p-3 bg-adequa-light rounded-lg text-adequa-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle size={18} className="mr-2 text-adequa-primary flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Contabilidade",
      description: "Gestão contábil completa para sua empresa, com acompanhamento detalhado das operações financeiras.",
      icon: <BookOpen size={24} />,
      features: [
        "Escrituração contábil completa",
        "Balancetes mensais",
        "Demonstrações contábeis",
        "Análises financeiras",
        "Gestão de patrimônio"
      ]
    },
    {
      title: "Fiscal",
      description: "Acompanhamento fiscal completo para manter sua empresa em conformidade com a legislação tributária.",
      icon: <FileText size={24} />,
      features: [
        "Apuração de impostos",
        "Escrituração fiscal",
        "Obrigações acessórias",
        "Planejamento tributário",
        "Recuperação de impostos"
      ]
    },
    {
      title: "Departamento Pessoal",
      description: "Gestão completa da folha de pagamento e processos trabalhistas da sua empresa.",
      icon: <Users size={24} />,
      features: [
        "Folha de pagamento",
        "Admissão e demissão",
        "Obrigações trabalhistas",
        "Férias e 13º salário",
        "eSocial completo"
      ]
    },
    {
      title: "Consultoria Empresarial",
      description: "Orientação estratégica para impulsionar o crescimento do seu negócio com segurança.",
      icon: <TrendingUp size={24} />,
      features: [
        "Análise financeira",
        "Planejamento estratégico",
        "Reestruturação empresarial",
        "Viabilidade de novos negócios",
        "Gestão de custos"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções contábeis completas para simplificar a gestão do seu negócio e 
            garantir conformidade com a legislação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              features={service.features} 
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contato" className="btn-primary">
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
