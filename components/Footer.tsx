import React from 'react';
import { COMPANY_NAME, COMPANY_ADDRESS, WHATSAPP_NUMBERS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBERS[0]}`;

  return (
    <footer className="bg-blue-professional text-beige-cozy py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4 text-orange-highlight">
          {COMPANY_NAME}
        </h3>
        <p className="text-sm md:text-base mb-2">
          {COMPANY_ADDRESS}
        </p>
        <p className="text-sm md:text-base mb-4">
          Entre em contato: {' '}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-orange-highlight transition duration-300">
            WhatsApp
          </a>
        </p>
        <div className="mt-6 border-t border-concrete-gray pt-6">
          <p className="text-xs md:text-sm">
            &copy; {currentYear} {COMPANY_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;