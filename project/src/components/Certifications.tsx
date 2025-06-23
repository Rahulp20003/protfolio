import React, { useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink, Star, Trophy, CheckCircle } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      provider: 'Coursera',
      date: '2024',
      description: 'Comprehensive data analytics program covering data cleaning, analysis, and visualization',
      skills: ['Data Analysis', 'SQL', 'R Programming', 'Tableau', 'Data Visualization'],
      icon: '📊',
      color: 'from-blue-400 to-blue-600',
      verified: true
    },
    {
      title: 'App Development Bootcamp',
      provider: 'Elewayte',
      date: '2024',
      description: 'Intensive bootcamp focusing on modern application development practices',
      skills: ['Mobile Development', 'React Native', 'API Integration', 'UI/UX'],
      icon: '📱',
      color: 'from-green-400 to-green-600',
      verified: true
    },
    {
      title: 'Advanced Python Programming',
      provider: 'XP Labs Training',
      date: '2024',
      description: 'Advanced Python concepts including web frameworks and automation',
      skills: ['Python', 'Flask', 'Django', 'Web Scraping', 'Automation'],
      icon: '🐍',
      color: 'from-yellow-400 to-yellow-600',
      verified: true
    },
    {
      title: 'Full Stack Development',
      provider: 'IOTA Skill Development',
      date: '2024',
      description: 'Complete full-stack development program with hands-on projects',
      skills: ['JavaScript', 'Node.js', 'React', 'Database Design', 'REST APIs'],
      icon: '💻',
      color: 'from-purple-400 to-purple-600',
      verified: true
    },
    {
      title: 'Machine Learning Internship',
      provider: 'Glovish Technologies',
      date: '2024',
      description: 'Practical machine learning experience with real-world projects',
      skills: ['Machine Learning', 'OpenCV', 'Computer Vision', 'Flask', 'Data Science'],
      icon: '🤖',
      color: 'from-cyan-400 to-cyan-600',
      verified: true
    },
    {
      title: 'ERPNext Specialist Certification',
      provider: 'Frappe Technologies',
      date: '2024',
      description: 'Specialized certification in ERPNext development and customization',
      skills: ['ERPNext', 'Frappe Framework', 'Business Process', 'Workflow Design'],
      icon: '⚙️',
      color: 'from-orange-400 to-orange-600',
      verified: true
    }
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-left">
            Certifications & <span className="text-cyan-400 animate-glow">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8 animate-expand"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-right delay-300">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:scale-105 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg text-white text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2 group-hover:animate-pulse" />
                      {cert.date}
                    </div>
                    {cert.verified && (
                      <CheckCircle size={16} className="text-green-400 animate-pulse" />
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <div className="flex items-center mb-3">
                  <Award size={16} className="text-cyan-400 mr-2 group-hover:animate-bounce" />
                  <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {cert.provider}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {cert.description}
                </p>
                
                {/* Animated skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-md text-xs font-medium border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-110 animate-bounce-in"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <Star size={14} className="group-hover:animate-spin" />
                  <span>Verified Certificate</span>
                </button>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/20 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Animated statistics */}
        <div className="text-center mt-12 animate-on-scroll">
          <div className="inline-flex items-center space-x-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex items-center space-x-3 group">
              <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110">
                <Award size={24} className="text-cyan-400 group-hover:animate-bounce" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white animate-count-up">6+</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-600"></div>
            
            <div className="flex items-center space-x-3 group">
              <div className="p-3 bg-green-400/10 rounded-lg group-hover:bg-green-400/20 transition-all duration-300 group-hover:scale-110">
                <Trophy size={24} className="text-green-400 group-hover:animate-bounce" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white animate-count-up">100%</div>
                <div className="text-sm text-gray-400">Completion Rate</div>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-600"></div>
            
            <div className="flex items-center space-x-3 group">
              <div className="p-3 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition-all duration-300 group-hover:scale-110">
                <Star size={24} className="text-purple-400 group-hover:animate-bounce" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white animate-count-up">2024</div>
                <div className="text-sm text-gray-400">Latest Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;