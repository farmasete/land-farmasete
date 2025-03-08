
import { useState } from 'react';
import { PlusCircle, Sparkles, Droplet, HeartPulse, Thermometer, TabletSmartphone, Pill } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('dermatologicos');
  
  const services = [
    {
      id: 'dermatologicos',
      name: 'Dermatológicos',
      icon: <Droplet className="h-6 w-6" />,
      image: "/src/assets/dermatologicos.jpg",
      description: 'Formulações personalizadas para o tratamento de diversos problemas de pele, desde acne até dermatites, com concentrações ajustadas às necessidades individuais.',
      items: [
        'Cremes anti-aging',
        'Tratamentos para acne',
        'Hidratantes específicos',
        'Produtos para manchas',
        'Soluções para rosácea'
      ]
    },
    {
      id: 'alopatia',
      name: 'Alopatia',
      icon: <Pill className="h-6 w-6" />,
      image: "/src/assets/alopatia.jpg",
      description: 'Medicamentos tradicionais que atuam diretamente no combate aos sintomas e causas das doenças, formulados com precisão e seguindo rigorosamente as prescrições médicas.',
      items: [
        'Medicamentos sob prescrição',
        'Dosagens personalizadas',
        'Fórmulas combinadas',
        'Manipulação específica',
        'Tratamentos convencionais'
      ]
    },
    {
      id: 'fitoterapicos',
      name: 'Fitoterápicos',
      icon: <Sparkles className="h-6 w-6" />,
      image: "/src/assets/fitoterapicos.jpg",
      description: 'Medicamentos à base de plantas medicinais, que combinam a sabedoria tradicional com a precisão científica, para a prevenção e tratamento de diversas condições.',
      items: [
        'Extratos vegetais',
        'Cápsulas de ervas',
        'Tinturas especiais',
        'Compostos sinérgicos',
        'Produtos naturais'
      ]
    },
    {
      id: 'hormonios',
      name: 'Hormônios',
      icon: <HeartPulse className="h-6 w-6" />,
      image: "/src/assets/hormonios.jpg",
      description: 'Reposição hormonal personalizada, com dosagens exatas para equilibrar os níveis hormonais e proporcionar bem-estar físico e mental.',
      items: [
        'Reposição hormonal',
        'Hormônios bioidênticos',
        'Tratamentos para menopausa',
        'Cápsulas sublinguais',
        'Géis transdérmicos'
      ]
    },
    {
      id: 'homeopaticos',
      name: 'Homeopáticos',
      icon: <Thermometer className="h-6 w-6" />,
      image: "/src/assets/homeopaticos.jpg",
      description: 'Medicamentos diluídos e dinamizados, seguindo os princípios homeopáticos, para estimular as defesas naturais do organismo.',
      items: [
        'Glóbulos',
        'Tinturas-mãe',
        'Complexos homeopáticos',
        'Doses individualizadas',
        'Tratamentos crônicos'
      ]
    },
    {
      id: 'suplementos',
      name: 'Suplementos',
      icon: <TabletSmartphone className="h-6 w-6" />,
      image: "/src/assets/suplementos.jpg",
      description: 'Formulações com vitaminas, minerais e nutrientes específicos para complementar a alimentação e suprir as necessidades individuais.',
      items: [
        'Vitaminas personalizadas',
        'Minerais quelados',
        'Antioxidantes',
        'Suporte imunológico',
        'Fórmulas energéticas'
      ]
    }
  ];

  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-farma-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-farma-900 mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-farma-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-farma-700">
            Desenvolvemos fórmulas personalizadas para atender às necessidades específicas de cada paciente, sempre com o compromisso de qualidade e excelência.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-farma-50 p-6">
              <h3 className="text-xl font-semibold text-farma-800 mb-6">Categorias</h3>
              <nav className="flex flex-col space-y-2">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`py-3 px-4 rounded-lg flex items-center text-left transition-all ${
                      activeTab === service.id 
                        ? 'bg-farma-500 text-white shadow-md' 
                        : 'text-farma-700 hover:bg-farma-100'
                    }`}
                  >
                    <span className="mr-3">{service.icon}</span>
                    <span>{service.name}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-10 p-4 bg-farma-100 rounded-lg">
                <h4 className="font-semibold text-farma-800 mb-2">Nossa Loja</h4>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/src/assets/loja.jpg" 
                    alt="Fachada da FarmaSETE" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-2 text-sm text-farma-700">Venha nos visitar! Estamos em um local de fácil acesso e com estacionamento próprio.</p>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <div className="mb-6 flex items-center">
                <span className="mr-3 p-2 rounded-full bg-farma-100">
                  {activeService.icon}
                </span>
                <h3 className="text-2xl font-semibold text-farma-800">{activeService.name}</h3>
              </div>
              
              <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                <img 
                  src={activeService.image} 
                  alt={`Serviço de ${activeService.name}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <p className="text-farma-700 mb-8 leading-relaxed">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.items.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 bg-farma-50 rounded-lg hover:bg-farma-100 transition-colors"
                  >
                    <PlusCircle className="h-5 w-5 text-farma-600 mr-3" />
                    <span className="text-farma-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-farma-100 rounded-lg p-4 text-farma-800 flex items-start">
                <svg className="w-6 h-6 text-farma-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-sm">
                  Todos os medicamentos manipulados requerem prescrição médica. Nossa equipe está à disposição para orientar sobre o uso correto e esclarecer dúvidas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src="/src/assets/laboratorio.jpg" 
                alt="Laboratório da FarmaSETE" 
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-farma-800 mb-2">Laboratório Moderno</h3>
            <p className="text-farma-700">
              Contamos com equipamentos de última geração para garantir a qualidade e precisão de nossas formulações.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src="/src/assets/farmaceutico.jpg" 
                alt="Equipe farmacêutica da FarmaSETE" 
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-farma-800 mb-2">Equipe Especializada</h3>
            <p className="text-farma-700">
              Nossos colaboradores são altamente qualificados e estão sempre disponíveis para atender às suas necessidades.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src="/src/assets/atendimento.jpg" 
                alt="Atendimento personalizado na FarmaSETE" 
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-farma-800 mb-2">Atendimento Personalizado</h3>
            <p className="text-farma-700">
              Oferecemos um atendimento humanizado e personalizado, focado nas necessidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
