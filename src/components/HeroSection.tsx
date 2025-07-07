import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Fragment component for floating SVG pieces
const FragmentOverlay: React.FC<{ 
  x: number; 
  y: number; 
  imageSrc: string;
  scale: number;
  rotation: number;
  delay: number;
}> = ({ x, y, imageSrc, scale, rotation, delay }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0, rotate: rotation - 45 }}
      animate={{ 
        opacity: [0, 0.8, 0.9, 0.7, 0.8],
        scale: [0, scale * 0.8, scale, scale * 1.1, scale],
        rotate: [rotation - 45, rotation, rotation + 10, rotation - 5, rotation],
        x: [0, Math.sin(delay) * 10, 0, Math.cos(delay) * 5, 0],
        y: [0, Math.cos(delay) * 5, 0, Math.sin(delay) * 8, 0]
      }}
      transition={{ 
        duration: 4,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <img 
        src={imageSrc} 
        alt="Fragment"
        className="w-12 h-12 object-contain drop-shadow-lg"
        style={{
          filter: `hue-rotate(${Math.random() * 60}deg) saturate(1.3) brightness(1.1) drop-shadow(0 0 10px rgba(0,255,255,0.3))`,
          transform: `scale(${scale})`
        }}
      />
    </motion.div>
  );
};

// 3D Scene component with properly positioned fragments
const FragmentScene: React.FC = () => {
  // Position fragments to match your design exactly - based on your mockup
  const fragments = [
    // Top area fragments
    { x: 25, y: 15, imageSrc: '/src/assets/images/fragments/fragment 1.svg', scale: 1.2, rotation: 15, delay: 0.2 },
    { x: 45, y: 12, imageSrc: '/src/assets/images/fragments/fragment 2.svg', scale: 0.9, rotation: -30, delay: 0.5 },
    { x: 75, y: 18, imageSrc: '/src/assets/images/fragments/fragment 3.svg', scale: 1.0, rotation: 45, delay: 0.8 },
    
    // Right side fragments (around main logo area)
    { x: 85, y: 35, imageSrc: '/src/assets/images/fragments/fragment 4.svg', scale: 1.4, rotation: -15, delay: 1.0 },
    { x: 78, y: 55, imageSrc: '/src/assets/images/fragments/fragment 5.svg', scale: 1.1, rotation: 60, delay: 1.3 },
    { x: 82, y: 70, imageSrc: '/src/assets/images/fragments/fragment 6.svg', scale: 1.3, rotation: -45, delay: 1.6 },
    
    // Bottom right fragments
    { x: 65, y: 85, imageSrc: '/src/assets/images/fragments/fragment 1.svg', scale: 0.8, rotation: 90, delay: 1.9 },
    { x: 45, y: 88, imageSrc: '/src/assets/images/fragments/fragment 2.svg', scale: 1.0, rotation: -60, delay: 2.2 },
    
    // Left side scattered fragments
    { x: 15, y: 30, imageSrc: '/src/assets/images/fragments/fragment 3.svg', scale: 0.7, rotation: 120, delay: 2.5 },
    { x: 8, y: 60, imageSrc: '/src/assets/images/fragments/fragment 4.svg', scale: 0.9, rotation: -90, delay: 2.8 },
    { x: 20, y: 75, imageSrc: '/src/assets/images/fragments/fragment 5.svg', scale: 0.6, rotation: 30, delay: 3.1 },
    
    // Additional scattered fragments for density
    { x: 35, y: 25, imageSrc: '/src/assets/images/fragments/fragment 6.svg', scale: 0.5, rotation: 75, delay: 3.4 },
    { x: 55, y: 40, imageSrc: '/src/assets/images/fragments/fragment 1.svg', scale: 0.7, rotation: -105, delay: 3.7 },
    { x: 70, y: 25, imageSrc: '/src/assets/images/fragments/fragment 2.svg', scale: 0.8, rotation: 135, delay: 4.0 },
  ];

  return (
    <>
      {fragments.map((fragment, index) => (
        <FragmentOverlay
          key={index}
          x={fragment.x}
          y={fragment.y}
          imageSrc={fragment.imageSrc}
          scale={fragment.scale}
          rotation={fragment.rotation}
          delay={fragment.delay}
        />
      ))}
    </>
  );
};

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values for scroll animations
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const navItems = [
    { id: 'home', label: 'HOME', active: true },
    { id: 'about', label: 'ABOUT', active: false },
    { id: 'projects', label: 'Projects', active: false },
    { id: 'games', label: 'Games', active: false },
    { id: 'tools', label: 'Tools', active: false },
    { id: 'contacts', label: 'Contacts', active: false },
  ];

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Enhanced Animated Glass Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        
        {/* Animated glass layers */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.8), transparent 50%), linear-gradient(135deg, rgba(240,240,240,0.4), rgba(255,255,255,0.8), rgba(235,235,235,0.6))',
              'radial-gradient(circle at 70% 60%, rgba(255,255,255,0.9), transparent 50%), linear-gradient(225deg, rgba(235,235,235,0.6), rgba(255,255,255,0.8), rgba(240,240,240,0.4))',
              'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.7), transparent 50%), linear-gradient(315deg, rgba(240,240,240,0.4), rgba(255,255,255,0.8), rgba(235,235,235,0.6))',
              'radial-gradient(circle at 80% 30%, rgba(255,255,255,0.8), transparent 50%), linear-gradient(45deg, rgba(235,235,235,0.6), rgba(255,255,255,0.8), rgba(240,240,240,0.4))',
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 backdrop-blur-[2px]"
        />
        
        {/* Glass reflection effect */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.6) 20%, transparent 40%)',
              'linear-gradient(135deg, transparent 60%, rgba(255,255,255,0.4) 80%, transparent 100%)',
              'linear-gradient(225deg, transparent 0%, rgba(255,255,255,0.5) 20%, transparent 40%)',
              'linear-gradient(315deg, transparent 60%, rgba(255,255,255,0.3) 80%, transparent 100%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
        
        {/* Subtle noise texture for glass effect */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='m0 0h40v40h-40z'/%3E%3Cpath d='m20 20 20 20v-40z' fill-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Enhanced Dots Pattern Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `url('/src/assets/images/dots.svg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Floating Fragment Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <FragmentScene />
      </div>

      {/* Main Logo positioned correctly based on mockup */}
      <div className="absolute right-[15%] top-1/2 transform -translate-y-1/2 z-20">
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1.2, type: "spring", stiffness: 80 }}
          className="relative"
        >
          <motion.img 
            src="/src/assets/images/logo-main.svg" 
            alt="Ritish Neupane Logo" 
            className="w-72 h-72 object-contain drop-shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1)) drop-shadow(0 0 20px rgba(255,255,255,0.5))'
            }}
          />
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              boxShadow: [
                '0 0 50px rgba(0,255,255,0.3)',
                '0 0 80px rgba(255,0,128,0.2)',
                '0 0 50px rgba(0,255,255,0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
            }}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 h-full flex flex-col"
      >
        {/* Title at the Top */}
        <motion.div
          className="pt-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="hero-title glitch-text"
            data-text="RITISH NEUPANE"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            RITISH NEUPANE
          </motion.h1>
        </motion.div>

        {/* Navigation on the Left */}
        <div className="flex-1 flex items-center">
          <motion.nav 
            className="pl-16 space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`hero-nav-item block text-left ${item.active ? 'active' : ''}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ x: 20, scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-black rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
