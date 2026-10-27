import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/config';
import ProjectModal from './ProjectModal';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-24 md:py-32 px-5 sm:px-8 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5">
            Portofolio Proyek
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Karya & Proyek Teruji
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Koleksi aplikasi sistem informasi, sistem POS apotek & inventaris, reservasi hotel, serta platform web interaktif yang dikerjakan dengan standar rekayasa nyata.
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
              className="group bg-slate-900/50 rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:border-sky-500/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                {/* Image Container with Browser Header Simulation */}
                <div 
                  className="relative aspect-16/10 overflow-hidden bg-slate-950 cursor-pointer border-b border-white/10"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Browser Window Header Simulation */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-slate-950/80 backdrop-blur-md px-4 flex items-center justify-between z-10 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pt-8 group-hover:scale-104 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Category Pill */}
                  <div className="absolute bottom-3.5 left-3.5 z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-sky-400 text-[11px] font-bold border border-white/10 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay hint on hover */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-bold shadow-xl">
                      <Info size={14} className="text-sky-600" />
                      Klik untuk Detail Lengkap
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7">
                  
                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Role Pill */}
                  <div className="mb-5 text-xs font-semibold text-slate-300 flex items-center gap-2 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                    <span className="text-sky-400 font-bold uppercase tracking-wider text-[10px]">Peran:</span>
                    <span>{project.contribution}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-7 pb-7 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <Info size={14} />
                  <span>Lihat Studi Kasus</span>
                </button>

                <div className="flex items-center gap-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 text-xs font-bold transition-all shadow-md shadow-sky-500/20"
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
