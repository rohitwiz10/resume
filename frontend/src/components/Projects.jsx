import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Zap, Shield, TrendingUp } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Staggered animation for projects
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const getProjectIcon = (projectName) => {
    if (projectName.toLowerCase().includes('nft')) return Shield;
    if (projectName.toLowerCase().includes('faucet')) return Zap;
    return TrendingUp;
  };

  const handleLiveDemo = (url) => {
    // Mock interaction - in real app would open URL
    console.log(`Opening live demo: ${url}`);
    alert('This would open the live demo in a new tab!');
  };

  const handleGithub = (url) => {
    // Mock interaction - in real app would open URL  
    console.log(`Opening GitHub: ${url}`);
    alert('This would open the GitHub repository!');
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Showcasing full-stack applications that bridge traditional web development with cutting-edge blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.name);
            const isVisible = visibleProjects.includes(index);
            
            return (
              <Card 
                key={project.id}
                className={`bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} overflow-hidden group`}
              >
                {/* Project header with gradient background */}
                <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-6 text-white">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 border border-white/30"
                          onClick={() => handleGithub(project.githubUrl)}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm" 
                          className="text-white hover:bg-white/20 border border-white/30"
                          onClick={() => handleLiveDemo(project.liveUrl)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                    
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {project.name}
                      </CardTitle>
                      <p className="text-blue-100 text-lg">
                        {project.description}
                      </p>
                    </CardHeader>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Tech stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className={`text-xs py-1 px-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-blue-100 hover:to-purple-100 hover:text-slate-800 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-slideInUp' : ''}`}
                          style={{ 
                            animationDelay: `${500 + (techIndex * 100)}ms`,
                            animationFillMode: 'both'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    {project.highlights.map((highlight, hlIndex) => (
                      <div 
                        key={hlIndex}
                        className={`flex items-start gap-3 p-3 bg-slate-50 rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                        style={{ transitionDelay: `${800 + (hlIndex * 200)}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Project metrics simulation */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1200ms' }}>
                        <div className="text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Uptime</div>
                      </div>
                      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1300ms' }}>
                        <div className="text-2xl font-bold text-purple-600">30%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Faster</div>
                      </div>
                      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1400ms' }}>
                        <div className="text-2xl font-bold text-indigo-600">5k+</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Users</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;