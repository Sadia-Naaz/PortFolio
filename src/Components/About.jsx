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
           I’m a Full-Stack Software Engineer specializing in React, Node.js, Express.js, NestJS, and MongoDB, focused on building scalable, secure, and high-performance web applications that solve real business problems.

Over the past year, 
<br/>I’ve worked on:
<ul className="list-disc pl-6 mt-2 space-y-2">
  <li>High-traffic e-commerce systems handling peak-load events</li>
  <li>HR, payroll, and CRM platforms that automated manual operations</li>
  <li>Real-time booking and scheduling systems with conflict-free logic</li>
  <li>Secure large-scale examination platforms for 100K+ users</li>
</ul>

I focus on:
<ul className="list-disc pl-6 mt-2 space-y-2">
  <li>Designing clean, scalable backend architectures</li>
  <li> Designing clean, scalable backend architectures</li>
  <li>Building fast, responsive, and intuitive frontends</li>
   <li>Optimizing performance with Redis, caching, and efficient queries</li>
   Creating systems that are reliable, secure, and measurable in impact
  
</ul>

I’m not just a developer—I’m a problem solver who enjoys turning complex ideas into simple, scalable products.

If you’re building something ambitious or looking for someone who brings both engineering depth and business mindset, let’s connect.
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
