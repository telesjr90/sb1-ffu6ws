import React from 'react';
import { Utensils, GraduationCap, Building2 } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Experiência Profissional",
      description: "5+ anos desenvolvendo soluções web"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Formação Acadêmica",
      description: "Bacharel em Ciência da Computação"
    },
    {
      icon: <Utensils className="w-6 h-6 text-white" />,
      title: "Especialidades",
      description: "React, Node.js, TypeScript, AWS"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais únicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}