import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code2, Zap, Globe, Cpu } from 'lucide-react';
import { personalInfo } from '../data/mock';

const CleanHero = () => {
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

  const floatingIcons = [
    { Icon: Code2, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Zap, delay: 1000, position: { top: '60%', right: '15%' } },
    { Icon: Globe, delay: 2000, position: { top: '30%', right: '25%' } },
    { Icon: Cpu, delay: 1500, position: { top: '70%', left: '20%' } },
  ];

  return (
    <section 
      id="hero-section"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating 3D geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-charcoal/5 rounded-full blur-xl animate-float-3d transform-gpu"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-charcoal/3 rounded-lg rotate-45 animate-float-3d delay-1000 transform-gpu"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-charcoal/4 rounded-full animate-float-3d delay-500 transform-gpu"></div>
        
        {/* Animated floating tech icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className="absolute animate-float-rotate transform-gpu"
            style={{
              ...position,
              animationDelay: `${delay}ms`,
              transform: `translateZ(${20 + index * 10}px)`
            }}
          >
            <div className="p-3 bg-charcoal/5 rounded-xl backdrop-blur-sm hover:bg-charcoal/10 transition-all duration-500 hover:scale-125">
              <Icon className="w-8 h-8 text-charcoal/30" />
            </div>
          </div>
        ))}
        
        {/* Enhanced parallax mouse-following element */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-charcoal/3 to-transparent rounded-full blur-3xl transition-transform duration-700 ease-out pointer-events-none transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px, 0px)`
          }}
        />

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(30,30,30,.05)_25%,rgba(30,30,30,.05)_26%,transparent_27%,transparent_74%,rgba(30,30,30,.05)_75%,rgba(30,30,30,.05)_76%,transparent_77%,transparent)] bg-[length:30px_30px] animate-grid-move"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with enhanced 3D typewriter effect */}
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-6 text-charcoal transition-all duration-1000 delay-200 transform-gpu ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              textShadow: '0 10px 30px rgba(30, 30, 30, 0.1)'
            }}
          >
            {personalInfo.name}
            <Sparkles className="inline-block ml-4 w-12 h-12 text-charcoal/30 animate-spin-3d" />
          </h1>

          {/* Enhanced animated title and subtitle with 3D cards */}
          <div 
            className={`mb-8 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative inline-block p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-charcoal/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal/80 mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-xl md:text-2xl text-charcoal/60 font-medium">
                {personalInfo.subtitle}
              </p>
              
              {/* Floating particles around the card */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-charcoal/20 rounded-full animate-float-particle"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-charcoal/15 rounded-full animate-float-particle delay-700"></div>
            </div>
          </div>

          {/* Enhanced summary with glassmorphism */}
          <div 
            className={`p-8 mb-12 bg-white/40 backdrop-blur-lg rounded-2xl border border-charcoal/10 shadow-xl transition-all duration-1000 delay-600 transform-gpu ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Enhanced CTA Buttons with 3D effects */}
          <div className={`flex flex-col sm:flex-row gap-6 mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              className="bg-charcoal hover:bg-charcoal/90 text-cream px-8 py-4 text-lg font-medium transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-xl hover:shadow-2xl relative overflow-hidden group transform-gpu"
              onClick={() => handleScroll('project-carousel')}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-charcoal group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/80 transition-all duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-8 py-4 text-lg font-medium transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-xl transform-gpu"
              onClick={() => handleScroll('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced Social Links with 3D floating cards */}
          <div className={`flex justify-center gap-6 mb-12 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { href: personalInfo.github, Icon: Github, color: 'hover:bg-charcoal hover:text-cream' },
              { href: personalInfo.linkedin, Icon: Linkedin, color: 'hover:bg-blue-600 hover:text-white' },
              { href: `mailto:${personalInfo.email}`, Icon: Mail, color: 'hover:bg-red-500 hover:text-white' }
            ].map(({ href, Icon, color }, index) => (
              <a 
                key={index}
                href={href}
                className={`group p-4 rounded-xl bg-white/60 backdrop-blur-md shadow-lg border border-charcoal/10 hover:shadow-2xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-4 ${color} transform-gpu`}
                target={href.includes('mailto') ? undefined : "_blank"}
                rel={href.includes('mailto') ? undefined : "noopener noreferrer"}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Icon className="w-6 h-6 text-charcoal group-hover:rotate-12 transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Enhanced animated scroll indicator with 3D effect */}
          <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => handleScroll('skills')}
              className="group flex flex-col items-center text-charcoal/50 hover:text-charcoal transition-all duration-500 transform hover:scale-110 transform-gpu"
            >
              <span className="text-sm font-medium mb-2 group-hover:translate-y-1 transition-transform duration-300">
                Scroll to explore
              </span>
              <div className="relative">
                <ArrowDown className="w-6 h-6 animate-bounce-3d group-hover:translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-charcoal/10 rounded-full blur-lg animate-pulse"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg); 
          }
          50% { 
            transform: translate3d(0, -20px, 10px) rotateX(5deg) rotateY(5deg); 
          }
        }
        
        @keyframes float-rotate {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotateZ(0deg); 
          }
          50% { 
            transform: translate3d(0, -15px, 5px) rotateZ(180deg); 
          }
        }
        
        @keyframes spin-3d {
          from { 
            transform: rotateY(0deg) rotateX(0deg); 
          }
          to { 
            transform: rotateY(360deg) rotateX(360deg); 
          }
        }
        
        @keyframes bounce-3d {
          0%, 100% { 
            transform: translateY(0) translateZ(0) rotateX(0deg); 
          }
          50% { 
            transform: translateY(-10px) translateZ(5px) rotateX(10deg); 
          }
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotate(0deg); 
            opacity: 0.5;
          }
          50% { 
            transform: translate3d(5px, -10px, 3px) rotate(180deg); 
            opacity: 1;
          }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        .animate-float-3d {
          animation: float-3d 6s ease-in-out infinite;
        }
        
        .animate-float-rotate {
          animation: float-rotate 4s ease-in-out infinite;
        }
        
        .animate-spin-3d {
          animation: spin-3d 4s linear infinite;
        }
        
        .animate-bounce-3d {
          animation: bounce-3d 2s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        
        .transform-gpu {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default CleanHero;