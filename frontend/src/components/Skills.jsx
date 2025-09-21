import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Code, Database, Layers, Wrench, Coins, Globe } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState({});
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Staggered animation for skills
          setTimeout(() => {
            Object.keys(skillCategories).forEach((category, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => ({ ...prev, [category]: true }));
              }, index * 200);
            });
          }, 300);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    languages: {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: skills.languages
    },
    frontend: {
      title: 'Frontend',
      icon: Globe,
      color: 'from-purple-500 to-purple-600', 
      skills: skills.frontend
    },
    backend: {
      title: 'Backend',
      icon: Database,
      color: 'from-indigo-500 to-indigo-600',
      skills: skills.backend
    },
    databases: {
      title: 'Databases',
      icon: Layers,
      color: 'from-emerald-500 to-emerald-600',
      skills: skills.databases
    },
    blockchain: {
      title: 'Blockchain',
      icon: Coins,
      color: 'from-orange-500 to-orange-600',
      skills: skills.blockchain
    },
    tools: {
      title: 'Developer Tools',
      icon: Wrench,
      color: 'from-slate-500 to-slate-600',
      skills: skills.tools
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHx3ZWIzJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTc1ODQzMzkwMHww&ixlib=rb-4.1.0&q=85"
          alt="Development Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-charcoal transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Technical Expertise
          </h2>
          <p className={`text-xl text-charcoal/70 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A comprehensive skill set spanning modern web development, blockchain technology, and full-stack application architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Object.entries(skillCategories).map(([key, category], index) => {
            const IconComponent = category.icon;
            const isVisible = visibleSkills[key];
            
            return (
              <Card 
                key={key}
                className={`p-6 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover-lift card-3d ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-charcoal p-3 mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-12`}>
                    <IconComponent className="w-6 h-6 text-cream" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className={`text-sm py-1 px-3 bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:${category.color} hover:text-white transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-fadeIn' : ''}`}
                      style={{ 
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Skill proficiency indicator */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className={`h-2 bg-slate-100 rounded-full overflow-hidden ${isVisible ? 'animate-fillBar' : ''}`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${Math.min(85 + (category.skills.length * 2), 95)}%` : '0%',
                        transitionDelay: `${(index * 100) + 300}ms`
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    {category.skills.length} technologies
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Floating skill badges animation */}
        <div className="mt-16 text-center">
          <div className={`transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg font-medium animate-pulse">
              Full-Stack • Web3 • Blockchain Expert
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;