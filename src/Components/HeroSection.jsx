import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
const HeroSection = () => {
  return (
    <section className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 text-white flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Sadia Naaz
          </h1>

          <p className="text-2xl sm:text-3xl font-semibold leading-relaxed">
            Full Stack Web Developer creating responsive, user-friendly web applications with clean code and modern tools.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            <motion.a 
              href="https://linkedin.com/in/sadia-naaz-134458225"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>

            <motion.a 
              href="https://github.com/Sadia-Naaz"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
            </motion.a>

            <motion.a 
              href="mailto:sadianaaz110@gmail.com"
              whileHover={{ scale: 1.2 }}
              aria-label="Email"
            >
              <Mail className="w-7 h-7" />
            </motion.a>
          </div>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1TzgZQzWpgp5c3Tbbj_hbi3k1FuVHw5kG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <button className="mt-4 px-6 py-3 text-lg rounded-md font-semibold bg-gradient-to-r from-indigo-500 via-pink-600 to-purple-600 text-white shadow-lg">
              Download Resume
            </button>
          </motion.a>
        </div>

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-600 p-1 shrink-0"
        >
          <img
            src="/assets/sadia.jpg"
            alt="Sadia Naaz"
            className="w-full h-full object-cover rounded-full border-[6px] border-white dark:border-gray-900"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
