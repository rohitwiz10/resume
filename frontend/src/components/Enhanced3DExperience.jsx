import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Trophy, Users, TrendingUp, Calendar, Award, Sparkles, Code, Target } from 'lucide-react';
import { experience, achievements, education } from '../data/mock';

const Enhanced3DExperience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Staggered animation for all items
          const allItems = [...experience, ...achievements];
          allItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const experienceElement = document.getElementById('experience');
    if (experienceElement) {
      experienceElement.addEventListener('mousemove', handleMouseMove);
      return () => experienceElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getExperienceIcon = (type) => {
    if (type === 'internship') return Building2;
    if (type === 'leadership') return Users;
    return TrendingUp;
  };

  const getAchievementIcon = (type) => {
    if (type === 'competition') return Trophy;
    if (type === 'programming') return Award;
    return TrendingUp;
  };

  return (
    <section 
      id="experience" 
      className="py-24 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-charcoal/3 rounded-full blur-3xl animate-float-3d"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-charcoal/2 rounded-full blur-3xl animate-float-3d delay-1000"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,var(--charcoal)_1px,transparent_1px)] bg-[length:50px_50px] animate-grid-drift"></div>
        
        {/* Floating tech icons */}
        {[Code, Target, Sparkles].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float-rotate transform-gpu"
            style={{
              left: `${20 + index * 25}%`,
              top: `${30 + index * 15}%`,
              animationDelay: `${index * 800}ms`,
            }}
          >
            <div className="p-3 bg-charcoal/5 rounded-xl backdrop-blur-sm hover:bg-charcoal/10 transition-all duration-500">
              <Icon className="w-6 h-6 text-charcoal/20" />
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 text-charcoal transition-all duration-1000 transform-gpu ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              textShadow: '0 10px 30px rgba(30, 30, 30, 0.1)',
              transform: isInView ? 'translateZ(20px)' : 'translateZ(0)'
            }}
          >
            Experience & Achievements
          </h2>
          <p className={`text-xl text-charcoal/70 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A journey of continuous learning, from hands-on development to community leadership and competitive programming excellence
          </p>
        </div>

        {/* Enhanced Education Section with 3D effects */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card 
            className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl max-w-4xl mx-auto hover-lift-3d transform-gpu"
            style={{
              transform: `rotateX(${(mousePosition.y - 400) * 0.005}deg) rotateY(${(mousePosition.x - 600) * 0.005}deg) translateZ(10px)`,
              boxShadow: '0 25px 50px rgba(30, 30, 30, 0.15)'
            }}
          >
            <CardHeader className="pb-4" style={{ transform: 'translateZ(15px)' }}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-charcoal rounded-xl transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                  <Building2 className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-charcoal">Education</CardTitle>
                  <p className="text-charcoal/70">{education.institution}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent style={{ transformStyle: 'preserve-3d' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="transform hover:scale-105 transition-all duration-300" style={{ transform: 'translateZ(8px)' }}>
                  <h4 className="font-semibold text-charcoal mb-1">{education.degree}</h4>
                  <p className="text-charcoal/60 text-sm">{education.location}</p>
                </div>
                <div className="transform hover:scale-105 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                  <h4 className="font-semibold text-charcoal mb-1">Duration</h4>
                  <p className="text-charcoal/60 text-sm">{education.duration}</p>
                </div>
                <div className="transform hover:scale-105 transition-all duration-300" style={{ transform: 'translateZ(12px)' }}>
                  <h4 className="font-semibold text-charcoal mb-1">CGPA</h4>
                  <Badge className="bg-charcoal text-cream transform hover:scale-110 transition-all duration-300">
                    {education.cgpa}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Professional Experience */}
          <div style={{ transformStyle: 'preserve-3d' }}>
            <h3 
              className={`text-2xl font-bold text-charcoal mb-8 flex items-center gap-3 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transform: 'translateZ(15px)' }}
            >
              <Building2 className="w-6 h-6 text-charcoal" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => {
                const IconComponent = getExperienceIcon(exp.type);
                const isVisible = visibleItems.includes(index);
                
                return (
                  <Card 
                    key={exp.id}
                    className="bg-white/90 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover-lift-3d"
                    style={{
                      transform: isVisible 
                        ? `translateZ(${10 + index * 5}px) rotateX(${(mousePosition.y - 400) * 0.002}deg) rotateY(${(mousePosition.x - 600) * 0.002}deg)` 
                        : 'translateZ(0px) translateY(30px) scale(0.95)',
                      opacity: isVisible ? 1 : 0,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <CardHeader className="pb-3" style={{ transform: 'translateZ(10px)' }}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-charcoal rounded-lg transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                            <IconComponent className="w-5 h-5 text-cream" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-charcoal leading-tight">
                              {exp.position}
                            </CardTitle>
                            <p className="text-charcoal/70 font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs border-charcoal/20 text-charcoal/60">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent style={{ transformStyle: 'preserve-3d' }}>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div 
                            key={achIndex}
                            className="flex items-start gap-3 p-3 bg-charcoal/2 rounded-lg hover:bg-charcoal/5 transition-all duration-500 transform hover:-translate-y-1"
                            style={{ 
                              transform: `translateZ(${5 + achIndex * 2}px)`,
                              transitionDelay: `${600 + (achIndex * 150)}ms`,
                              opacity: isVisible ? 1 : 0
                            }}
                          >
                            <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0 animate-pulse-3d"></div>
                            <p className="text-charcoal/80 text-sm leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Enhanced Achievements */}
          <div style={{ transformStyle: 'preserve-3d' }}>
            <h3 
              className={`text-2xl font-bold text-charcoal mb-8 flex items-center gap-3 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transform: 'translateZ(15px)' }}
            >
              <Trophy className="w-6 h-6 text-charcoal" />
              Achievements & Recognition
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = getAchievementIcon(achievement.type);
                const isVisible = visibleItems.includes(experience.length + index);
                
                return (
                  <Card 
                    key={achievement.id}
                    className={`bg-white/90 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover-lift-3d ${achievement.highlight ? 'ring-2 ring-charcoal/20' : ''}`}
                    style={{
                      transform: isVisible 
                        ? `translateZ(${15 + index * 5}px) rotateX(${(mousePosition.y - 400) * 0.003}deg) rotateY(${(mousePosition.x - 600) * 0.003}deg)` 
                        : 'translateZ(0px) translateY(30px) scale(0.95)',
                      opacity: isVisible ? 1 : 0,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <CardContent className="p-6" style={{ transformStyle: 'preserve-3d' }}>
                      <div className="flex items-start gap-4">
                        <div 
                          className={`p-3 rounded-xl transform hover:scale-110 hover:rotate-12 transition-all duration-500 ${achievement.highlight ? 'bg-charcoal' : 'bg-charcoal/80'}`}
                          style={{ transform: 'translateZ(15px)' }}
                        >
                          <IconComponent className="w-5 h-5 text-cream" />
                        </div>
                        <div className="flex-1" style={{ transform: 'translateZ(10px)' }}>
                          <h4 className="font-semibold text-charcoal mb-2 flex items-center gap-2">
                            {achievement.title}
                            {achievement.highlight && (
                              <Badge className="bg-charcoal text-cream text-xs transform hover:scale-110 transition-all duration-300">
                                Featured
                              </Badge>
                            )}
                          </h4>
                          <p className="text-charcoal/70 text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Summary Stats with 3D effects */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card 
            className="bg-charcoal text-cream border-0 shadow-2xl hover-lift-3d transform-gpu"
            style={{
              transform: `rotateX(${(mousePosition.y - 400) * 0.003}deg) rotateY(${(mousePosition.x - 600) * 0.003}deg) translateZ(20px)`,
              background: 'linear-gradient(135deg, var(--charcoal) 0%, rgba(30, 30, 30, 0.9) 100%)'
            }}
          >
            <CardContent className="p-8" style={{ transformStyle: 'preserve-3d' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: '2+', label: 'Years Coding', color: 'text-cream/90' },
                  { value: '5K+', label: 'Community Members', color: 'text-cream/80' },
                  { value: '$1K', label: 'Prize Won', color: 'text-cream/90' },
                  { value: '8.1', label: 'CGPA', color: 'text-cream/80' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="transition-all duration-500 hover:scale-110 transform-gpu"
                    style={{ 
                      transform: `translateZ(${10 + index * 3}px)`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 animate-pulse-glow`}>
                      {stat.value}
                    </div>
                    <div className="text-cream/60 text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Enhanced3DExperience;