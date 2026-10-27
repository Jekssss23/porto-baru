import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-12 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white w-full max-w-6xl max-h-full overflow-y-auto rounded-3xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="h-[40vh] lg:h-auto lg:min-h-[600px] bg-gray-100 relative">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 font-medium tracking-widest uppercase text-xl">
                  {project.title} Visual
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-6 inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
              {project.year}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {project.title}
            </h2>
            
            <p className="text-lg text-gray-500 font-medium mb-8">
              {project.category}
            </p>
            
            <div className="mb-10">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">About the Project</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="mb-12">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-foreground rounded-full overflow-hidden transition-all hover:scale-105 self-start"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Project
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gray-800 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
