import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, techList } from './projectsData';

const Projects = () => {
  const [activeTech, setActiveTech] = useState("All");

  const filteredProjects =
    activeTech === "All"
      ? projects
      : projects.filter((proj) => proj.technologies.includes(activeTech));

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-950 text-white">
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
        Projects
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {techList.map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveTech(tech)}
            className={`px-4 py-2 rounded-full border ${
              activeTech === tech
                ? 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white'
                : 'bg-gray-800 border-white/20 hover:bg-white/10'
            } transition`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 p-5 rounded-lg backdrop-blur-md border border-white/10 hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-300 my-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-sm">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/10 text-white rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Live
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
