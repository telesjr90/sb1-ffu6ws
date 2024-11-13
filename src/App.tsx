import React from 'react';
import { Github, Youtube, Instagram } from 'lucide-react';
import { TikTok } from './components/icons/TikTok';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0F172A] text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      
      <footer className="bg-[#1E293B]/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <SocialLink 
              href="https://www.youtube.com/@telesxsantos" 
              icon={<Youtube className="w-5 h-5" />} 
              label="YouTube"
            />
            <SocialLink 
              href="https://www.tiktok.com/@telesxsantos" 
              icon={<TikTok className="w-5 h-5" />} 
              label="TikTok"
            />
            <SocialLink 
              href="https://www.instagram.com/telesxsantos" 
              icon={<Instagram className="w-5 h-5" />} 
              label="Instagram"
            />
            <SocialLink 
              href="https://bsky.app/profile/telesxsantos.bsky.social" 
              icon={
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.002 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm.5 5.5v5.5h4.5v1.5h-6V9.5h1.5z"/>
                </svg>
              } 
              label="BlueSky"
            />
            <SocialLink 
              href="https://www.patreon.com/telesxsantos" 
              icon={
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21zM2 21.6h3.5V2.41H2V21.6z"/>
                </svg>
              } 
              label="Patreon"
            />
          </div>
          <div className="flex justify-center items-center gap-2 mb-6">
            <a
              href="https://www.patreon.com/telesxsantos"
              className="px-6 py-2 bg-[#FF424D] rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21zM2 21.6h3.5V2.41H2V21.6z"/>
              </svg>
              Support on Patreon
            </a>
          </div>
          <p className="text-gray-400">© 2024 Teles Santos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-[#FF9F1C] transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    {icon}
  </a>
);

export default App;