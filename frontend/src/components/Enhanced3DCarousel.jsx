import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { projects } from '../data/mock';

const Enhanced3DCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Project-specific images
  const projectImages = {
    0: "https://images.unsplash.com/photo-1643449689391-f798261a16ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxibG9ja2NoYWluJTIwZGlnaXRhbHxlbnwwfHx8fDE3NTg0MzUyNzB8MA&ixlib=rb-4.1.0&q=85", // NFT Marketplace - Tezos Gold Coin
    1: "https://images.unsplash.com/photo-1621579385187-c12061b577be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBmYXVjZXR8ZW58MHx8fHwxNzU4NDM1Mjc2fDA&ixlib=rb-4.1.0&q=85" // Muscify Faucet - Bitcoin on gold plate
  };

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
    window.location.href = 'mailto:chinmaydhamgunde10@gmail.com?subject=Project Inquiry&body=Hi Chinmay, I would like to discuss your projects and potential collaboration opportunities.';
  };

  const currentProj = projects[currentProject];

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
            Interactive showcase of blockchain applications with cutting-edge 3D visuals
          </p>
        </div>

        {/* Enhanced 3D Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-400 transform-gpu ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
             style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Main Project Card with enhanced 3D effects */}
          <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 relative group"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${(mousePosition.y - 400) * 0.01}deg) rotateY(${(mousePosition.x - 600) * 0.01}deg) translateZ(0px)`,
                  boxShadow: '0 25px 50px rgba(30, 30, 30, 0.15), 0 0 0 1px rgba(30, 30, 30, 0.05)'
                }}>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Enhanced Project Image/Visual with 3D layers */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-gray-800 to-charcoal"></div>
                
                {/* Project-specific image */}
                <img 
                  src={projectImages[currentProject]}
                  alt={`${currentProj.name} Visualization`}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(10px)'
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent group-hover:from-charcoal/60 transition-all duration-500"></div>
                
                {/* Enhanced Project Badge with 3D effect */}
                <div className="absolute top-6 left-6" style={{ transform: 'translateZ(30px)' }}>
                  <Badge className="bg-cream/95 backdrop-blur-sm text-charcoal px-4 py-2 text-sm font-semibold shadow-lg transform hover:scale-110 transition-all duration-300">
                    Project {currentProject + 1} of {projects.length}
                  </Badge>
                </div>

                {/* Enhanced 3D Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-cream/30 rounded-lg rotate-45 animate-float-3d" 
                       style={{ transform: 'translateZ(40px)' }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-cream/40 rounded-full animate-float-3d delay-1000" 
                       style={{ transform: 'translateZ(35px)' }}></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-8 bg-cream/35 rounded-full animate-float-3d delay-500" 
                       style={{ transform: 'translateZ(25px)' }}></div>
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
                        <div className="w-2 h-2 bg-charcoal rounded-full mt-3 flex-shrink-0 animate-pulse-3d"></div>
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
                      <span className="relative z-10">Send Message About This Project</span>
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
        
        @keyframes grid-drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 40px) rotate(360deg); }
        }
        
        .animate-float-particle-3d {
          animation: float-particle-3d 4s ease-in-out infinite;
        }
        
        .animate-grid-drift {
          animation: grid-drift 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Enhanced3DCarousel;