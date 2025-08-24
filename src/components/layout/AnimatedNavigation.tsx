import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AnimatedNavigationProps {
  className?: string;
}

const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'Projects' },
  { id: 'games', label: 'Games' },
  { id: 'tools', label: 'Tools' },
  { id: 'contacts', label: 'Contacts' },
];

export const AnimatedNavigation: React.FC<AnimatedNavigationProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    // Add smooth scroll to section logic here
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-4",
            className
          )}
        >
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center"
            >
              <img 
                src="/src/assets/images/LOGO.svg" 
                alt="Ritish Neupane Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="ml-3 font-acumin font-bold text-xl text-black">
                RITISH NEUPANE
              </span>
            </motion.div>

            {/* Horizontal Navigation */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-8"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    "relative font-acumin font-medium text-sm tracking-wide transition-colors duration-200",
                    activeItem === item.id 
                      ? "text-black" 
                      : "text-gray-600 hover:text-black"
                  )}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeItem === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-red"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:hidden p-2 rounded-md text-black hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
