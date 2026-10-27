import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Megaphone, HeartHandshake, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/config';

const getExperienceIcon = (id) => {
  switch (id) {
    case 1:
      return <Building2 size={20} className="text-sky-400" />;
    case 2:
      return <Users size={20} className="text-emerald-400" />;
    case 3:
      return <Megaphone size={20} className="text-indigo-400" />;
    case 4:
      return <HeartHandshake size={20} className="text-amber-400" />;
    default:
      return <Building2 size={20} className="text-sky-400" />;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-5 sm:px-8 relative">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5">
            Pengalaman Terverifikasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Pengalaman & Kepemimpinan
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Pengalaman praktis di instansi pemerintahan dan kontribusi kepemimpinan aktif dalam organisasi kemahasiswaan tingkat jurusan.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-8 relative">
          
          {/* Vertical Guide Line on Desktop */}
          <div className="hidden md:block absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-sky-500/40 via-white/10 to-transparent" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:pl-16 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="hidden md:flex absolute left-3 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-[#090D16] border-2 border-white/20 group-hover:border-sky-400 group-hover:scale-110 items-center justify-center transition-all duration-300 shadow-lg z-10">
                <span className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-sky-400 transition-colors" />
              </div>

              {/* Card Container */}
              <div className="bg-slate-900/50 rounded-3xl border border-white/10 p-7 sm:p-9 shadow-2xl hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300 backdrop-blur-xl">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      {getExperienceIcon(exp.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">
                        {exp.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin size={13} className="text-sky-400" />
                          {exp.location}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-semibold text-[11px]">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold font-mono shrink-0 self-start">
                    <Calendar size={13} className="text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Concrete Responsibilities & Contributions */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Tanggung Jawab & Kontribusi Nyata:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-normal">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Applied Tag */}
                <div className="pt-5 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono mr-1">
                    Keahlian:
                  </span>
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
