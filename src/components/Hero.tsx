
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-farma-100 rounded-bl-[30%] opacity-80" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-farma-50 rounded-tr-[40%] opacity-70" />
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-farma-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-farma-300 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-farma-600 bg-farma-50 rounded-full text-sm font-medium animate-fade-down" style={{ animationDelay: '0.2s' }}>
            Manipulação de Qualidade e Excelência
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-farma-900 animate-fade-down" style={{ animationDelay: '0.4s' }}>
            Sua saúde merece uma 
            <span className="text-farma-500 relative">
              <span className="relative z-10"> fórmula personalizada</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-farma-100 z-0" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,0 C50,5 150,5 200,0 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-farma-800 mb-10 max-w-2xl mx-auto animate-fade-down" style={{ animationDelay: '0.6s' }}>
            Na FarmaSETE, combinamos ciência e cuidado para criar medicamentos personalizados que atendem às suas necessidades específicas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#contact"
              className="cta-button bg-farma-500 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-farma-600 hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Fale Conosco
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="bg-white text-farma-700 px-8 py-3 rounded-full font-medium border border-farma-200 hover:bg-farma-50 hover:border-farma-300 transition-all"
            >
              Nossos Serviços
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto glass-card rounded-2xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 hover-scale">
              <div className="w-16 h-16 bg-farma-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-farma-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12C8.20914 12 10 13.7909 10 16Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 8C18 10.2091 16.2091 12 14 12C11.7909 12 10 10.2091 10 8C10 5.79086 11.7909 4 14 4C16.2091 4 18 5.79086 18 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12C20.2091 12 22 13.7909 22 16Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-farma-800 mb-2">Formulações Exclusivas</h3>
              <p className="text-farma-600">Medicamentos desenvolvidos especialmente para você</p>
            </div>

            <div className="p-4 hover-scale">
              <div className="w-16 h-16 bg-farma-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-farma-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 12.5714L12 20L4.5 12.5714C3.83333 11.9167 3 10.6071 3 9.42857C3 7.07143 4.79086 5 7 5C8.5 5 9.83333 6.07143 10.5 7.14286C10.8333 6.57143 11.3333 5.85714 12 5.85714C12.6667 5.85714 13.1667 6.57143 13.5 7.14286C14.1667 6.07143 15.5 5 17 5C19.2091 5 21 7.07143 21 9.42857C21 10.6071 20.1667 11.9167 19.5 12.5714Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-farma-800 mb-2">Atendimento Humanizado</h3>
              <p className="text-farma-600">Cuidado personalizado em cada interação</p>
            </div>

            <div className="p-4 hover-scale">
              <div className="w-16 h-16 bg-farma-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-farma-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-farma-800 mb-2">Qualidade Certificada</h3>
              <p className="text-farma-600">Excelência em todos os processos de manipulação</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-farma-600 hover:text-farma-800 transition-colors">
          <span className="text-sm mb-2">Saiba mais</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
