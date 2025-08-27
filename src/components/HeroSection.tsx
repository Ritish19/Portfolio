import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// Characteristic Card Component for About Section
interface CharacteristicCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  delay?: number;
}

const CharacteristicCard: React.FC<CharacteristicCardProps> = ({
  title,
  description,
  imageSrc,
  imagePosition,
  delay = 0
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 md:mb-20 max-w-6xl mx-auto px-4 md:px-0 ${
        isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 md:border-6 border-white/70">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      {/* Text Rectangle */}
      <motion.div
        initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        viewport={{ once: true }}
        className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-white/40"
      >
        <h3 className="text-3xl md:text-5xl font-bold text-sky-900 mb-4 md:mb-8">{title}</h3>
        <p className="text-gray-800 leading-relaxed text-lg md:text-xl font-medium">{description}</p>
      </motion.div>
    </motion.div>
  );
};

// Bubble component for mouse-responsive floating SVG pieces
const FragmentOverlay: React.FC<{ 
  x: number; 
  y: number; 
  imageSrc: string;
  scale: number;
  rotation: number;
  delay: number;
  mouseX: any;
  mouseY: any;
  index: number;
}> = ({ x, y, imageSrc, scale, rotation, delay, mouseX, mouseY, index }) => {
  const [isPopped, setIsPopped] = useState(false);

  const handleBubbleClick = () => {
    setIsPopped(true);
    setTimeout(() => setIsPopped(false), 1000);
  };

  // Create spring values for smooth bubble movement
  const bubbleX = useSpring(useTransform(mouseX, (value: number) => value * (0.3 + index * 0.1)), { damping: 20, stiffness: 100 });
  const bubbleY = useSpring(useTransform(mouseY, (value: number) => value * (0.3 + index * 0.1)), { damping: 20, stiffness: 100 });

  if (isPopped) {
    return (
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ scale: scale }}
        animate={{ 
          scale: [scale, scale * 2.5, 0],
          opacity: [1, 0.8, 0]
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        <motion.img 
          src={imageSrc} 
          alt="Bubble"
          className="w-20 h-20 object-contain"
          style={{
            filter: `hue-rotate(${(index * 60) % 360}deg) saturate(1.8) brightness(1.4)`,
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute pointer-events-auto z-10 cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        x: bubbleX,
        y: bubbleY,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0, rotate: rotation - 20 }}
      animate={{ 
        opacity: [0, 0.9, 1, 0.8, 0.9],
        scale: [0, scale * 0.9, scale, scale * 1.05, scale],
        rotate: [rotation - 20, rotation, rotation + 3, rotation - 2, rotation],
      }}
      transition={{ 
        duration: 6 + index * 0.3,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      whileHover={{ 
        scale: scale * 1.2, 
        rotate: rotation + 15,
        transition: { duration: 0.3 }
      }}
      onClick={handleBubbleClick}
    >
      <motion.img 
        src={imageSrc} 
        alt="Bubble"
        className="w-20 h-20 object-contain"
        style={{
          filter: `hue-rotate(${(index * 60) % 360}deg) saturate(1.8) brightness(1.4) drop-shadow(0 0 8px rgba(135,206,235,0.3))`,
          transform: `scale(${scale})`,
        }}
      />
    </motion.div>
  );
};

// Mouse-responsive bubble scene
const FragmentScene: React.FC<{ mouseX: any; mouseY: any }> = ({ mouseX, mouseY }) => {
  // Position bubbles throughout the scene with varying sizes and behaviors
  const bubbles = [
    // Top area bubbles
    { x: 25, y: 15, imageSrc: '/Bubble1.svg', scale: 1.2, rotation: 15, delay: 0.2 },
    { x: 45, y: 12, imageSrc: '/Bubble2.svg', scale: 0.9, rotation: -30, delay: 0.5 },
    { x: 75, y: 18, imageSrc: '/Bubble3.svg', scale: 1.0, rotation: 45, delay: 0.8 },
    
    // Right side bubbles (around main logo area)
    { x: 85, y: 35, imageSrc: '/Bubble4.svg', scale: 1.4, rotation: -15, delay: 1.0 },
    { x: 78, y: 55, imageSrc: '/Bubble1.svg', scale: 1.1, rotation: 60, delay: 1.3 },
    { x: 82, y: 70, imageSrc: '/Bubble2.svg', scale: 1.3, rotation: -45, delay: 1.6 },
    
    // Bottom right bubbles
    { x: 65, y: 85, imageSrc: '/Bubble3.svg', scale: 0.8, rotation: 90, delay: 1.9 },
    { x: 45, y: 88, imageSrc: '/Bubble4.svg', scale: 1.0, rotation: -60, delay: 2.2 },
    
    // Left side scattered bubbles
    { x: 15, y: 30, imageSrc: '/Bubble1.svg', scale: 0.7, rotation: 120, delay: 2.5 },
    { x: 8, y: 60, imageSrc: '/Bubble2.svg', scale: 0.9, rotation: -90, delay: 2.8 },
    { x: 20, y: 75, imageSrc: '/Bubble3.svg', scale: 0.6, rotation: 30, delay: 3.1 },
    
    // Additional scattered bubbles for density
    { x: 35, y: 25, imageSrc: '/Bubble4.svg', scale: 0.5, rotation: 75, delay: 3.4 },
    { x: 55, y: 40, imageSrc: '/Bubble1.svg', scale: 0.7, rotation: -105, delay: 3.7 },
    { x: 70, y: 25, imageSrc: '/Bubble2.svg', scale: 0.8, rotation: 135, delay: 4.0 },
    
    // Additional floating bubbles for more dynamic effect
    { x: 30, y: 60, imageSrc: '/Bubble3.svg', scale: 0.4, rotation: 200, delay: 4.3 },
    { x: 60, y: 65, imageSrc: '/Bubble4.svg', scale: 0.6, rotation: -150, delay: 4.6 },
    { x: 90, y: 50, imageSrc: '/Bubble1.svg', scale: 0.5, rotation: 300, delay: 4.9 },
    { x: 12, y: 45, imageSrc: '/Bubble2.svg', scale: 0.8, rotation: -200, delay: 5.2 },
  ];

  return (
    <>
      {bubbles.map((bubble, index) => (
        <FragmentOverlay
          key={index}
          x={bubble.x}
          y={bubble.y}
          imageSrc={bubble.imageSrc}
          scale={bubble.scale}
          rotation={bubble.rotation}
          delay={bubble.delay}
          mouseX={mouseX}
          mouseY={mouseY}
          index={index}
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

  // Original spring-based mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate distance from center, normalized to screen size
        const deltaX = (e.clientX - rect.left - centerX) / rect.width;
        const deltaY = (e.clientY - rect.top - centerY) / rect.height;
        
        // Update motion values for spring animation
        mouseX.set(deltaX * 100);
        mouseY.set(deltaY * 100);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

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
    <>
      <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Sky Blue Gradient Background */}
      <div className="absolute inset-0">
        {/* Base sky blue gradient from bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-sky-200 via-sky-100 to-sky-50" />
        
        {/* Animated glass layers for depth */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(135,206,235,0.3), transparent 50%), linear-gradient(135deg, rgba(173,216,230,0.2), rgba(135,206,235,0.4), rgba(176,224,230,0.3))',
              'radial-gradient(circle at 70% 60%, rgba(135,206,235,0.4), transparent 50%), linear-gradient(225deg, rgba(176,224,230,0.3), rgba(135,206,235,0.4), rgba(173,216,230,0.2))',
              'radial-gradient(circle at 20% 80%, rgba(135,206,235,0.2), transparent 50%), linear-gradient(315deg, rgba(173,216,230,0.2), rgba(135,206,235,0.4), rgba(176,224,230,0.3))',
              'radial-gradient(circle at 80% 30%, rgba(135,206,235,0.3), transparent 50%), linear-gradient(45deg, rgba(176,224,230,0.3), rgba(135,206,235,0.4), rgba(173,216,230,0.2))',
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 backdrop-blur-[1px]"
        />
        
        {/* Soft cloud-like reflection effect */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.4) 20%, transparent 40%)',
              'linear-gradient(135deg, transparent 60%, rgba(255,255,255,0.3) 80%, transparent 100%)',
              'linear-gradient(225deg, transparent 0%, rgba(255,255,255,0.3) 20%, transparent 40%)',
              'linear-gradient(315deg, transparent 60%, rgba(255,255,255,0.2) 80%, transparent 100%)',
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Enhanced Dots Pattern Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `url('/dots.svg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Floating Bubble Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <FragmentScene mouseX={mouseXSpring} mouseY={mouseYSpring} />
      </div>

      {/* Home Image positioned correctly based on mockup */}
      <div className="absolute right-[5%] md:right-[15%] top-[60%] md:top-[55%] transform -translate-y-1/2 z-20">
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1.2, type: "spring", stiffness: 80 }}
          className="relative"
        >
          <motion.img 
            src="/HomeImg.svg" 
            alt="Ritish Neupane Home Image" 
            className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            style={{
              filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
            }}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 h-full flex flex-col px-4 md:px-0"
      >
        {/* Title at the Top */}
        <motion.div
          className="pt-8 md:pt-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="hero-title clean-text text-4xl md:text-6xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            RITISH NEUPANE
          </motion.h1>
        </motion.div>

        {/* Navigation on the Left */}
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <motion.nav 
            className="pl-4 md:pl-16 space-y-4 md:space-y-6 text-center md:text-left"
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

    {/* About Section - Full Page */}
    <div id="about" className="min-h-screen relative overflow-hidden px-4 md:px-0">
      {/* Background with gradient and grid pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/about-assets/background image.jpg')`
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/95 via-sky-100/90 to-blue-50/95"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(135, 206, 235, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(135, 206, 235, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* About Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Title "About" */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-sky-900 mb-4">About</h1>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16 md:mb-28 px-4 md:px-0"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 md:border-6 border-white/70">
                <img
                  src="/about-assets/about image 1.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-14 shadow-2xl border-2 border-white/40"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-sky-900 mb-6 md:mb-10">About Me</h2>
              <p className="text-gray-800 leading-relaxed text-lg md:text-2xl font-medium">
                I'm a builder, fixer, and problem-solver who thrives at the intersection of curiosity, creativity, and adaptability.
                From dismantling engines to coding AI systems, from designing solutions to leading community projects, I chase ideas until I understand them—and then I bring them to life.
                Whether I'm working with wires, words, or people, I adapt fast, learn deeply, and make things happen.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 3 Words Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-6xl font-bold text-sky-900 mb-20">3 Words to Describe Me</h2>
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-6 border-white/70 mb-8 mx-auto">
                <img
                  src="/about-assets/about image 4 curious .jpg"
                  alt="Curious"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-4xl font-bold text-sky-900">Curious</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-6 border-white/70 mb-8 mx-auto">
                <img
                  src="/about-assets/about image 5 creative .jpg"
                  alt="Creative"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-4xl font-bold text-sky-900">Creative</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-6 border-white/70 mb-8 mx-auto">
                <img
                  src="/about-assets/about image 2 adaptable.jpg"
                  alt="Adaptable"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-4xl font-bold text-sky-900">Adaptable</h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Characteristic Cards */}
        <div className="space-y-24">
          <CharacteristicCard
            title="Curious"
            description="I have discovered myself being curious. I can't help myself when it comes to diving into the depths of any mechanism around me. From learning how computers work on a hardware level and randomly learning how complex systems work. I try to discover and learn when I am struck with curiosity. Being this openly curious has not only helped me in Computer science but in general life too. I am a lowkey mechanic, 'jerry rigger', plumber, electrician, inventor musician and a lot of other things at the same time. If anything is interesting enough to be learnt, I will have already have a good idea of the basis of how everything works. I also like systems like engines and compressors and fridges and literally anything."
            imageSrc="/about-assets/about image 4 curious .jpg"
            imagePosition="left"
            delay={0.2}
          />

          <CharacteristicCard
            title="Creative"
            description="I am a creative doer and not just a curious thinker. If I want a laptop stand I go to the hardware shop and buy screws to make it myself. I have built obstacle detection cars, license plate detection and speed detection systems from a raspberry pi, crossbows, laptop stands, electronic parts, extended routers, and I basically fix everything around the house from the doorbells to taps, geysers, solar light, flush and everything you can do in the house. 'If I have the tools to do it, you bet I already did it'. My room is filled with wires and spare parts. I even fix my own motorcycle when it comes to it and when it gets to fixing mechanical parts I know exactly what's wrong. I am not just a computer science graduate I am a creative builder and the definition of 'jerry rig'. I have a habit of building systems. I unscrew things and stick my head into anything I find interesting."
            imageSrc="/about-assets/about image 5 creative .jpg"
            imagePosition="right"
            delay={0.4}
          />

          <CharacteristicCard
            title="Adaptable"
            description="I can learn really fast and adapt really quickly. The idea of a computer science student generally falls under the shy and introverted. But I put myself in positions where I have to adapt and be social or learn the systems around me. I am currently leading the governmental level youth club called Budanilakantha Youth Club and I am active in social initiatives and I don't back down when it comes to public speaking and putting myself out there. I was initially a very shy individual but over the years I have been in countless committees and have conducted and hosted multiple programs. From MUNs, Youth initiatives, public speaking or handling internships whilst studying. I write my own songs and I am also an esteemed designer. I do a lot and have a lot of social experience whilst also being niche and talented."
            imageSrc="/about-assets/about image 2 adaptable.jpg"
            imagePosition="left"
            delay={0.6}
          />
        </div>

        {/* Extra spacing at bottom */}
        <div className="h-32"></div>
      </div>
    </div>
    </>
  );
};
