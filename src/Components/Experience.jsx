import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full-Stack Developer -Devivers Digital Solutions",
    company: "Devivers Digital Solutions",
    duration: "July 1, 2025 - Present",
    description: "Currently working full time focusing on scalable web apps,mobile applications,online stores custom platforms and more",
  },
  {
    title: "Full-Stack Developer - 7Cloud Infotech",
    company: "7Cloud Infotech",
    duration: "May 1, 2024 - June 27, 2025",
    description: "Designed and built end-to-end full-stack applications using modern JavaScript frameworks and cloud infrastructure, delivering responsive and scalable user experiences.Developed robust frontends and optimized backend APIs to handle high-traffic, real-time data, and secure transactions.Integrated CI/CD pipelines and performance monitoring to improve application reliability, development speed, and system performance.Delivered secure, user-centric platforms across e-commerce, fintech, government, and blockchain domains, driving measurable business growth.",
  },
  {
    title: "Full Stack Developer - Nexabyte Solutions",
    company: "Nexabyte Solutions",
    duration: "Feb 1, 2024 - April 30, 2024",
    description: "Worked on MERN stack solutions, API integrations and building client web apps.",
  },
   
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const Experience = () => {
  return (
    <section  id='experience' className="relative  text-white py-20 px-4 sm:px-8 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-indigo-500 to-purple-500 rounded-lg" />

        <div className="flex flex-col gap-20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                className={`relative w-full md:w-1/2 px-4 py-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                  ${isLeft ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'}
                `}
                initial="hidden"
                whileInView="visible"
                custom={index}
                variants={cardVariants}
                viewport={{ once: true, amount: 0.6 }}
              >
                {/* Dot Connector */}
                <div
                  className={`absolute top-6 w-5 h-5 rounded-full border-4 
                    ${isLeft ? 'left-[-38px] border-purple-500' : 'right-[-38px] border-pink-500'}
                    animate-pulse bg-gray-900 z-10
                  `}
                />

                <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  {exp.title}
                </h3>
                <p className="text-indigo-300 italic">{exp.company}</p>
                <p className="text-sm text-gray-300 mb-4">{exp.duration}</p>
                <p className="text-sm text-gray-200">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
