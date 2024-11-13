import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato para discutirmos seu próximo projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <ContactInfo
              icon={<Mail className="w-6 h-6 text-white" />}
              title="Email"
              content="contato@exemplo.com"
            />
            <ContactInfo
              icon={<Phone className="w-6 h-6 text-white" />}
              title="Telefone"
              content="+55 (11) 99999-9999"
            />
            <ContactInfo
              icon={<MapPin className="w-6 h-6 text-white" />}
              title="Localização"
              content="São Paulo, SP - Brasil"
            />
          </div>

          {/* Formulário de Contato */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Send size={20} className="mr-2" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);