import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface NavigationProps {
  className?: string;
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/games', label: 'Games' },
  { href: '/tools', label: 'Tools' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const location = useLocation();

  return (
    <nav className={cn(
      "flex items-center space-x-8",
      className
    )}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.href;
        
        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
              isActive 
                ? "text-primary-600" 
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-x-0 -bottom-px h-px bg-primary-600"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
