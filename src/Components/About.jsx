import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className="min-h-screen bg-gray-900 text-white px-8 py-20 flex flex-col gap-10">
      
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
        About Me
      </h2>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Profile Image with Degree Card */}
        <div className="relative w-80 h-80 rounded-sm bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-600 p-1 shrink-0">
          <img
            src="/assets/sadia.jpg"
            alt="Sadia Naaz"
            className="w-full h-full object-cover rounded-sm border-[6px] border-white dark:border-gray-900"
          />

          {/* Degree Card - Top Right */}
          <div className="absolute top--10 right--10 w-48 p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20 z-10">
            <h3 className="text-sm font-bold text-indigo-300">Degree</h3>
            <p className="text-sm">MCA – Manipal University Jaipur</p>
          </div>
        </div>

        {/* Bio with Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl text-lg leading-relaxed"
        >
          <p>
            Full Stack Web Developer with hands-on experience building end-to-end applications using the{' '}
            <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js). I hold an MCA and have completed an
            intensive full stack training at <strong>AccioJob</strong>, focusing on real-world project development,
            Git/GitHub, and deployment.
          </p>
          <p className="mt-4">
            Skilled in creating responsive, scalable web apps and passionate about building clean, user-centric
            interfaces.
          </p>

          {/* Course Card - Bottom Right */}
          <div className="absolute bottom--2 right--2 w-60 p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20 z-10">
            <h3 className="text-sm font-bold text-pink-300">Full Stack Course</h3>
            <p className="text-sm">AccioJob – Full Stack Web Development</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
