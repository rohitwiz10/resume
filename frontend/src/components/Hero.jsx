import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting Badge */}
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium animate-fadeInDown">
            <MapPin className="w-4 h-4 mr-2" />
            {personalInfo.location}
          </Badge>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent animate-fadeInUp">
            {personalInfo.name}
          </h1>

          {/* Title and subtitle */}
          <div className="mb-8 animate-fadeInUp delay-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-xl md:text-2xl text-purple-600 font-medium">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-300">
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp delay-400">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => handleScroll('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => handleScroll('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fadeInUp delay-500">
            <a 
              href={personalInfo.github}
              className="p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-slate-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-slate-700" />
            </a>
            <a 
              href={personalInfo.linkedin}
              className="p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-purple-50"
            >
              <Mail className="w-6 h-6 text-purple-600" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => handleScroll('skills')}
              className="text-slate-400 hover:text-slate-600 transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;