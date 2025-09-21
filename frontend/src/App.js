import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Custom styles for animations
const customStyles = `
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
  
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }
  .delay-1000 { animation-delay: 1000ms; }
  
  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #7c3aed);
  }
`;

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chinmay Dhamgunde
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Skills
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Projects
              </a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Experience
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Chinmay Dhamgunde. Built with React.js and passion for Web3 technology.
          </p>
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