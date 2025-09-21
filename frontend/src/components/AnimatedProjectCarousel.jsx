import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Pause, Layers, Coins, Database, Globe } from 'lucide-react';
import { projects } from '../data/mock';

const AnimatedProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('project-carousel');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const carouselElement = document.getElementById('project-carousel');
    if (carouselElement) {
      carouselElement.addEventListener('mousemove', handleMouseMove);
      return () => carouselElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject(prev => (prev - 1 + projects.length) % projects.length);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleEmailContact = () => {
    const emailSubject = encodeURIComponent(`Inquiry about ${projects[currentProject].name}`);
    const emailBody = encodeURIComponent(
      `Hi Chinmay,\n\nI'm interested in your ${projects[currentProject].name} project and would like to discuss it further.\n\nBest regards`
    );
    window.open(`mailto:chinmaydhamgunde10@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_self');
  };

  const currentProj = projects[currentProject];

  // Custom animated project visuals
  const ProjectVisual = ({ project, isActive }) => {
    if (project.name === "NFT Marketplace") {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-charcoal via-gray-800 to-charcoal flex items-center justify-center overflow-hidden">
          {/* Animated NFT Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-20 h-24 bg-gradient-to-br from-cream to-white rounded-lg shadow-2xl border-2 border-charcoal/20 transform transition-all duration-1000 ${isActive ? 'animate-float-cards' : ''}`}
                style={{
                  left: `${20 + (i % 3) * 25}%`,
                  top: `${30 + Math.floor(i / 3) * 30}%`,
                  animationDelay: `${i * 200}ms`,
                  transform: `rotate(${i * 15 - 45}deg) ${isActive ? 'translateY(-10px)' : 'translateY(0)'}`
                }}
              >
                {/* NFT Content */}
                <div className="p-2 h-full flex flex-col">
                  <div className="w-full h-12 bg-charcoal/10 rounded mb-1"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-charcoal/20 rounded"></div>
                    <div className="h-1 bg-charcoal/15 rounded w-3/4"></div>
                  </div>
                </div>
                
                {/* Floating Ethereum symbols */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-charcoal rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cream rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Animated connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {isActive && [...Array(3)].map((_, i) => (
              <line
                key={i}
                x1={`${30 + i * 20}%`}
                y1="40%"
                x2={`${50 + i * 15}%`}
                y2="60%"
                stroke="rgba(249, 242, 233, 0.3)"
                strokeWidth="2"
                className="animate-draw-line"
                style={{ animationDelay: `${i * 300}ms` }}
              />
            ))}
          </svg>
          
          {/* Blockchain network effect */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-cream/60 rounded-full ${isActive ? 'animate-pulse' : ''}`}
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 150}ms`
                }}
              />
            ))}
          </div>
        </div>
      );
    } else if (project.name === "Muscify Faucet DApp") {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-charcoal via-gray-800 to-charcoal flex items-center justify-center overflow-hidden">
          {/* Animated Faucet */}
          <div className="relative">
            {/* Faucet body */}
            <div className="w-16 h-24 bg-gradient-to-b from-cream to-cream/80 rounded-t-lg relative shadow-2xl">
              {/* Faucet spout */}
              <div className="absolute -right-8 top-8 w-12 h-4 bg-cream rounded-r-lg shadow-lg"></div>
              
              {/* Animated water drops */}
              {isActive && [...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute -right-2 top-12 w-3 h-3 bg-blue-400 rounded-full animate-water-drop opacity-80"
                  style={{
                    animationDelay: `${i * 500}ms`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
            
            {/* Collection basin */}
            <div className="mt-8 w-20 h-6 bg-gradient-to-b from-cream/80 to-cream rounded-lg shadow-inner relative">
              {/* Water level animation */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 bg-blue-300/60 rounded-lg animate-fill-basin"></div>
              )}
            </div>
          </div>
          
          {/* Floating token symbols */}
          <div className="absolute inset-0">
            {isActive && [...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-tokens"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 300}ms`
                }}
              >
                <Coins className="w-4 h-4 text-cream/60" />
              </div>
            ))}
          </div>
          
          {/* Distribution network */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full">
              {isActive && (
                <>
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(249, 242, 233, 0.2)" strokeWidth="1" className="animate-expand-circle" />
                  <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(249, 242, 233, 0.1)" strokeWidth="1" className="animate-expand-circle" style={{animationDelay: '0.5s'}} />
                </>
              )}
            </svg>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <section 
      id="project-carousel" 
      className="py-24 bg-gradient-to-br from-cream to-white relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-charcoal blur-3xl animate-float-3d"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-charcoal blur-3xl animate-float-3d delay-1000"></div>
        
        {/* Animated hexagon grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(30,30,30,0.02)_1px,transparent_1px)] bg-[length:40px_40px] animate-grid-drift"></div>
      </div>

      {/* Floating 3D particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-charcoal/10 rounded-full animate-float-particle-3d transform-gpu"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-charcoal transition-all duration-1000 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                textShadow: '0 10px 30px rgba(30, 30, 30, 0.1)',
                transform: isVisible ? 'translateZ(20px)' : 'translateZ(0)'
              }}>
            Featured Projects
          </h2>
          <p className={`text-xl text-charcoal/70 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Interactive showcase of blockchain applications with custom animated visualizations
          </p>
        </div>

        {/* Enhanced 3D Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-400 transform-gpu ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
             style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Main Project Card with custom animations */}
          <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 relative group"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${(mousePosition.y - 400) * 0.01}deg) rotateY(${(mousePosition.x - 600) * 0.01}deg) translateZ(0px)`,
                  boxShadow: '0 25px 50px rgba(30, 30, 30, 0.15), 0 0 0 1px rgba(30, 30, 30, 0.05)'
                }}>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Custom Animated Project Visual */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <ProjectVisual project={currentProj} isActive={isVisible} />
                
                {/* Enhanced Project Badge with 3D effect */}
                <div className="absolute top-6 left-6" style={{ transform: 'translateZ(30px)' }}>
                  <Badge className="bg-cream/95 backdrop-blur-sm text-charcoal px-4 py-2 text-sm font-semibold shadow-lg transform hover:scale-110 transition-all duration-300">
                    Project {currentProject + 1} of {projects.length}
                  </Badge>
                </div>

                {/* Animated border glow */}
                <div className="absolute inset-0 border-2 border-cream/20 group-hover:border-cream/40 transition-all duration-500 rounded-l-lg lg:rounded-l-lg lg:rounded-r-none"></div>
              </div>

              {/* Enhanced Project Content with 3D layering */}
              <div className="p-8 lg:p-12 relative" style={{ transformStyle: 'preserve-3d' }}>
                <CardHeader className="p-0 mb-6" style={{ transform: 'translateZ(15px)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-3xl font-bold text-charcoal group-hover:text-charcoal/90 transition-colors duration-300">
                      {currentProj.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                        onClick={() => console.log('GitHub:', currentProj.githubUrl)}
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                        onClick={() => console.log('Live Demo:', currentProj.liveUrl)}
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                  <p className="text-lg text-charcoal/70 leading-relaxed">
                    {currentProj.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Enhanced Tech Stack with 3D badges */}
                  <div className="mb-8" style={{ transform: 'translateZ(12px)' }}>
                    <h4 className="text-sm font-semibold text-charcoal/60 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProj.techStack.map((tech, index) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg"
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            transform: `translateZ(${5 + index}px)`
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Key Highlights with 3D effects */}
                  <div className="space-y-4" style={{ transform: 'translateZ(8px)' }}>
                    <h4 className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    {currentProj.highlights.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 bg-charcoal/2 rounded-lg hover:bg-charcoal/5 transition-all duration-300 transform hover:-translate-y-1"
                           style={{ transform: `translateZ(${5 + index * 2}px)` }}>
                        <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0 animate-pulse-3d"></div>
                        <p className="text-charcoal/80 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Contact CTA with enhanced 3D effect */}
                  <div className="mt-8 pt-6 border-t border-charcoal/10" style={{ transform: 'translateZ(20px)' }}>
                    <Button 
                      onClick={handleEmailContact}
                      className="w-full bg-charcoal hover:bg-charcoal/90 text-cream py-3 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                    >
                      <span className="relative z-10">Discuss This Project</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Enhanced Navigation Controls with 3D effects */}
          <div className="flex items-center justify-center mt-12 gap-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              style={{ transform: 'translateZ(10px)' }}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Enhanced 3D Dots Indicator */}
            <div className="flex gap-3" style={{ transform: 'translateZ(15px)' }}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-150 ${
                    index === currentProject 
                      ? 'bg-charcoal scale-125 shadow-lg' 
                      : 'bg-charcoal/30 hover:bg-charcoal/50 shadow-md'
                  }`}
                  style={{ 
                    transform: `translateZ(${index === currentProject ? '20px' : '10px'})`,
                    boxShadow: index === currentProject ? '0 10px 25px rgba(30, 30, 30, 0.3)' : '0 5px 15px rgba(30, 30, 30, 0.1)'
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              style={{ transform: 'translateZ(10px)' }}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            <div className="mx-4 h-8 w-px bg-charcoal/20"></div>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoplay}
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              style={{ transform: 'translateZ(10px)' }}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-cards {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-15px) rotateZ(5deg); }
        }
        
        @keyframes draw-line {
          0% { stroke-dasharray: 0, 100; }
          100% { stroke-dasharray: 100, 0; }
        }
        
        @keyframes water-drop {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(40px) scale(0.5); opacity: 0; }
        }
        
        @keyframes fill-basin {
          0% { height: 0%; }
          100% { height: 80%; }
        }
        
        @keyframes float-tokens {
          0%, 100% { transform: translateY(0) rotateZ(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotateZ(180deg); opacity: 1; }
        }
        
        @keyframes expand-circle {
          0% { r: 0; opacity: 1; }
          100% { r: 50%; opacity: 0; }
        }
        
        .animate-float-cards { animation: float-cards 3s ease-in-out infinite; }
        .animate-draw-line { animation: draw-line 1s ease-in-out; }
        .animate-water-drop { animation: water-drop 2s ease-in infinite; }
        .animate-fill-basin { animation: fill-basin 3s ease-in-out infinite; }
        .animate-float-tokens { animation: float-tokens 4s ease-in-out infinite; }
        .animate-expand-circle { animation: expand-circle 3s ease-out infinite; }
      `}</style>
    </section>
  );
};

export default AnimatedProjectCarousel;