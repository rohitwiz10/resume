import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, MapPin, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/mock';

const EnhancedHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-charcoal/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-charcoal/3 rounded-lg rotate-45 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-charcoal/4 rounded-full animate-float delay-500"></div>
        
        {/* Parallax mouse-following element */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-charcoal/2 to-transparent rounded-full blur-3xl transition-transform duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        />
      </div>

      {/* Hero Illustration */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className={`transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <img 
            src="https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHx3ZWIzJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTc1ODQzMzkwMHww&ixlib=rb-4.1.0&q=85"
            alt="Developer Workspace"
            className="w-80 h-80 object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Greeting Badge with animation */}
          <Badge className={`mb-6 bg-charcoal text-cream px-6 py-3 text-sm font-medium transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <MapPin className="w-4 h-4 mr-2" />
            {personalInfo.location}
          </Badge>

          {/* Main heading with typewriter effect */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-charcoal transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {personalInfo.name}
            <Sparkles className="inline-block ml-4 w-12 h-12 text-charcoal/30 animate-spin" style={{ animationDuration: '3s' }} />
          </h1>

          {/* Animated title and subtitle */}
          <div className={`mb-8 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal/80 mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/60 font-medium">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Enhanced summary with better typography */}
          <p className={`text-lg md:text-xl text-charcoal/70 mb-12 max-w-3xl leading-relaxed transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {personalInfo.summary}
          </p>

          {/* Enhanced CTA Buttons with 3D effects */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              className="bg-charcoal hover:bg-charcoal/90 text-cream px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden group"
              onClick={() => handleScroll('project-carousel')}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => handleScroll('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced Social Links with 3D cards */}
          <div className={`flex gap-6 mb-12 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
              href={personalInfo.github}
              className="group p-4 rounded-xl bg-white shadow-lg border border-charcoal/10 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-charcoal group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href={personalInfo.linkedin}
              className="group p-4 rounded-xl bg-white shadow-lg border border-charcoal/10 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-charcoal group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="group p-4 rounded-xl bg-white shadow-lg border border-charcoal/10 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Mail className="w-6 h-6 text-charcoal group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>

          {/* Animated scroll indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => handleScroll('skills')}
              className="group flex flex-col items-center text-charcoal/50 hover:text-charcoal transition-colors duration-300"
            >
              <span className="text-sm font-medium mb-2 group-hover:translate-y-1 transition-transform duration-300">
                Scroll to explore
              </span>
              <ArrowDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default EnhancedHero;