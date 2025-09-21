import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Calendar, Sparkles, Globe, Code2 } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Enhanced3DContact = () => {
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.addEventListener('mousemove', handleMouseMove);
      return () => contactElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email content
      const emailSubject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Sent from portfolio website`
      );
      
      // Open email client
      window.location.href = `mailto:chinmaydhamgunde10@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      
      // Show success message
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 3000);
      }, 1000);
      
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'bg-charcoal'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'bg-charcoal/80'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'bg-charcoal/90'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      color: 'hover:bg-charcoal hover:text-cream'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      href: personalInfo.linkedin,
      color: 'hover:bg-charcoal hover:text-cream'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-charcoal/3 rounded-full blur-3xl animate-float-3d"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-charcoal/2 rounded-full blur-3xl animate-float-3d delay-1000"></div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_24%,rgba(30,30,30,.05)_25%,rgba(30,30,30,.05)_26%,transparent_27%,transparent_74%,rgba(30,30,30,.05)_75%,rgba(30,30,30,.05)_76%,transparent_77%,transparent)] bg-[length:40px_40px] animate-grid-move"></div>
        
        {/* Floating contact-related icons */}
        {[MessageCircle, Send, Globe].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float-rotate transform-gpu"
            style={{
              left: `${15 + index * 30}%`,
              top: `${25 + index * 20}%`,
              animationDelay: `${index * 1000}ms`,
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
            Let's Connect
          </h2>
          <p className={`text-xl text-charcoal/70 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Ready to build something amazing together? I'm always open to discussing new opportunities, innovative projects, and collaborations in Web3 and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Information with 3D effects */}
          <div 
            className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card 
              className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl h-full hover-lift-3d transform-gpu"
              style={{
                transform: `rotateX(${(mousePosition.y - 400) * 0.005}deg) rotateY(${(mousePosition.x - 600) * 0.005}deg) translateZ(10px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <CardHeader style={{ transform: 'translateZ(15px)' }}>
                <CardTitle className="text-2xl text-charcoal flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-charcoal" />
                  Get In Touch
                </CardTitle>
                <p className="text-charcoal/70">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6" style={{ transformStyle: 'preserve-3d' }}>
                {/* Enhanced contact methods */}
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-charcoal/5 hover:bg-charcoal/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                        style={{ 
                          transform: `translateZ(${10 + index * 3}px)`,
                          transitionDelay: `${500 + (index * 150)}ms`
                        }}
                      >
                        <div className={`p-3 ${method.color} rounded-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          <IconComponent className="w-5 h-5 text-cream" />
                        </div>
                        <div>
                          <div className="font-semibold text-charcoal group-hover:text-charcoal/80 transition-colors duration-300">
                            {method.label}
                          </div>
                          <div className="text-charcoal/70">{method.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Enhanced social links */}
                <div className="pt-6 border-t border-charcoal/10" style={{ transform: 'translateZ(12px)' }}>
                  <h4 className="text-lg font-semibold text-charcoal mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-4 rounded-xl border-2 border-charcoal/20 ${social.color} transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 shadow-lg hover:shadow-xl`}
                          style={{ 
                            transform: `translateZ(${15 + index * 5}px)`,
                            transitionDelay: `${800 + (index * 100)}ms`
                          }}
                        >
                          <IconComponent className="w-6 h-6 text-charcoal" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced availability status */}
                <div 
                  className="pt-6 border-t border-charcoal/10"
                  style={{ transform: 'translateZ(8px)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-3d"></div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
                      <Calendar className="w-3 h-3 mr-1" />
                      Available for opportunities
                    </Badge>
                  </div>
                  <p className="text-sm text-charcoal/60 mt-2">
                    Currently seeking full-time positions and interesting freelance projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form with 3D effects */}
          <div 
            className={`transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card 
              className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl h-full hover-lift-3d transform-gpu"
              style={{
                transform: `rotateX(${(mousePosition.y - 400) * 0.005}deg) rotateY(${(mousePosition.x - 600) * 0.005}deg) translateZ(15px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <CardHeader style={{ transform: 'translateZ(15px)' }}>
                <CardTitle className="text-2xl text-charcoal flex items-center gap-3">
                  <Send className="w-6 h-6 text-charcoal" />
                  Send a Message
                </CardTitle>
                <p className="text-charcoal/70">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              
              <CardContent style={{ transformStyle: 'preserve-3d' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div style={{ transform: 'translateZ(10px)' }}>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-charcoal border-charcoal/20 hover:border-charcoal/40 transform hover:scale-[1.02]"
                      />
                    </div>
                    <div style={{ transform: 'translateZ(12px)' }}>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-charcoal border-charcoal/20 hover:border-charcoal/40 transform hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  <div style={{ transform: 'translateZ(14px)' }}>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-charcoal border-charcoal/20 hover:border-charcoal/40 resize-none transform hover:scale-[1.01]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-charcoal hover:bg-charcoal/90 text-cream py-3 text-lg font-medium transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
                        Opening Email Client...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center animate-fadeIn transform hover:scale-105 transition-all duration-300">
                      Email client opened! Your message will be sent to chinmaydhamgunde10@gmail.com
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center animate-fadeIn">
                      Something went wrong. Please try again or email directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enhanced3DContact;