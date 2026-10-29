import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-12 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors z-20"
          aria-label="Tutup detail proyek"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="h-[40vh] lg:h-auto lg:min-h-[500px] bg-gray-100 relative">
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
          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <div className="mb-4 inline-block px-3.5 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 font-mono w-fit">
              {project.year}
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 text-gray-900">
              {project.title}
            </h2>
            
            <p className="text-base text-gray-500 font-medium mb-6">
              {project.category}
            </p>
            
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-bold">About the Project</h4>
              <p className="text-gray-600 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-bold">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
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
                className="group relative inline-flex items-center justify-center px-7 py-3.5 font-medium text-white bg-foreground rounded-full overflow-hidden transition-all hover:scale-105 self-start shadow-md"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm font-semibold">
                  <span>Lihat Live Demo</span>
                  <ExternalLink size={15} />
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
