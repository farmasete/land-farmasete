
import { useState } from 'react';
import { StarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Clara',
      role: 'Cliente há 3 anos',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      quote: 'A FarmaSETE transformou minha experiência com medicamentos manipulados. A equipe é extremamente atenciosa e as formulações são perfeitas para minhas necessidades específicas.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Eduardo',
      role: 'Cliente há 1 ano',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      quote: 'Desde que comecei a utilizar os suplementos personalizados da FarmaSETE, notei uma melhora significativa na minha disposição e bem-estar. Recomendo a todos!',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Beatriz',
      role: 'Cliente há 2 anos',
      image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      quote: 'O tratamento dermatológico personalizado que recebi na FarmaSETE foi fundamental para resolver meu problema de pele. Atenção aos detalhes e formulação impecável.',
      rating: 4
    },
    {
      id: 4,
      name: 'Roberto Mendes',
      role: 'Cliente há 6 meses',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      quote: 'O atendimento na FarmaSETE é excepcional. Sempre esclarecem todas as minhas dúvidas e as fórmulas são entregues no prazo com qualidade superior.',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-farma-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-farma-900 mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="w-20 h-1 bg-farma-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-farma-700">
            A satisfação de nossos clientes é nosso maior patrimônio. Conheça algumas experiências de quem confia na FarmaSETE.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-16 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-farma-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-farma-700" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 lg:translate-x-16 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-farma-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-farma-700" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-farma-100 rounded-bl-full opacity-50"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-farma-100">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-farma-900">{testimonials[currentIndex].name}</h3>
                <p className="text-farma-600">{testimonials[currentIndex].role}</p>
                
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <svg className="w-12 h-12 text-farma-100 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-farma-800 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  currentIndex === index ? 'bg-farma-500 w-6' : 'bg-farma-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
