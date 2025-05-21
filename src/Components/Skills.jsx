import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiVercel,
  SiRender,
} from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-blue-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Render", icon: <SiRender className="text-white" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white py-20 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
            }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-sm font-semibold text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
