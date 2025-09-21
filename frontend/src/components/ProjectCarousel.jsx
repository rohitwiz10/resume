import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

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
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying]);

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

  const currentProj = projects[currentProject];

  return (
    <section id="project-carousel" className="py-24 bg-gradient-to-br from-cream to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-charcoal blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-charcoal blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-charcoal transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-charcoal/70 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Interactive showcase of full-stack applications bridging Web2 and Web3 technologies
          </p>
        </div>

        {/* Main Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Card className="bg-white border-0 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Image/Visual */}
              <div className="relative h-80 lg:h-96 bg-gradient-to-br from-charcoal via-gray-800 to-charcoal flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHx3ZWIzJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTc1ODQzMzkwMHww&ixlib=rb-4.1.0&q=85"
                  alt="Web3 Development Workspace"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                
                {/* Project Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-cream text-charcoal px-4 py-2 text-sm font-semibold">
                    Project {currentProject + 1} of {projects.length}
                  </Badge>
                </div>

                {/* 3D Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-cream/20 rounded-lg rotate-45 animate-float"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-cream/30 rounded-full animate-float delay-1000"></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-8 bg-cream/25 rounded-full animate-float delay-500"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-12">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-3xl font-bold text-charcoal">
                      {currentProj.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
                        onClick={() => console.log('GitHub:', currentProj.githubUrl)}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
                        onClick={() => console.log('Live Demo:', currentProj.liveUrl)}
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

                <CardContent className="p-0">
                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-charcoal/60 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProj.techStack.map((tech, index) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 transform hover:scale-105"
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    {currentProj.highlights.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-charcoal rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-charcoal/80 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-charcoal scale-125' 
                      : 'bg-charcoal/30 hover:bg-charcoal/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            <div className="mx-2 h-6 w-px bg-charcoal/20"></div>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoplay}
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;