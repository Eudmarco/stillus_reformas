import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME, WHATSAPP_NUMBERS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-beige-cozy text-blue-professional p-4 shadow-md fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold">
          <img
            src="https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Stillus%20Reformas/Fotos%20Site/Logo%20Stillus.png"
            alt={`${COMPANY_NAME} Logo`}
            className="h-12 md:h-16 object-contain"
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-professional focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu" // Added aria-controls
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-orange-highlight transition duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu" // Added id
        className={`fixed inset-0 bg-blue-professional text-beige-cozy z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-beige-cozy text-4xl focus:outline-none p-2"
          aria-label="Fechar menu"
        >
          &times;
        </button>
        <ul className="flex flex-col items-center justify-center space-y-8 text-2xl" role="menu"> {/* Added role="menu" */}
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block text-beige-cozy hover:text-orange-highlight transition duration-300"
                onClick={() => setIsOpen(false)}
                role="menuitem" // Added role="menuitem"
                tabIndex={0} // Ensure keyboard navigability
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Optional: Add WhatsApp button directly in the mobile overlay for even stronger CTA */}
          <li className="mt-8" role="none"> {/* role="none" for containing an interactive element not part of the menu items */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBERS[0]}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-highlight text-blue-professional px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-dark hover:text-beige-cozy transition duration-300 shadow-lg flex items-center gap-2"
              onClick={() => setIsOpen(false)}
              role="menuitem" // Treat WhatsApp button as a menu item for accessibility
              tabIndex={0} // Ensure keyboard navigability
              aria-label="Enviar mensagem"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              MENSAGEM
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;