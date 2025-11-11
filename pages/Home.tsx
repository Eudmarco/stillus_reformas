import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_SLOGAN, SERVICES_LIST, WHATSAPP_NUMBERS } from '../constants';
import ServiceCard from '../components/ServiceCard'; // Assuming ServiceCard exists and is functional

const Home: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!`;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="bg-blue-professional text-beige-cozy py-20 md:py-32 text-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Stillus%20Reformas/Fotos%20Site/construcaocivil.webp')` }}
      >
        <div className="absolute inset-0 bg-blue-professional opacity-75"></div> {/* Dark overlay for text readability */}
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
            {COMPANY_NAME}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up">
            {COMPANY_SLOGAN}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-up">
            <Link
              to="/servicos"
              className="w-full md:w-auto bg-orange-highlight text-blue-professional px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-dark hover:text-beige-cozy transition duration-300 shadow-lg"
            >
              Nossos Serviços
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-beige-cozy text-blue-professional px-6 py-3 rounded-full text-lg font-semibold hover:bg-concrete-gray transition duration-300 shadow-lg"
            >
              Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-beige-cozy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-professional mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-center text-concrete-gray max-w-3xl mx-auto mb-12">
            Com anos de experiência em reformas e construção, a {COMPANY_NAME} é sinônimo de qualidade, confiança e inovação em Belo Horizonte e região. Nosso compromisso é transformar seus sonhos em realidade, com projetos personalizados e execução impecável.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-concrete-gray">
              <p className="mb-4">
                Nos dedicamos a oferecer soluções completas, desde a fase de planejamento até a entrega final, garantindo que cada detalhe reflita suas expectativas e necessidades. Nossa equipe é composta por profissionais altamente qualificados e experientes, prontos para superar os desafios de qualquer projeto.
              </p>
              <p className="mb-4">
                Acreditamos que a comunicação transparente e o respeito aos prazos e orçamentos são fundamentais para o sucesso. É por isso que cada cliente recebe um atendimento personalizado, assegurando total satisfação.
              </p>
              <Link
                to="/contato"
                className="inline-block bg-blue-professional text-beige-cozy px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-professional-dark transition duration-300 shadow-md"
              >
                Fale Conosco
              </Link>
            </div>
            <div>
              <img
                src="https://www.mobussconstrucao.com.br/wp-content/uploads/2022/01/equipe-qualificada-800x542.jpg"
                alt="Equipe de trabalho da Stillus Reformas"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-beige-cozy"> {/* Changed from bg-concrete-gray-light */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-professional mb-6">
            Nossos Principais Serviços
          </h2>
          <p className="text-lg text-center text-concrete-gray max-w-3xl mx-auto mb-12">
            Descubra a variedade e a qualidade dos nossos serviços, feitos para atender todas as suas demandas de reforma e construção.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.slice(0, 3).map((service) => ( // Show first 3 services
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="w-full sm:w-auto mx-auto bg-orange-highlight text-blue-professional px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-dark hover:text-beige-cozy transition duration-300 shadow-xl"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-professional text-beige-cozy py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Iniciar Seu Projeto?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto">
            Não importa o tamanho da sua visão, a {COMPANY_NAME} está aqui para ajudar.
            Entre em contato hoje mesmo e receba um orçamento personalizado.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-highlight text-blue-professional px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-dark hover:text-beige-cozy transition duration-300 shadow-lg animate-pulse"
          >
            Solicite um Orçamento Agora!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;