import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Megaphone, HeartHandshake, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/config';

const getExperienceIcon = (id) => {
  switch (id) {
    case 1:
      return <Building2 size={20} className="text-blue-600" />;
    case 2:
      return <Users size={20} className="text-emerald-600" />;
    case 3:
      return <Megaphone size={20} className="text-indigo-600" />;
    case 4:
      return <HeartHandshake size={20} className="text-amber-600" />;
    default:
      return <Building2 size={20} className="text-blue-600" />;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-5 sm:px-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Pengalaman Terverifikasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Pengalaman & Kepemimpinan
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Pengalaman praktis di instansi pemerintahan dan kontribusi kepemimpinan aktif dalam organisasi kemahasiswaan tingkat jurusan.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-8 relative">
          
          {/* Vertical Guide Line on Desktop */}
          <div className="hidden md:block absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200" />

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
              <div className="hidden md:flex absolute left-3 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-600 group-hover:scale-110 items-center justify-center transition-all duration-300 shadow-2xs z-10">
                <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors" />
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      {getExperienceIcon(exp.id)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700">
                        {exp.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin size={12} className="text-slate-400" />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-[11px]">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono shrink-0 self-start">
                    <Calendar size={13} className="text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Concrete Responsibilities & Contributions */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Tanggung Jawab & Kontribusi Nyata:
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-normal">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Applied Tag */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
                    Keahlian:
                  </span>
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
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
