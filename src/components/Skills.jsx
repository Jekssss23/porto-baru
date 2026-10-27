import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Database, 
  Smartphone, 
  Palette, 
  Terminal, 
  Camera, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/config';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Web Development':
      return <Globe size={22} className="text-sky-400" />;
    case 'Database & Backend':
      return <Database size={22} className="text-indigo-400" />;
    case 'Mobile App Development':
      return <Smartphone size={22} className="text-emerald-400" />;
    case 'UI/UX Design':
      return <Palette size={22} className="text-pink-400" />;
    case 'Tools & Development Environment':
      return <Terminal size={22} className="text-amber-400" />;
    case 'Photography & Creative Skills':
      return <Camera size={22} className="text-cyan-400" />;
    default:
      return <Code2 size={22} className="text-sky-400" />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 sm:px-8 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5">
            Keahlian & Teknologi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Kompetensi Teknis & Alat
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Daftar teknologi dan metodologi yang telah saya terapkan secara nyata dalam proyek akademik, sistem informasi instansi, dan riset ilmiah.
          </p>
        </div>

        {/* 6 Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.skillsCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-7 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
            >
              <div>
                {/* Header of Category */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-sky-400 transition-colors">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed font-normal">
                  {group.description}
                </p>

                {/* Skills Badges in this Category */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                    >
                      <CheckCircle2 size={13} className="text-sky-400 shrink-0" />
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-[10px] text-slate-500 font-normal pl-1.5 border-l border-white/10">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-7 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{group.skills.length} Kemampuan</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Aktif Digunakan
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
