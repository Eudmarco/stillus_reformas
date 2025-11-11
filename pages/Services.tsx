import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_LIST, WHATSAPP_NUMBERS } from '../constants';

const Services: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20sobre%20seus%20serviços.`;

  return (
    <div className="services-page py-16 md:py-24 bg-beige-cozy">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-professional mb-6">
          Nossas <span className="text-orange-highlight">Especialidades</span>
        </h1>
        <p className="text-lg text-center text-concrete-gray max-w-3xl mx-auto mb-12">
          Oferecemos uma gama completa de serviços de reforma e construção para atender às suas necessidades com excelência e garantia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-professional mb-6">
            Inicie Seu Projeto Conosco!
          </h2>
          <p className="text-lg text-concrete-gray max-w-2xl mx-auto mb-8">
            Seja qual for o tamanho da sua necessidade, temos a solução ideal.
            Fale com um de nossos técnicos e solicite um orçamento sem compromisso.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-highlight text-beige-cozy px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-dark transition duration-300 shadow-xl flex items-center justify-center gap-2 max-w-sm mx-auto animate-pulse"
            aria-label="Solicitar orçamento via mensagem"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            SOLICITAR ORÇAMENTO VIA MENSAGEM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;