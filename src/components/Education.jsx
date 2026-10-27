import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Calendar, BookOpen, ShieldCheck, FileCheck } from 'lucide-react';
import { portfolioData } from '../data/config';

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 px-5 sm:px-8 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5">
            Pendidikan & Kualifikasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Riwayat Akademik Resmi
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            Latar belakang pendidikan tinggi di bidang Sistem Informasi dan rekam jejak kualifikasi formal yang terverifikasi.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main University Card (Higher prominence) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 shadow-2xl hover:border-sky-500/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group"
          >
            {/* Subtle Top-Right Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-slate-950 flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {portfolioData.education[0].status}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {portfolioData.education[0].institution}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-sky-400 mt-1">
                      {portfolioData.education[0].faculty} • Program Studi {portfolioData.education[0].major}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono font-bold">
                  <Calendar size={13} className="text-sky-400" />
                  <span>{portfolioData.education[0].period}</span>
                </div>
              </div>

              {/* Degree Highlight Pill */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Award size={20} className="text-sky-400" />
                  <span className="text-xs sm:text-sm font-bold text-white">Gelar Resmi Diperoleh:</span>
                </div>
                <span className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 font-black text-sm tracking-wide shadow-md">
                  {portfolioData.education[0].degree}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-7">
                {portfolioData.education[0].description}
              </p>

              {/* Achievements & Academic Points */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Sorotan Akademik & Kepemimpinan:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {portfolioData.education[0].achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5 text-[11px] text-slate-500 font-mono flex items-center justify-between relative z-10">
              <span>Kurikulum Sistem Informasi Terakreditasi</span>
              <span className="text-sky-400 font-semibold">Telah Diwisuda</span>
            </div>
          </motion.div>

          {/* Secondary High School Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 p-8 rounded-3xl bg-slate-900/50 border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 text-slate-300 flex items-center justify-center mb-5">
                <BookOpen size={22} className="text-sky-400" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono font-bold mb-3">
                {portfolioData.education[1].period}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {portfolioData.education[1].institution}
              </h3>
              <p className="text-xs font-semibold text-slate-400 mb-5 font-mono">
                Jurusan {portfolioData.education[1].major}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {portfolioData.education[1].description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Capaian:
                </h4>
                <ul className="space-y-2">
                  {portfolioData.education[1].achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-slate-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
              Pendidikan Menengah Atas
            </div>
          </motion.div>

        </div>

        {/* Verified Documents & Academic Credentials Bar */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-white/10 text-white shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
                <ShieldCheck size={17} />
                <span>Dokumen & Sertifikasi Terverifikasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Integritas & Keaslian Dokumen
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Seluruh data akademik, riwayat kepengurusan, dan sertifikat magang DPRD didasarkan pada dokumen resmi yang sah dan dapat diverifikasi langsung.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-sky-500/30 transition-colors">
                  <div>
                    <span className="text-[10px] text-sky-400 font-mono block mb-1">{cert.year}</span>
                    <h4 className="text-xs font-bold text-white leading-tight mb-1">{cert.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-snug">{cert.issuer}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold mt-3 font-mono">
                    <FileCheck size={12} />
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
