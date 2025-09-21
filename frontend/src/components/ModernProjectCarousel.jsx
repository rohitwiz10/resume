import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Pause, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { projects } from '../data/mock';

const ModernProjectCarousel = () => {
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

  // Modern project visual inspired by the provided images
  const ModernProjectVisual = ({ project, isActive }) => {
    if (project.name === "NFT Marketplace") {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-charcoal to-gray-900 flex items-center justify-center overflow-hidden">
          {/* Main content card */}
          <div className={`relative bg-white rounded-2xl p-8 max-w-sm transform transition-all duration-1000 ${isActive ? 'scale-100 rotate-0' : 'scale-95 rotate-2'}`}>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-2xl font-bold text-charcoal mb-2">
                <Star className="w-6 h-6 text-yellow-500" />
                NFT MARKETPLACE
              </div>
              <p className="text-charcoal/70 text-sm">Digital Asset Trading Platform</p>
            </div>
            
            {/* Visual elements */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                <span className="text-sm font-medium text-charcoal">Smart Contracts</span>
                <Badge className="bg-green-500 text-white text-xs">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                <span className="text-sm font-medium text-charcoal">Web3 Integration</span>
                <Badge className="bg-blue-500 text-white text-xs">Enabled</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                <span className="text-sm font-medium text-charcoal">User Experience</span>
                <Badge className="bg-purple-500 text-white text-xs">Optimized</Badge>
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="mt-6 pt-4 border-t border-charcoal/10">
              <div className="flex items-center justify-between">
                <span className="text-xs text-charcoal/60">Built with React & Solidity</span>
                <ArrowUpRight className="w-4 h-4 text-charcoal/60" />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            {isActive && (
              <>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-4 -right-4 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
              </>
            )}
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            {isActive && [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-decoration"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 300}ms`
                }}
              >
                <div className="w-1 h-1 bg-cream/30 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (project.name === "Muscify Faucet DApp") {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-charcoal to-gray-900 flex items-center justify-center overflow-hidden">
          {/* Main content card */}
          <div className={`relative bg-charcoal rounded-2xl p-8 max-w-sm border border-cream/20 transform transition-all duration-1000 ${isActive ? 'scale-100 rotate-0' : 'scale-95 rotate-1'}`}>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-2xl font-bold text-cream mb-2">
                <Sparkles className="w-6 h-6 text-blue-400" />
                TOKEN FAUCET
              </div>
              <p className="text-cream/70 text-sm">Cryptocurrency Distribution</p>
            </div>
            
            {/* Central visual element */}
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center ${isActive ? 'animate-pulse' : ''}`}>
                  <span className="text-charcoal font-bold text-lg">$</span>
                </div>
              </div>
              
              {/* Distribution indicators */}
              {isActive && (
                <>
                  <div className="absolute top-0 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute top-4 right-8 w-2 h-2 bg-green-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
                </>
              )}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="text-center p-3 bg-cream/10 rounded-lg">
                <div className="text-lg font-bold text-cream">24H</div>
                <div className="text-xs text-cream/70">Distribution</div>
              </div>
              <div className="text-center p-3 bg-cream/10 rounded-lg">
                <div className="text-lg font-bold text-cream">Safe</div>
                <div className="text-xs text-cream/70">Secure</div>
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="mt-6 pt-4 border-t border-cream/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-cream/60">Ready to Connect</span>
                <div className={`w-2 h-2 bg-green-400 rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
              </div>
            </div>
          </div>
          
          {/* Background network effect */}
          <div className="absolute inset-0 pointer-events-none">
            {isActive && (
              <svg className="w-full h-full">
                <defs>
                  <radialGradient id="networkGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(249, 242, 233, 0.1)" />
                    <stop offset="100%" stopColor="rgba(249, 242, 233, 0)" />
                  </radialGradient>
                </defs>
                <circle cx="50%" cy="50%" r="30%" fill="url(#networkGlow)" className="animate-pulse" />
                <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(249, 242, 233, 0.1)" strokeWidth="1" className="animate-spin-slow" />
              </svg>
            )}
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
            Modern showcase of blockchain applications with elegant design inspired interfaces
          </p>
        </div>

        {/* Enhanced 3D Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-400 transform-gpu ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
             style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Main Project Card with modern design */}
          <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 relative group"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${(mousePosition.y - 400) * 0.01}deg) rotateY(${(mousePosition.x - 600) * 0.01}deg) translateZ(0px)`,
                  boxShadow: '0 25px 50px rgba(30, 30, 30, 0.15), 0 0 0 1px rgba(30, 30, 30, 0.05)'
                }}>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Modern Project Visual */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <ModernProjectVisual project={currentProj} isActive={isVisible} />
                
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
        @keyframes float-decoration {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-decoration {
          animation: float-decoration 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ModernProjectCarousel;