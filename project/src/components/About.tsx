import React, { useEffect, useRef } from 'react';
import { Code, Database, Zap, Users } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code',
      delay: '0ms'
    },
    {
      icon: Database,
      title: 'Database Expert',
      description: 'Optimizing queries and data structures',
      delay: '200ms'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Building tools that save time and effort',
      delay: '400ms'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to development',
      delay: '600ms'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            About <span className="text-cyan-400 animate-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8 animate-expand"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-left">
              Dynamic and detail-oriented developer with expertise in ERPNext, backend APIs, 
              database optimization, and automation using Python. I'm passionate about building 
              solutions that matter and creating efficient systems that drive business growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-left delay-300">
              With a strong foundation in the Frappe Framework and ERPNext, I specialize in 
              developing custom modules, optimizing workflows, and creating seamless integrations 
              that enhance productivity and user experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-left delay-600">
              <span className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-105 animate-bounce-in">
                Python Expert
              </span>
              <span className="px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/20 hover:bg-green-400/20 transition-all duration-300 transform hover:scale-105 animate-bounce-in delay-200">
                ERP Specialist
              </span>
              <span className="px-4 py-2 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium border border-blue-400/20 hover:bg-blue-400/20 transition-all duration-300 transform hover:scale-105 animate-bounce-in delay-400">
                Backend Developer
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: highlight.delay }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={24} className="text-cyan-400 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;