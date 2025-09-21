import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import EnhancedHero from "./components/EnhancedHero";
import Skills from "./components/Skills";
import ProjectCarousel from "./components/ProjectCarousel";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Enhanced custom styles for the new design
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
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(30, 30, 30, 0.1); }
    50% { box-shadow: 0 0 40px rgba(30, 30, 30, 0.2); }
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
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
  
  .animate-card-entrance {
    animation: card-entrance 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
  
  /* 3D card effects */
  .card-3d {
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .card-3d:hover {
    transform: rotateY(5deg) rotateX(5deg);
  }
  
  /* Glassmorphism effect */
  .glass {
    background: rgba(249, 242, 233, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(30, 30, 30, 0.1);
  }
  
  /* Enhanced hover effects */
  .hover-lift {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .hover-lift:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(30, 30, 30, 0.15);
  }
`;

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-cream">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Enhanced Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass transition-all duration-300" style={{
        transform: `translateY(${scrollY > 100 ? '0' : '-100%'})`
      }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-charcoal">
              Chinmay Dhamgunde
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#skills" className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 font-medium relative group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#project-carousel" className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 font-medium relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#experience" className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 font-medium relative group">
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <EnhancedHero />
      <Skills />
      <ProjectCarousel />
      <Experience />
      <Contact />

      {/* Enhanced Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chinmay Dhamgunde</h3>
              <p className="text-cream/70 leading-relaxed">
                Full-Stack Developer specializing in Web3 and blockchain technology. 
                Building the future of decentralized applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#skills" className="block text-cream/70 hover:text-cream transition-colors duration-300">Skills</a>
                <a href="#project-carousel" className="block text-cream/70 hover:text-cream transition-colors duration-300">Projects</a>
                <a href="#experience" className="block text-cream/70 hover:text-cream transition-colors duration-300">Experience</a>
                <a href="#contact" className="block text-cream/70 hover:text-cream transition-colors duration-300">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "Solidity", "Web3.js", "MongoDB"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-cream/10 text-cream/80 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-8 text-center">
            <p className="text-cream/60">
              © 2025 Chinmay Dhamgunde. Crafted with passion for Web3 technology.
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