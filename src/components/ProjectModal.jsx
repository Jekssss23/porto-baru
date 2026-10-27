import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, UserCheck, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Tutup jendela detail proyek"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Project Title */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {project.overview || project.shortDescription}
            </p>
          </div>

          {/* Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-16/9 shadow-xs">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Action CTAs: Live Demo and Source Code */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-xs hover:shadow-sm"
              >
                <span>Buka Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
              >
                <GithubIcon size={15} />
                <span>Lihat Source Code</span>
              </a>
            ) : (
              <span className="text-xs text-slate-400 italic px-2">
                *Repositori source code privat untuk kebutuhan akademik / hak cipta instansi
              </span>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>Tantangan & Latar Belakang</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
              <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>Solusi & Pendekatan Teknis</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Role & Concrete Contribution */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <UserCheck size={16} className="text-blue-600" />
              <span>Peran & Kontribusi Nyata</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {project.contribution}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Fitur Utama yang Diimplementasikan</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers size={16} className="text-slate-600" />
              <span>Teknologi yang Digunakan</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors shadow-2xs"
          >
            Tutup Detail
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectModal;
