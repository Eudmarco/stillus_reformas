import React from 'react';
import { WHATSAPP_NUMBERS } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-orange-highlight text-beige-cozy p-4 rounded-full shadow-lg hover:bg-orange-dark transition duration-300 flex items-center justify-center z-50 animate-bounce-slow"
      aria-label="Enviar mensagem"
    >
      <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;