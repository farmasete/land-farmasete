import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-farma-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-farma-800 rounded-bl-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-farma-800 rounded-tr-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Leaf className="h-7 w-7 text-farma-400 mr-2" />
              <div>
                <h3 className="font-bold text-lg text-white">FarmaSETE</h3>
                <p className="text-xs text-farma-300">Drogaria e Manipulação</p>
              </div>
            </div>
            <p className="text-farma-200 mb-6 leading-relaxed">
              Combinando ciência e cuidado para criar medicamentos
              personalizados que atendem as necessidades específicas de cada
              paciente.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/farmasete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-farma-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.64c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/farmasetemanip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-farma-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5516982002524"
                target="_blank"
                rel="noopener noreferrer"
                className="text-farma-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Dermatológicos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Fitoterápicos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Hormônios
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Homeopáticos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-farma-200 hover:text-white transition-colors"
                >
                  Suplementos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex">
                <svg
                  className="h-5 w-5 text-farma-400 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-farma-200">
                  Rua Coronel José Theodoro, 555 - Centro
                  <br />
                  Jardinópolis, SP - CEP 14680-000
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-5 w-5 text-farma-400 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-farma-200">
                  (16) 3763-0707
                  <br />
                  (16) 3763-0700
                  <br />
                  (16) 98200-2524
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-5 w-5 text-farma-400 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-farma-200">
                  farmasete@fortuna.jard.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-farma-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-farma-300 text-sm">
          <p>
            © {year} FarmaSETE Drogaria e Manipulação. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-400 mx-1" />
            <span>
              por{" "}
              <a href="#" className="hover:text-white transition-colors">
                FarmaSETE
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
