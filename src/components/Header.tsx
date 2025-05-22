
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-adequa-primary">Adequa</span>
            <span className="text-2xl font-bold text-adequa-secondary">Contabilidade</span>
          </a>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-adequa-primary font-medium">Início</a>
          
          <div className="relative group">
            <button 
              className="flex items-center text-gray-700 hover:text-adequa-primary font-medium"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Serviços <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
              <a href="#contabil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-adequa-light hover:text-adequa-primary">Contabilidade</a>
              <a href="#fiscal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-adequa-light hover:text-adequa-primary">Fiscal</a>
              <a href="#departamento-pessoal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-adequa-light hover:text-adequa-primary">Departamento Pessoal</a>
              <a href="#consultoria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-adequa-light hover:text-adequa-primary">Consultoria Empresarial</a>
            </div>
          </div>
          
          <a href="#sobre" className="text-gray-700 hover:text-adequa-primary font-medium">Sobre Nós</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-adequa-primary font-medium">Depoimentos</a>
          <a href="#contato" className="text-gray-700 hover:text-adequa-primary font-medium">Contato</a>
        </nav>
        
        <a href="#contato" className="hidden lg:inline-block btn-primary">
          Fale Conosco
        </a>
        
        <button 
          className="lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <a href="/" className="block py-2 text-gray-700 font-medium">Início</a>
          
          <div>
            <button 
              className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>Serviços</span>
              <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                <a href="#contabil" className="block py-2 text-sm text-gray-700">Contabilidade</a>
                <a href="#fiscal" className="block py-2 text-sm text-gray-700">Fiscal</a>
                <a href="#departamento-pessoal" className="block py-2 text-sm text-gray-700">Departamento Pessoal</a>
                <a href="#consultoria" className="block py-2 text-sm text-gray-700">Consultoria Empresarial</a>
              </div>
            )}
          </div>
          
          <a href="#sobre" className="block py-2 text-gray-700 font-medium">Sobre Nós</a>
          <a href="#depoimentos" className="block py-2 text-gray-700 font-medium">Depoimentos</a>
          <a href="#contato" className="block py-2 text-gray-700 font-medium">Contato</a>
          
          <a href="#contato" className="mt-4 block btn-primary text-center">
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
