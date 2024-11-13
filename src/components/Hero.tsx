import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 mb-8">
          <Sparkles size={16} className="mr-2" />
          <span>Desenvolvedor Full Stack</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Transformando ideias em
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {' '}experiências digitais
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Criando soluções web inovadoras e responsivas com as mais recentes tecnologias
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Ver Projetos
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
          >
            Contato
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}