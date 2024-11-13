import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  image: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      title: "Introdução ao React Hooks",
      date: "2024-03-15",
      category: "React",
      excerpt: "Aprenda os conceitos básicos dos React Hooks e como utilizá-los em seus projetos.",
      slug: "introducao-react-hooks",
      image: "/blog/react-hooks.jpg"
    },
    {
      title: "TypeScript para Iniciantes",
      date: "2024-03-10",
      category: "TypeScript",
      excerpt: "Um guia completo para começar com TypeScript em seus projetos JavaScript.",
      slug: "typescript-iniciantes",
      image: "/blog/typescript.jpg"
    },
    {
      title: "Tailwind CSS na Prática",
      date: "2024-03-05",
      category: "CSS",
      excerpt: "Como utilizar o Tailwind CSS para criar interfaces modernas e responsivas.",
      slug: "tailwind-css-pratica",
      image: "/blog/tailwind.jpg"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos e tutoriais sobre desenvolvimento web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    {post.category}
                  </span>
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="flex items-center text-purple-600 hover:text-purple-700"
                >
                  Ler mais
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}