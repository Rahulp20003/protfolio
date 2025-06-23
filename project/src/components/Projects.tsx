import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Database, Eye, Zap, Star } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'House Price Prediction Website',
      description: 'Machine learning web application that predicts house prices based on various parameters using Flask and scikit-learn.',
      tech: ['Flask', 'Python', 'Machine Learning', 'HTML/CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Database,
      features: ['ML Model Integration', 'Interactive UI', 'Real-time Predictions', 'Data Visualization'],
      rating: 4.8
    },
    {
      title: 'License Plate Detection System',
      description: 'Computer vision system for automatic license plate recognition using OpenCV and deep learning techniques.',
      tech: ['OpenCV', 'Python', 'Deep Learning', 'Computer Vision', 'TensorFlow'],
      image: 'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Eye,
      features: ['Real-time Detection', 'High Accuracy', 'Multi-format Support', 'Image Processing'],
      rating: 4.9
    },
    {
      title: 'ERP Custom Module Builder',
      description: 'Custom ERPNext modules for inventory management, workflow automation, and business process optimization.',
      tech: ['ERPNext', 'Frappe', 'Python', 'MySQL', 'JavaScript'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code,
      features: ['Workflow Automation', 'Custom Reports', 'API Integration', 'Performance Optimization'],
      rating: 4.7
    },
    {
      title: 'Interactive Dashboards',
      description: 'Dynamic web dashboards with real-time data visualization and analytics for business intelligence.',
      tech: ['Flask', 'JavaScript', 'Chart.js', 'MySQL', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Zap,
      features: ['Real-time Updates', 'Interactive Charts', 'Responsive Design', 'Data Analytics'],
      rating: 4.6
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Featured <span className="text-cyan-400 animate-glow">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8 animate-expand"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up delay-300">
            A showcase of my recent work in web development, machine learning, and ERP systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/10 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Animated project icon */}
                  <div className="absolute top-4 right-4 p-2 bg-cyan-400/10 backdrop-blur-sm rounded-lg border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <ProjectIcon size={20} className="text-cyan-400 group-hover:animate-pulse" />
                  </div>
                  
                  {/* Rating stars */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{project.rating}</span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>
                  
                  {/* Animated tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-110 animate-bounce-in"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Animated features list */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-300 text-sm group-hover:translate-x-2 transition-transform duration-300 group-hover:text-white"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Animated action buttons */}
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-lg border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300 group-hover:border-cyan-400/40 transform hover:scale-105 hover:-translate-y-1">
                      <Github size={16} className="group-hover:animate-spin" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-400/10 text-green-400 rounded-lg border border-green-400/20 hover:bg-green-400/20 transition-all duration-300 group-hover:border-green-400/40 transform hover:scale-105 hover:-translate-y-1">
                      <ExternalLink size={16} className="group-hover:animate-bounce" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Animated call-to-action */}
        <div className="text-center mt-12 animate-on-scroll">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span className="flex items-center space-x-2">
              <Github size={20} className="group-hover:animate-spin" />
              <span>View All Projects on GitHub</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;