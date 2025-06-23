import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, TrendingUp, Briefcase } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'Simpel Techlabs Pvt. Ltd.',
      position: 'Jr. Software Developer',
      period: 'Feb 2025 – Present',
      location: 'Bangalore, India',
      type: 'Full-time',
      achievements: [
        'Optimized ERP workflows by 30% through custom module development',
        'Automated routine tasks, saving 10+ hours per week',
        'Designed and implemented REST APIs for seamless integrations',
        'Developed client and server scripts for enhanced functionality'
      ]
    },
    {
      company: 'Simpel Techlabs Pvt. Ltd.',
      position: 'Software Developer Intern',
      period: 'Jul 2024 – Feb 2025',
      location: 'Bangalore, India',
      type: 'Internship',
      achievements: [
        'Gained hands-on experience with ERPNext framework',
        'Contributed to multiple client projects',
        'Learned advanced Python programming techniques',
        'Collaborated with senior developers on complex solutions'
      ]
    },
    {
      company: 'Glovish Technologies',
      position: 'Academic Intern',
      period: 'Apr 2024 – May 2024',
      location: 'Remote',
      type: 'Internship',
      achievements: [
        'Built House Price Predictor using Flask and Machine Learning',
        'Developed License Plate Detection system using OpenCV',
        'Implemented deep learning models for computer vision',
        'Created web applications with interactive dashboards'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-l from-green-400/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Professional <span className="text-cyan-400 animate-glow">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8 animate-expand"></div>
        </div>
        
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-green-400 transform md:-translate-x-0.5 animate-draw-line"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row animate-on-scroll`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Animated timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-800 transform md:-translate-x-2 z-10 shadow-lg shadow-cyan-400/50 animate-pulse-dot">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                </div>
                
                {/* Experience card with enhanced animations */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="group p-8 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 transform group-hover:scale-110 ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-400/10 text-green-400 border border-green-400/20 group-hover:bg-green-400/20' 
                          : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">
                        <Calendar size={16} className="mr-2 group-hover:animate-pulse" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Briefcase size={20} className="text-cyan-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {exp.company}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors">
                      <MapPin size={16} className="mr-2 group-hover:animate-pulse" />
                      {exp.location}
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex} 
                          className="flex items-start space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${achievementIndex * 100}ms` }}
                        >
                          <TrendingUp size={16} className="text-green-400 mt-1 flex-shrink-0 group-hover:animate-bounce" />
                          <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;