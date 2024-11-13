import React from 'react';
import { Utensils, GraduationCap, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-800/50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/about-photo.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FF9F1C] to-[#F71735] p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-sm">Fun Facts</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Hey there! I'm a creative soul with a diverse background and a passion for 
              pushing boundaries. From kitchen heat to code sheets, my journey has been 
              anything but conventional. Here are three fun facts that shape who I am.
            </p>
            
            <div className="space-y-8">
              <div className="bg-gray-700/30 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Utensils className="w-6 h-6 text-[#FF9F1C]" />
                  <h3 className="text-xl font-bold text-[#FF9F1C]">Cook</h3>
                </div>
                <p className="text-gray-300">
                  I worked for five years as a professional chef in multiple restaurants, catering, 
                  and country clubs in the US and Brazil. I owe my proficiency in it to the women 
                  in my life and to a Haitian war criminal chef.
                </p>
              </div>
              
              <div className="bg-gray-700/30 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-[#FF9F1C]" />
                  <h3 className="text-xl font-bold text-[#FF9F1C]">Catholic School</h3>
                </div>
                <p className="text-gray-300">
                  All my school years were in a traditional catholic school. I was expelled from 
                  my "Confirmation school" and still got a "Religion Student of the Year Award". 
                  I was never religious, fuck the church.
                </p>
              </div>
              
              <div className="bg-gray-700/30 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-[#FF9F1C]" />
                  <h3 className="text-xl font-bold text-[#FF9F1C]">Business</h3>
                </div>
                <p className="text-gray-300">
                  I once said in a job interview "Bruce Wayne in the morning and Batman at night. 
                  That's how I plan to work here and have a bar!". I was hired. I am good y'all. 
                  I have a Business BsC and two MBAs (Design Thinking and Project Management). 
                  Never had a bar, though.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}