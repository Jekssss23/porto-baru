import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';

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
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "60px", opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "60px", opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 md:top-6 md:right-6 p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors z-20"
          aria-label="Tutup detail proyek"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image Section */}
          <div className="lg:col-span-5 bg-stone-100 relative min-h-[260px] lg:min-h-full flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-stone-100">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[420px] object-cover rounded-2xl shadow-sm border border-stone-200/60"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-stone-200 rounded-2xl">
                <span className="text-stone-400 font-medium tracking-widest uppercase text-base">
                  {project.title} Visual
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Header Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold text-stone-600 font-mono">
                  {project.year}
                </span>
                <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold text-stone-600">
                  {project.category}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-stone-900 leading-snug">
                {project.title}
              </h2>

              {/* Ringkasan & Masalah */}
              <div className="space-y-4 mb-6 text-sm text-stone-600 leading-relaxed">
                {project.summary && (
                  <p className="font-medium text-stone-700">
                    {project.summary}
                  </p>
                )}
                {project.problem && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-1">
                      Tujuan & Tantangan Proyek
                    </h4>
                    <p className="text-stone-600">
                      {project.problem}
                    </p>
                  </div>
                )}
              </div>

              {/* Peran & Kontribusi */}
              {project.contribution && (
                <div className="mb-6 p-4 rounded-2xl bg-[#F7F5EE] border border-stone-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-1 flex items-center gap-1.5">
                    <span>Peran: {project.role || "Developer"}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-2.5 font-bold">
                  Teknologi yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-stone-100 border border-stone-200 rounded-lg text-xs font-medium text-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-foreground rounded-full overflow-hidden transition-all hover:scale-105 shadow-sm text-xs sm:text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Lihat Live Demo</span>
                    <ExternalLink size={14} />
                  </span>
                  <div className="absolute inset-0 bg-stone-800 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-stone-800 bg-white border border-stone-300 hover:border-foreground rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xs text-xs sm:text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Code2 size={15} />
                    <span>Source Code</span>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
