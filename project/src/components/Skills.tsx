import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Zap, 
  GitBranch, 
  Server, 
  Smartphone 
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'SQL', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'HTML5', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 85, color: 'from-blue-300 to-blue-500' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Zap,
      skills: [
        { name: 'Frappe Framework', level: 90, color: 'from-cyan-400 to-cyan-600' },
        { name: 'ERPNext', level: 88, color: 'from-green-400 to-green-600' },
        { name: 'Flask', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'React', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'OpenCV', level: 70, color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 88, color: 'from-orange-400 to-orange-600' },
        { name: 'MariaDB', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Git/GitHub', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'REST APIs', level: 87, color: 'from-green-400 to-green-600' },
        { name: 'Linux', level: 80, color: 'from-yellow-400 to-yellow-600' }
      ]
    }
  ];

  const techIcons = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'HTML5', icon: '🔶' },
    { name: 'CSS3', icon: '🔷' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Git', icon: '📝' },
    { name: 'Flask', icon: '🔥' },
    { name: 'React', icon: '⚛️' }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-l from-green-400/5 to-emerald-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Technical <span className="text-cyan-400 animate-glow">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8 animate-expand"></div>
        </div>
        
        {/* Animated Tech Icons Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16 animate-on-scroll">
          {techIcons.map((tech, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:scale-110 hover:-translate-y-2 animate-bounce-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                {tech.icon}
              </div>
              <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors text-center font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Animated Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <CategoryIcon size={24} className="text-cyan-400 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;