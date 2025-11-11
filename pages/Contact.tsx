import React, { useState } from 'react';
import { COMPANY_NAME, COMPANY_ADDRESS, WHATSAPP_NUMBERS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert('Por favor, preencha seu nome e a mensagem.');
      return;
    }

    const whatsappMessage = `Olá, meu nome é ${formData.name}. Meu e-mail é ${formData.email ? formData.email : 'não informado'}. Gostaria de conversar sobre: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');

    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  const whatsappLinkPrimary = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=Olá,%20gostaria%20de%20entrar%20em%20contato.`;
  const whatsappLinkSecondary = `https://wa.me/${WHATSAPP_NUMBERS[1]}?text=Olá,%20gostaria%20de%20entrar%20em%20contato.`;

  return (
    <div className="contact-page py-16 md:py-24 bg-beige-cozy">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-professional mb-6">
          Entre em <span className="text-orange-highlight">Contato</span>
        </h1>
        <p className="text-lg text-center text-concrete-gray max-w-3xl mx-auto mb-12">
          Estamos prontos para ouvir seu projeto e oferecer as melhores soluções em reformas e construção.
          Fale conosco hoje mesmo!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-professional mb-4">Nossos Dados</h2>
            <div className="space-y-4 text-concrete-gray">
              <div>
                <h3 className="font-medium text-lg text-orange-highlight">Endereço:</h3>
                <p>{COMPANY_ADDRESS}</p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-orange-highlight">WhatsApp:</h3>
                <p>
                  <a href={whatsappLinkPrimary} target="_blank" rel="noopener noreferrer" className="text-blue-professional hover:underline">
                    +{WHATSAPP_NUMBERS[0].replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}
                  </a>
                  {WHATSAPP_NUMBERS.length > 1 && (
                    <>
                      {' / '}
                      <a href={whatsappLinkSecondary} target="_blank" rel="noopener noreferrer" className="text-blue-professional hover:underline">
                        +{WHATSAPP_NUMBERS[1].replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}
                      </a>
                    </>
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-orange-highlight">Horário de Atendimento:</h3>
                <p>Segunda a Sexta: 8h às 18h</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-professional mb-4">Envie-nos uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-concrete-gray text-sm font-medium mb-2">
                  Nome:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-highlight focus:border-transparent transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-concrete-gray text-sm font-medium mb-2">
                  E-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  // Not required for WhatsApp, but good to have if provided
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-highlight focus:border-transparent transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-concrete-gray text-sm font-medium mb-2">
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-highlight focus:border-transparent transition duration-200 resize-y"
                ></textarea>
              </div>
              <button
                type="button" // Changed from 'submit'
                onClick={handleSubmit}
                className="w-full bg-orange-highlight text-blue-professional px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-dark hover:text-beige-cozy transition duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;