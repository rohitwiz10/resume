import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import CleanHero from "./components/CleanHero";
import Skills from "./components/Skills";
import ModernProjectCarousel from "./components/ModernProjectCarousel";
import Enhanced3DExperience from "./components/Enhanced3DExperience";
import Fixed3DContact from "./components/Fixed3DContact";

// Enhanced custom styles for the complete 3D design system
const customStyles = `
  :root {
    --cream: #F9F2E9;
    --charcoal: #1E1E1E;
  }
  
  .bg-cream { background-color: var(--cream); }
  .text-cream { color: var(--cream); }
  .bg-charcoal { background-color: var(--charcoal); }
  .text-charcoal { color: var(--charcoal); }
  .border-charcoal { border-color: var(--charcoal); }
  
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fillBar {
    from { width: 0%; }
    to { width: var(--fill-width, 85%); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
  }
  
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
  
  @keyframes pulse-3d {
    0%, 100% { 
      transform: scale(1) translateZ(0); 
      box-shadow: 0 0 20px rgba(30, 30, 30, 0.3);
    }
    50% { 
      transform: scale(1.2) translateZ(10px); 
      box-shadow: 0 10px 40px rgba(30, 30, 30, 0.5);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(30, 30, 30, 0.1); 
      transform: scale(1);
    }
    50% { 
      box-shadow: 0 0 40px rgba(30, 30, 30, 0.2); 
      transform: scale(1.05);
    }
  }
  
  @keyframes card-entrance {
    from { 
      opacity: 0; 
      transform: translateY(50px) scale(0.9) rotateX(10deg); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0) scale(1) rotateX(0deg); 
    }
  }
  
  @keyframes morph-3d {
    0%, 100% { 
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      transform: rotate(0deg) scale(1);
    }
    25% { 
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
      transform: rotate(90deg) scale(1.1);
    }
    50% { 
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      transform: rotate(180deg) scale(0.9);
    }
    75% { 
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
      transform: rotate(270deg) scale(1.05);
    }
  }
  
  @keyframes hologram-flicker {
    0%, 100% { 
      opacity: 1; 
      filter: hue-rotate(0deg) brightness(1);
    }
    50% { 
      opacity: 0.8; 
      filter: hue-rotate(180deg) brightness(1.2);
    }
  }
  
  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(40px, 40px); }
  }
  
  @keyframes grid-drift {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(50px, 50px) rotate(360deg); }
  }
  
  @keyframes float-particle-3d {
    0%, 100% { 
      transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg); 
      opacity: 0.3;
    }
    50% { 
      transform: translate3d(10px, -20px, 15px) rotateX(180deg) rotateY(180deg); 
      opacity: 1;
    }
  }
  
  .animate-fadeInDown {
    animation: fadeInDown 0.8s ease-out;
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out;
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-slideInUp {
    animation: slideInUp 0.6s ease-out;
  }
  
  .animate-fillBar {
    animation: fillBar 1.5s ease-out;
  }
  
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  
  .animate-float-3d {
    animation: float-3d 6s ease-in-out infinite;
  }
  
  .animate-float-rotate {
    animation: float-rotate 4s ease-in-out infinite;
  }
  
  .animate-pulse-3d {
    animation: pulse-3d 2s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
  
  .animate-card-entrance {
    animation: card-entrance 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .animate-morph-3d {
    animation: morph-3d 8s ease-in-out infinite;
  }
  
  .animate-hologram {
    animation: hologram-flicker 2s ease-in-out infinite;
  }
  
  .animate-grid-move {
    animation: grid-move 20s linear infinite;
  }
  
  .animate-grid-drift {
    animation: grid-drift 30s linear infinite;
  }
  
  .animate-float-particle-3d {
    animation: float-particle-3d 4s ease-in-out infinite;
  }
  
  /* Enhanced transition delays */
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }
  .delay-600 { animation-delay: 600ms; }
  .delay-700 { animation-delay: 700ms; }
  .delay-800 { animation-delay: 800ms; }
  .delay-1000 { animation-delay: 1000ms; }
  
  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* Enhanced scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--cream);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--charcoal);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(30, 30, 30, 0.8);
  }
  
  /* Enhanced 3D card effects */
  .card-3d {
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .card-3d:hover {
    transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
  }
  
  /* Advanced glassmorphism effect */
  .glass-advanced {
    background: rgba(249, 242, 233, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(30, 30, 30, 0.1);
    box-shadow: 
      0 25px 50px rgba(30, 30, 30, 0.1),
      0 0 0 1px rgba(30, 30, 30, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  /* Enhanced hover effects */
  .hover-lift-3d {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-style: preserve-3d;
  }
  
  .hover-lift-3d:hover {
    transform: translateY(-12px) translateZ(20px) rotateX(5deg) scale(1.03);
    box-shadow: 
      0 30px 60px rgba(30, 30, 30, 0.2),
      0 0 0 1px rgba(30, 30, 30, 0.05);
  }
  
  /* Floating elements */
  .float-element {
    animation: float 6s ease-in-out infinite;
  }
  
  .float-element:nth-child(2) { animation-delay: -2s; }
  .float-element:nth-child(3) { animation-delay: -4s; }
  
  /* Morphing background shapes */
  .morph-bg {
    background: linear-gradient(45deg, var(--cream), rgba(30, 30, 30, 0.05));
    animation: morph-3d 10s ease-in-out infinite;
  }
  
  /* Holographic text effect */
  .hologram-text {
    background: linear-gradient(45deg, var(--charcoal), rgba(30, 30, 30, 0.7));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: hologram-flicker 3s ease-in-out infinite;
  }
  
  /* Transform GPU acceleration */
  .transform-gpu {
    transform-style: preserve-3d;
    will-change: transform;
  }
`;

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Dynamic floating background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-64 h-64 morph-bg rounded-full blur-3xl opacity-30"
          style={{
            left: `${20 + (mousePosition.x * 0.02)}%`,
            top: `${30 + (mousePosition.y * 0.02)}%`,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 morph-bg rounded-full blur-3xl opacity-20"
          style={{
            right: `${15 + (mousePosition.x * 0.01)}%`,
            bottom: `${25 + (mousePosition.y * 0.01)}%`,
          }}
        ></div>
      </div>
      
      {/* Enhanced Navigation Header with 3D effects */}
      <nav 
        className="fixed top-0 left-0 right-0 z-40 glass-advanced transition-all duration-500 transform-gpu"
        style={{
          transform: `translateY(${scrollY > 100 ? '0' : '-100%'}) translateZ(50px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-charcoal hologram-text">
              Chinmay Dhamgunde
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#project-carousel' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-charcoal/70 hover:text-charcoal transition-all duration-300 font-medium relative group transform hover:scale-110"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(${10 + index * 5}px)`
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-500 group-hover:w-full"></span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-charcoal/50 blur-sm transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with enhanced 3D layers */}
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        <CleanHero />
        <Skills />
        <ModernProjectCarousel />
        <Enhanced3DExperience />
        <Fixed3DContact />
      </div>

      {/* Enhanced Footer with 3D effects */}
      <footer className="bg-charcoal text-cream py-12 relative overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-gray-800 to-charcoal opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="transform hover:scale-105 transition-all duration-500" style={{ transform: 'translateZ(10px)' }}>
              <h3 className="text-xl font-bold mb-4 hologram-text">Chinmay Dhamgunde</h3>
              <p className="text-cream/70 leading-relaxed">
                Full-Stack Developer specializing in Web3 and blockchain technology. 
                Building the future of decentralized applications with cutting-edge 3D experiences.
              </p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-500" style={{ transform: 'translateZ(15px)' }}>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#project-carousel' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="block text-cream/70 hover:text-cream transition-all duration-300 transform hover:translateX-2"
                    style={{ transform: `translateZ(${5 + index * 2}px)` }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-500" style={{ transform: 'translateZ(20px)' }}>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "Solidity", "Web3.js", "MongoDB"].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-cream/10 text-cream/80 rounded-full text-sm hover:bg-cream/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    style={{ transform: `translateZ(${5 + index * 2}px)` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-8 text-center">
            <p className="text-cream/60 transform hover:scale-105 transition-all duration-300" style={{ transform: 'translateZ(5px)' }}>
              © 2025 Chinmay Dhamgunde. Crafted with passion for Web3 technology and 3D innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;