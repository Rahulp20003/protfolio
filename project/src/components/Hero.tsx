import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, Linkedin, Github, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Rahul P — a Software Developer";
  
  useEffect(() => {
    window.scrollTo(0, 0);
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const contactInfo = [
    { icon: Mail, label: 'jalandermali@gmail.com', href: 'mailto:jalandermali@gmail.com' },
    { icon: Phone, label: '6362917218', href: 'tel:6362917218' },
    { icon: Linkedin, label: 'LinkedIn Profile', href: 'https://linkedin.com/in/rahul-p-9589912a2' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/rahul-p-git' },
  ];

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-green-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-bounce delay-1000"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent h-px top-1/3 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent h-px top-2/3 animate-pulse delay-500"></div>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side: Profile Card */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-900/80 rounded-3xl p-8 shadow-xl max-w-sm w-full mb-8 lg:mb-0 lg:pr-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWNuajJqeXFyNG4zMThzcXVncTViMHBnN2NzZWcwODZsZDQ0bWJmNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" alt="Profile GIF" className="w-80 h-80 rounded-2xl object-cover mb-6 shadow-lg" />
          <h2 className="text-3xl font-bold text-white mb-2">Rahul P</h2>
          <p className="text-gray-300 text-center mb-6">A Software Developer who has developed countless innovative solutions.</p>
          <div className="flex justify-center space-x-6 mb-14 mx-auto">
            <a href="https://linkedin.com/in/rahul-p-9589912a2" target="_blank" rel="noopener noreferrer" className="text-white text-2xl flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#a259ff] hover:text-white w-10 h-10" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/rahul-p-git" target="_blank" rel="noopener noreferrer" className="text-white text-2xl flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#a259ff] hover:text-white w-10 h-10" title="GitHub"><i className="fab fa-github"></i></a>
            <a href="mailto:jalandermali@gmail.com" className="text-white text-2xl flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#a259ff] hover:text-white w-10 h-10" title="Mail"><i className="fas fa-envelope"></i></a>
            <a href="tel:6362917218" className="text-white text-2xl flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#a259ff] hover:text-white w-10 h-10" title="Phone"><i className="fas fa-phone"></i></a>
          </div>
          <a href="mailto:jalandermali@gmail.com" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors w-full text-center shadow-md hover:shadow-xl transition-transform duration-300">Let's Talk</a>
        </div>
        {/* Right Side: Main Content */}
        <div className="flex-1 text-center lg:text-left lg:pl-8">
          <h1 className="text-8xl font-extrabold uppercase text-white mb-4 animate-fade-in-up">SOFTWARE</h1>
          <h2 className="text-8xl font-extrabold uppercase text-gray-700 mb-8 animate-fade-in-up delay-200">DEVELOPER</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Transforming Your Ideas into <span className="text-cyan-400">Reality</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <a href="mailto:jalandermali@gmail.com" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors w-fit text-center">Let's Talk</a>
            <a href="#projects" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-colors w-fit text-center flex items-center justify-center">My Work <span className="ml-2">→</span></a>
          </div>
        </div>
      </div>
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={24} className="group-hover:animate-pulse" />
        </button>
      </div>
    </section>
  );
};

export default Hero;