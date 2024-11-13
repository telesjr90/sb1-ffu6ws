import React, { useState } from 'react';
import { Play, BookOpen, Mic, PenTool } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'fantasy', label: 'Fantasy', icon: BookOpen },
  { id: 'comedy', label: 'Comedy', icon: Mic },
  { id: 'poetry', label: 'Poetry', icon: PenTool },
  { id: 'video', label: 'Video', icon: Play },
];

const works = [
  {
    title: 'The Crystal Chronicles',
    category: 'fantasy',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069',
    description: 'A fantasy novel series',
  },
  {
    title: 'Stand-up Special',
    category: 'comedy',
    image: 'https://images.unsplash.com/photo-1525373612132-b3e820b87cea?q=80&w=2070',
    description: 'Live comedy performance',
  },
  {
    title: 'Moonlit Verses',
    category: 'poetry',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=2070',
    description: 'Poetry collection',
  },
  {
    title: 'Urban Tales',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070',
    description: 'Short film series',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredWorks = works.filter(
    (work) => activeCategory === 'all' || work.category === activeCategory
  );

  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Creative Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my diverse collection of works across different mediums and genres
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === id
                  ? 'bg-[#FF9F1C] text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredWorks.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <div className="text-sm text-[#FF9F1C] mb-2 capitalize">{work.category}</div>
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-300">{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}