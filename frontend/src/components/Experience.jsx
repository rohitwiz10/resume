import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Trophy, Users, TrendingUp, Calendar, Award } from 'lucide-react';
import { experience, achievements, education } from '../data/mock';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isInView, setIsInView] = useState(false);

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
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
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
    <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Experience & Achievements
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A journey of continuous learning, from hands-on development to community leadership and competitive programming excellence
          </p>
        </div>

        {/* Education Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg max-w-4xl mx-auto">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-slate-800">Education</CardTitle>
                  <p className="text-slate-600">{education.institution}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">{education.degree}</h4>
                  <p className="text-slate-600 text-sm">{education.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Duration</h4>
                  <p className="text-slate-600 text-sm">{education.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">CGPA</h4>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                    {education.cgpa}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <div>
            <h3 className={`text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Building2 className="w-6 h-6 text-blue-600" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => {
                const IconComponent = getExperienceIcon(exp.type);
                const isVisible = visibleItems.includes(index);
                
                return (
                  <Card 
                    key={exp.id}
                    className={`bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-slate-800 leading-tight">
                              {exp.position}
                            </CardTitle>
                            <p className="text-blue-600 font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div 
                            key={achIndex}
                            className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                            style={{ transitionDelay: `${600 + (achIndex * 150)}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-700 text-sm leading-relaxed">
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

          {/* Achievements */}
          <div>
            <h3 className={`text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <Trophy className="w-6 h-6 text-purple-600" />
              Achievements & Recognition
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = getAchievementIcon(achievement.type);
                const isVisible = visibleItems.includes(experience.length + index);
                
                return (
                  <Card 
                    key={achievement.id}
                    className={`bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'} ${achievement.highlight ? 'ring-2 ring-purple-200' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${achievement.highlight ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-slate-500 to-slate-600'}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                            {achievement.title}
                            {achievement.highlight && (
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                                Featured
                              </Badge>
                            )}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
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

        {/* Summary Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 text-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="transition-all duration-500 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">2+</div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">Years Coding</div>
                </div>
                <div className="transition-all duration-500 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">5K+</div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">Community Members</div>
                </div>
                <div className="transition-all duration-500 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">$1K</div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">Prize Won</div>
                </div>
                <div className="transition-all duration-500 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">8.1</div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">CGPA</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;