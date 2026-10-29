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
    <section id="works" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Selected Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer bg-white rounded-3xl p-5 md:p-6 border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-[16/10] mb-5 border border-stone-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-100 transition-transform duration-700 ease-out group-hover:scale-105">
                      <span className="text-stone-400 font-medium tracking-widest uppercase">
                        Placeholder
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-400 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs text-xs font-semibold tracking-wider uppercase text-foreground shadow-sm">
                      Lihat Detail ↗
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-stone-700 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-stone-400 shrink-0 px-2 py-1 bg-stone-100 rounded-md">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technology Badges & View Details */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-stone-100 text-stone-400 text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-stone-500 group-hover:text-foreground flex items-center gap-1 transition-colors">
                  Detail →
                </span>
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
