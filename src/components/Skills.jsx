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
      return <Globe size={22} className="text-blue-600" />;
    case 'Database & Backend':
      return <Database size={22} className="text-indigo-600" />;
    case 'Mobile App Development':
      return <Smartphone size={22} className="text-emerald-600" />;
    case 'UI/UX Design':
      return <Palette size={22} className="text-pink-600" />;
    case 'Tools & Development Environment':
      return <Terminal size={22} className="text-amber-600" />;
    case 'Photography & Creative Skills':
      return <Camera size={22} className="text-cyan-600" />;
    default:
      return <Code2 size={22} className="text-blue-600" />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 px-5 sm:px-8 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Keahlian & Teknologi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Kompetensi Teknis & Alat
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
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
              className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of Category */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed font-normal">
                  {group.description}
                </p>

                {/* Skills Badges in this Category */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-medium text-slate-800"
                    >
                      <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal pl-1 border-l border-slate-200">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{group.skills.length} Kemampuan Terverifikasi</span>
                <span className="text-emerald-600 font-semibold">Aktif Digunakan</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
