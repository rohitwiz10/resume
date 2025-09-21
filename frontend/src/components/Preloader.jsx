import React, { useState, useEffect } from 'react';
import { Code2, Zap, Globe } from 'lucide-react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [Code2, Zap, Globe];
  const IconComponent = icons[currentIcon];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const iconTimer = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(iconTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream via-white to-cream">
      <div className="text-center">
        {/* Animated Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-charcoal to-gray-800 flex items-center justify-center transform animate-pulse">
            <IconComponent className="w-12 h-12 text-cream animate-spin" style={{ animationDuration: '2s' }} />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-charcoal rounded-full animate-float"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-charcoal mb-2 animate-fadeInUp">
            Chinmay Dhamgunde
          </h2>
          <p className="text-lg text-charcoal/70 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Full-Stack Developer • Web3 Specialist
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="h-2 bg-charcoal/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-charcoal to-gray-800 rounded-full transition-all duration-100 ease-out transform origin-left"
              style={{ 
                width: `${progress}%`,
                animation: progress > 0 ? 'shimmer 2s infinite' : 'none'
              }}
            />
          </div>
          <div className="text-sm text-charcoal/60 mt-2 font-mono">
            {progress}% Loading...
          </div>
        </div>

        {/* Loading Messages */}
        <div className="text-sm text-charcoal/50 animate-pulse">
          {progress < 30 && "Initializing portfolio..."}
          {progress >= 30 && progress < 60 && "Loading projects..."}
          {progress >= 60 && progress < 90 && "Preparing experience..."}
          {progress >= 90 && "Almost ready!"}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { box-shadow: 0 0 0 0 rgba(30, 30, 30, 0.1); }
          70% { box-shadow: 0 0 0 8px rgba(30, 30, 30, 0); }
          100% { box-shadow: 0 0 0 0 rgba(30, 30, 30, 0); }
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;