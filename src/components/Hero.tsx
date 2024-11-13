import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?q=80&w=2070')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10 text-center mt-16">
        <div className="inline-flex items-center bg-gray-800/50 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#FF9F1C] mr-2" />
          <span className="text-gray-300">Welcome to my creative universe</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-[#FF9F1C]">Teles Santos</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9F1C] to-[#F71735]">
            Creative Storyteller
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Weaving tales through fantasy writing, comedy, poetry, and visual storytelling
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#FF9F1C] to-[#F71735] rounded-full font-semibold hover:opacity-90 transition-opacity">
            Explore My Work
          </button>
          <button className="px-8 py-3 border-2 border-[#FF9F1C]/20 rounded-full font-semibold hover:bg-[#FF9F1C]/10 transition-colors">
            Watch Showreel
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#FF9F1C]" />
      </div>
    </div>
  );
}