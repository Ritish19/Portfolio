import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { AnimatedNavigation } from '@/components/layout/AnimatedNavigation';

export const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`);
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simple scroll tracking without automatic snapping
  useEffect(() => {
    const handleScroll = () => {
      // Just update current section for navigation highlighting
      const sections = document.querySelectorAll('section[id], div[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const sectionId = (section as HTMLElement).id;
          if (sectionId && sectionId !== currentSection) {
            setCurrentSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="relative">
      {/* Animated Navigation that appears on scroll */}
      <AnimatedNavigation />
      
      {/* Hero Section */}
      <div id="home" className="relative">
        <HeroSection onNavigate={handleNavigate} />
      </div>

      {/* Content Sections with snap behavior */}
      <section id="projects" className="min-h-screen bg-gray-50 py-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-6xl font-acumin font-bold text-black mb-8">PROJECTS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              A showcase of my latest work featuring interactive web applications,
              creative experiments, and technical challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-lg p-6 shadow-lg cursor-pointer"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-acumin font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-600 text-sm">Amazing project description coming soon...</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="games" className="min-h-screen bg-white py-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-6xl font-acumin font-bold text-black mb-8">GAMES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Interactive mini-games and coding challenges designed to 
              entertain, educate, and showcase technical skills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['Code Typing Challenge', 'Algorithm Visualizer', 'CSS Art Creator', 'Memory Pattern Game'].map((game, index) => (
                <motion.div
                  key={game}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 cursor-pointer"
                >
                  <h3 className="text-2xl font-acumin font-bold mb-4">{game}</h3>
                  <p className="text-gray-600 mb-6">Coming soon...</p>
                  <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Play Game
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tools" className="min-h-screen bg-gray-50 py-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-6xl font-acumin font-bold text-black mb-8">TOOLS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Useful development tools and utilities designed to make 
              your workflow more efficient and productive.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Color Palette Generator', 'Image Optimizer', 'Code Snippet Manager', 'Regex Builder', 'Unit Converter', 'API Tester'].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md cursor-pointer"
                >
                  <h3 className="text-xl font-acumin font-semibold mb-3">{tool}</h3>
                  <p className="text-gray-600 text-sm mb-4">Powerful tool coming soon...</p>
                  <button className="text-primary-600 font-medium hover:text-primary-800 transition-colors">
                    Try Tool →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen bg-black text-white py-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-6xl font-acumin font-bold mb-8">CONTACTS</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Let's connect and create something amazing together.
              I'm always excited to discuss new opportunities and ideas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6"
              >
                <h3 className="text-2xl font-acumin font-semibold mb-4">Email</h3>
                <p className="text-gray-300">ritish@example.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-2xl font-acumin font-semibold mb-4">Social</h3>
                <p className="text-gray-300">LinkedIn • GitHub • Twitter</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6"
              >
                <h3 className="text-2xl font-acumin font-semibold mb-4">Location</h3>
                <p className="text-gray-300">Available Worldwide</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
