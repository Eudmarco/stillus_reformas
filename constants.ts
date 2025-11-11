import { Service } from './types';

export const COMPANY_NAME = "STILLUS REFORMAS LTDA";
export const COMPANY_SLOGAN = "Reformas & Construção com Qualidade e Garantia em BH/MG";
export const COMPANY_ADDRESS = "Rua dos Caetés, 530, Centro, Belo Horizonte - MG";
export const WHATSAPP_NUMBERS = ["31984437976", "31996565993"]; // No prefixes

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Serviços', path: '/servicos' },
  // Removed 'Portfólio' and 'Orçamento' links
  { name: 'Contato', path: '/contato' },
];

export const SERVICES_LIST: Service[] = [
  {
    name: "Pinturas",
    description: "Serviços de pintura residencial e comercial, com acabamento impecável e uso de materiais de alta qualidade para durabilidade e estética.",
    image: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Stillus%20Reformas/Fotos%20Site/pintura-de-casa.webp"
  },
  {
    name: "Hidráulica",
    description: "Instalação, reparo e manutenção de sistemas hidráulicos, incluindo vazamentos, encanamento e aquecedores, garantindo funcionalidade e segurança.",
    image: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Stillus%20Reformas/Fotos%20Site/hidraulica-residencial.webp"
  },
  {
    name: "Elétrica",
    description: "Projetos elétricos, instalações, reparos e manutenções, com foco na segurança e na eficiência energética de sua residência ou empresa.",
    image: "https://engehall.com.br/wp-content/uploads/elementor/thumbs/eletricista-predial-qb3se77wes48lhgvbwjlraj5or9itz84vr5fuqdfi0.webp"
  },
  {
    name: "Telhados",
    description: "Construção, reforma e manutenção de telhados, incluindo troca de telhas, impermeabilização e reparos estruturais.",
    image: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Stillus%20Reformas/Fotos%20Site/Telhamento-da-Obra.webp"
  },
  {
    name: "Impermeabilização",
    description: "Soluções completas em impermeabilização para lajes, paredes e piscinas, prevenindo infiltrações e protegendo sua propriedade.",
    image: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Stillus%20Reformas/Fotos%20Site/impermeabilizacao.webp"
  },
  {
    name: "Construção Geral",
    description: "Execução de projetos de construção do zero, reformas estruturais e ampliações, com planejamento e acompanhamento rigorosos.",
    image: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Stillus%20Reformas/Fotos%20Site/reformas.webp"
  }
];

// PORTFOLIO_ITEMS array is no longer needed as the Portfolio page has been removed.
// export const PORTFOLIO_ITEMS: PortfolioItem[] = [...];