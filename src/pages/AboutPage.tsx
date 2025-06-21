import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Target, Download } from 'lucide-react';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, color: 'bg-blue-500' },
    { name: 'React & TypeScript', level: 95, color: 'bg-cyan-500' },
    { name: 'UI/UX Design', level: 85, color: 'bg-purple-500' },
    { name: 'Three.js & WebGL', level: 80, color: 'bg-green-500' },
    { name: 'Animation & Interactions', level: 88, color: 'bg-pink-500' },
    { name: 'Backend Development', level: 75, color: 'bg-orange-500' },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading frontend development with React, TypeScript, and modern web technologies.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Created responsive web interfaces and interactive user experiences.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <User className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating beautiful, 
            interactive web experiences that push the boundaries of what's possible on the web.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                My journey into web development started with curiosity about how websites work. 
                What began as a hobby quickly evolved into a passion for creating digital experiences 
                that make a difference.
              </p>
              <p>
                I specialize in frontend development with React and TypeScript, but I'm equally 
                comfortable working with backend technologies. I love the challenge of turning 
                complex problems into simple, elegant solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or building interactive demos and games that showcase 
                the creative potential of web technologies.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Code className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
                <p className="text-gray-600">Writing maintainable, scalable code is my priority</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Palette className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Design Focus</h3>
                <p className="text-gray-600">Creating beautiful interfaces with attention to detail</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Target className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-900">User Experience</h3>
                <p className="text-gray-600">Building intuitive, accessible user experiences</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    className={`h-full ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="card hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-primary-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-gray-600 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get In Touch
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
