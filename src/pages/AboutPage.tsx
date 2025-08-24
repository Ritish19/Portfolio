import React from 'react';
import { motion } from 'framer-motion';

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`flex items-center gap-12 mb-20 max-w-6xl mx-auto ${
        isImageLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Image Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="flex-shrink-0"
      >
        <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-6 border-white/70">
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
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="flex-1 bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-white/40"
      >
        <h3 className="text-5xl font-bold text-sky-900 mb-8">{title}</h3>
        <p className="text-gray-800 leading-relaxed text-xl font-medium">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Title "About" */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-sky-900 mb-4">About</h1>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto mb-28"
        >
          <div className="flex items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl border-6 border-white/70">
                <img
                  src="/about-assets/about image 1.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex-1 bg-white/95 backdrop-blur-sm rounded-3xl p-14 shadow-2xl border-2 border-white/40"
            >
              <h2 className="text-6xl font-bold text-sky-900 mb-10">About Me</h2>
              <p className="text-gray-800 leading-relaxed text-2xl font-medium">
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-28"
        >
          <h2 className="text-6xl font-bold text-sky-900 mb-20">3 Words to Describe Me</h2>
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
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
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
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
            delay={1.4}
          />

          <CharacteristicCard
            title="Creative"
            description="I am a creative doer and not just a curious thinker. If I want a laptop stand I go to the hardware shop and buy screws to make it myself. I have built obstacle detection cars, license plate detection and speed detection systems from a raspberry pi, crossbows, laptop stands, electronic parts, extended routers, and I basically fix everything around the house from the doorbells to taps, geysers, solar light, flush and everything you can do in the house. 'If I have the tools to do it, you bet I already did it'. My room is filled with wires and spare parts. I even fix my own motorcycle when it comes to it and when it gets to fixing mechanical parts I know exactly what's wrong. I am not just a computer science graduate I am a creative builder and the definition of 'jerry rig'. I have a habit of building systems. I unscrew things and stick my head into anything I find interesting."
            imageSrc="/about-assets/about image 5 creative .jpg"
            imagePosition="right"
            delay={1.6}
          />

          <CharacteristicCard
            title="Adaptable"
            description="I can learn really fast and adapt really quickly. The idea of a computer science student generally falls under the shy and introverted. But I put myself in positions where I have to adapt and be social or learn the systems around me. I am currently leading the governmental level youth club called Budanilakantha Youth Club and I am active in social initiatives and I don't back down when it comes to public speaking and putting myself out there. I was initially a very shy individual but over the years I have been in countless committees and have conducted and hosted multiple programs. From MUNs, Youth initiatives, public speaking or handling internships whilst studying. I write my own songs and I am also an esteemed designer. I do a lot and have a lot of social experience whilst also being niche and talented."
            imageSrc="/about-assets/about image 2 adaptable.jpg"
            imagePosition="left"
            delay={1.8}
          />
        </div>

        {/* Extra spacing at bottom */}
        <div className="h-32"></div>
      </div>
    </div>
  );
};

export default AboutPage;
