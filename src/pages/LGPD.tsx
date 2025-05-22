
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const LGPD = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Política de Privacidade e LGPD
              </h1>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Introdução</h2>
                <p className="text-gray-700 mb-6">
                  A Adequa Contabilidade está comprometida com a proteção da privacidade e dos dados pessoais de seus clientes e visitantes. 
                  Esta política descreve como coletamos, usamos e protegemos suas informações pessoais em conformidade com a 
                  Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
                </p>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Quais dados coletamos</h2>
                <p className="text-gray-700 mb-4">
                  Podemos coletar os seguintes tipos de informações pessoais:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Informações de identificação (nome, CPF, RG)</li>
                  <li>Informações de contato (e-mail, telefone, endereço)</li>
                  <li>Informações profissionais e financeiras</li>
                  <li>Dados fiscais e tributários</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Como utilizamos seus dados</h2>
                <p className="text-gray-700 mb-4">
                  Seus dados pessoais são utilizados para:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Prestação dos serviços contábeis contratados</li>
                  <li>Cumprimento de obrigações legais e regulatórias</li>
                  <li>Comunicação sobre nossos serviços e eventos</li>
                  <li>Melhoria dos nossos serviços</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Base legal para o tratamento</h2>
                <p className="text-gray-700 mb-6">
                  Tratamos seus dados pessoais com base em uma ou mais das seguintes bases legais:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Execução de contrato ou de procedimentos preliminares</li>
                  <li>Cumprimento de obrigação legal ou regulatória</li>
                  <li>Consentimento do titular</li>
                  <li>Legítimo interesse</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Compartilhamento de dados</h2>
                <p className="text-gray-700 mb-6">
                  Podemos compartilhar seus dados com:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Órgãos governamentais e autoridades fiscais</li>
                  <li>Parceiros e prestadores de serviço necessários à execução dos nossos serviços</li>
                  <li>Empresas do mesmo grupo econômico</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Seus direitos como titular</h2>
                <p className="text-gray-700 mb-4">
                  Como titular dos dados pessoais, você tem os seguintes direitos:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Solicitar a portabilidade dos dados</li>
                  <li>Informação sobre entidades com as quais seus dados foram compartilhados</li>
                  <li>Revogar o consentimento</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Medidas de segurança</h2>
                <p className="text-gray-700 mb-6">
                  A Adequa Contabilidade adota medidas técnicas e administrativas para proteger seus dados pessoais contra acessos 
                  não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de 
                  tratamento inadequado ou ilícito.
                </p>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Contato do Encarregado de Dados (DPO)</h2>
                <p className="text-gray-700 mb-6">
                  Para exercer seus direitos ou obter mais informações sobre o tratamento de seus dados pessoais, 
                  entre em contato com nosso Encarregado de Dados (DPO) através do e-mail: 
                  <a href="mailto:dpo@contabilidadeadequa.com.br" className="text-adequa-primary hover:underline ml-1">
                    dpo@contabilidadeadequa.com.br
                  </a>
                </p>
                
                <h2 className="text-2xl font-bold text-adequa-primary mb-4">Alterações nesta política</h2>
                <p className="text-gray-700">
                  Esta política pode ser atualizada periodicamente. Recomendamos que você verifique esta página regularmente 
                  para estar ciente de quaisquer alterações.
                </p>
                <p className="text-gray-700 mt-4">
                  Última atualização: Maio de 2025
                </p>
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

export default LGPD;
