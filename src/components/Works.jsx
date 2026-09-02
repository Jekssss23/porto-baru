import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/config';
import ProjectModal from './ProjectModal';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
            Selected Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-8">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 transition-transform duration-700 ease-out group-hover:scale-105">
                    <span className="text-gray-400 font-medium tracking-widest uppercase">
                      Placeholder
                    </span>
                  </div>
                )}
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-mono text-gray-400 mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-gray-500 text-lg mb-4">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
