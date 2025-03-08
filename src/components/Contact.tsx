import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-farma-50"></div>
        <div className="absolute -right-20 top-40 w-40 h-40 bg-farma-100 rounded-full opacity-60"></div>
        <div className="absolute left-20 bottom-20 w-24 h-24 bg-farma-200 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-farma-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-farma-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-farma-700">
            Estamos à disposição para responder suas dúvidas, receber sugestões
            ou agendar uma consulta farmacêutica.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 h-full">
            <h3 className="text-2xl font-semibold text-farma-800 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-farma-100 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-farma-600" />
                </div>
                <div>
                  <h4 className="font-medium text-farma-800 mb-1">Telefone</h4>
                  <p className="text-farma-600">(16) 3763-0707</p>
                  <p className="text-farma-600">(16) 3763-0700</p>
                  <p className="text-farma-600">(16) 98200-2524</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-farma-100 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-farma-600" />
                </div>
                <div>
                  <h4 className="font-medium text-farma-800 mb-1">E-mail</h4>
                  <p className="text-farma-600">
                    farmasete@fortuna.jard.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-farma-100 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-farma-600" />
                </div>
                <div>
                  <h4 className="font-medium text-farma-800 mb-1">Endereço</h4>
                  <p className="text-farma-600">
                    Rua Coronel José Theodoro, 555 - Centro
                  </p>
                  <p className="text-farma-600">
                    Jardinópolis, SP - CEP 14680-000
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-farma-100 p-3 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-farma-600" />
                </div>
                <div>
                  <h4 className="font-medium text-farma-800 mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-farma-600">Segunda a Sábado: 8h às 22h</p>
                  <p className="text-farma-600">Domingo: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium text-farma-800 mb-4">Nos Acompanhe</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/farmasete"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-farma-100 p-3 rounded-full hover:bg-farma-200 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-farma-600"
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
                  className="bg-farma-100 p-3 rounded-full hover:bg-farma-200 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-farma-600"
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
                  className="bg-farma-100 p-3 rounded-full hover:bg-farma-200 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-farma-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-farma-800 mb-6">
              Envie-nos uma Mensagem
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-farma-700 mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-farma-200 focus:outline-none focus:ring-2 focus:ring-farma-500 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-farma-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-farma-200 focus:outline-none focus:ring-2 focus:ring-farma-500 focus:border-transparent"
                    placeholder="Seu e-mail"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-farma-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-farma-200 focus:outline-none focus:ring-2 focus:ring-farma-500 focus:border-transparent resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="https://wa.me/5516982002524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp
                </a>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-button inline-flex items-center gap-2 px-8 py-3 bg-farma-500 text-white rounded-lg hover:bg-farma-600 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
