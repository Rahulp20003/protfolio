import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, User, MessageSquare, Download } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with loading
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jalandermali@gmail.com',
      href: 'mailto:jalandermali@gmail.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6362917218',
      href: 'tel:6362917218',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/rahul-p-9589912a2',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'from-pink-400 to-purple-400'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-400/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-green-400/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-green-400/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce delay-1500"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Get In <span className="text-cyan-400 animate-glow">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8 animate-expand"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up delay-300">
            Ready to discuss your next project? Let's connect and build something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 animate-fade-in-left">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8 animate-fade-in-left delay-200">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you're looking for ERP solutions, backend development, or automation systems, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex flex-row items-center gap-x-3 p-4 border border-gray-600 bg-transparent rounded-xl transition-all duration-200 animate-on-scroll w-full"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Icon size={22} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-cyan-400 font-medium text-base mr-1">
                      {contact.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-6 animate-fade-in-right">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in-up">
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative animate-fade-in-right delay-200">
                  <User size={20} className="absolute left-3 top-3 text-gray-400 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 hover:border-gray-500"
                  />
                </div>
                
                <div className="relative animate-fade-in-right delay-400">
                  <Mail size={20} className="absolute left-3 top-3 text-gray-400 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 hover:border-gray-500"
                  />
                </div>
                
                <div className="relative animate-fade-in-right delay-600">
                  <MessageSquare size={20} className="absolute left-3 top-3 text-gray-400 transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 resize-none hover:border-gray-500"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed animate-fade-in-right delay-800"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:animate-bounce" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Download Resume Callout */}
      <div className="max-w-2xl mx-auto mt-16 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-900/80 border border-gray-700 rounded-2xl px-10 py-8 shadow-lg gap-6 relative">
          <div className="text-center sm:text-left mb-4 sm:mb-0 flex-1">
            <div className="text-lg sm:text-xl font-semibold text-white mb-1">Interested in my work?</div>
            <div className="text-gray-400 text-sm">Download my resume for detailed information</div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-200 text-center transform hover:scale-105"
            >
              Download Resume
            </a>
            <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-400/80 blur-[1.5px] ml-1 animate-pulse"></span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <p className="text-gray-400 mb-4">
              © 2025 Rahul P. Built with React & Tailwind CSS. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:jalandermali@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/rahul-p-9589912a2" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="tel:6362917218" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;