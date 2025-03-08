
import { Leaf, Pill, FlaskConical } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-40 top-0 w-80 h-80 bg-farma-50 rounded-full opacity-70"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-farma-50 rounded-full opacity-50 -mb-40 -mr-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-farma-900 mb-4">Sobre a FarmaSETE</h2>
          <div className="w-20 h-1 bg-farma-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-right">
            <h3 className="text-2xl font-semibold text-farma-800 mb-6">Compromisso com a sua Saúde</h3>
            <p className="text-farma-700 mb-6 leading-relaxed">
              Desde nossa fundação, a FarmaSETE se dedica a proporcionar medicamentos manipulados com a mais alta qualidade e segurança. Nosso laboratório é equipado com tecnologia avançada para garantir a precisão de todas as formulações.
            </p>
            <p className="text-farma-700 mb-6 leading-relaxed">
              Combinamos a ciência farmacêutica moderna com um atendimento humanizado, entendendo que cada paciente é único e merece um tratamento personalizado às suas necessidades específicas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-farma-100 hover-scale">
                <div className="mb-3">
                  <Leaf className="h-8 w-8 text-farma-500" />
                </div>
                <h4 className="font-semibold text-farma-800 mb-1">Ingredientes Selecionados</h4>
                <p className="text-sm text-farma-600">Matérias-primas de alta qualidade</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-farma-100 hover-scale">
                <div className="mb-3">
                  <Pill className="h-8 w-8 text-farma-500" />
                </div>
                <h4 className="font-semibold text-farma-800 mb-1">Fórmulas Personalizadas</h4>
                <p className="text-sm text-farma-600">Adaptadas às suas necessidades</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-farma-100 hover-scale">
                <div className="mb-3">
                  <FlaskConical className="h-8 w-8 text-farma-500" />
                </div>
                <h4 className="font-semibold text-farma-800 mb-1">Processos Certificados</h4>
                <p className="text-sm text-farma-600">Seguindo normas rigorosas</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-left">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-tr from-farma-100 to-farma-200 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-5/6 h-5/6 bg-white rounded-xl shadow-inner overflow-hidden">
                    <div className="absolute inset-0 bg-farma-50 opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <Leaf className="h-16 w-16 text-farma-500 mb-6" />
                      <h3 className="text-2xl font-bold text-farma-900 mb-2">FarmaSETE</h3>
                      <h3 className="text-2xl font-bold text-farma-900 mb-2">Drogaria e Manipulação</h3>
                      <p className="text-farma-700">Tradição e inovação em manipulação farmacêutica desde 2006</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-farma-400 opacity-20 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-farma-300 opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
