import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/config';
import ProjectModal from './ProjectModal';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-20 md:py-28 px-5 sm:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Portofolio Proyek
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Karya & Proyek Teruji
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Koleksi aplikasi sistem informasi, sistem POS & inventaris, web reservasi, serta arsitektur antarmuka modern yang dikerjakan dengan standar rekayasa perangkat lunak nyata.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom & Badge */}
                <div 
                  className="relative aspect-16/10 overflow-hidden bg-slate-100 cursor-pointer border-b border-slate-100"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Top Bar on Card */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-xs">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-700 text-xs font-bold font-mono shadow-xs">
                      {project.year}
                    </span>
                  </div>

                  {/* Overlay hint on hover */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-md">
                      <Info size={14} className="text-blue-600" />
                      Klik untuk Detail Lengkap
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7">
                  
                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Role Pill */}
                  <div className="mb-4 text-xs font-semibold text-slate-700 flex items-center gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px]">Peran:</span>
                    <span>{project.contribution}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <Info size={14} />
                  <span>Lihat Studi Kasus</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
                      title="Lihat Source Code GitHub"
                      aria-label={`Source Code GitHub untuk ${project.title}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-2xs hover:shadow-xs"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
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
