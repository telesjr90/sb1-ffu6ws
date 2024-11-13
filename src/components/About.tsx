import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-gray-800/50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate designer with a keen eye for detail and a drive for creating
              meaningful digital experiences. With over a decade of experience in the industry,
              I've had the privilege of working with clients across various sectors.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Projects', value: '100+' },
                { label: 'Happy Clients', value: '50+' },
                { label: 'Awards', value: '12' },
                { label: 'Experience', value: '10 Years' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}