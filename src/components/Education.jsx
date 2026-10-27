import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Calendar, BookOpen, ShieldCheck, FileCheck } from 'lucide-react';
import { portfolioData } from '../data/config';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 px-5 sm:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Pendidikan & Kualifikasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Riwayat Akademik Resmi
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Latar belakang pendidikan tinggi di bidang Sistem Informasi dan rekam jejak kualifikasi formal yang terverifikasi.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Main University Card (Higher prominence) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      {portfolioData.education[0].status}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {portfolioData.education[0].institution}
                    </h3>
                    <p className="text-sm font-semibold text-blue-700 mt-0.5">
                      {portfolioData.education[0].faculty} • Program Studi {portfolioData.education[0].major}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold">
                  <Calendar size={13} className="text-slate-500" />
                  <span>{portfolioData.education[0].period}</span>
                </div>
              </div>

              {/* Degree Highlight Pill */}
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-blue-600" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">Gelar Resmi Diperoleh:</span>
                </div>
                <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-bold text-xs sm:text-sm tracking-wide">
                  {portfolioData.education[0].degree}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {portfolioData.education[0].description}
              </p>

              {/* Achievements & Academic Points */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Sorotan Akademik & Kepemimpinan:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {portfolioData.education[0].achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Kurikulum Sistem Informasi Terakreditasi</span>
              <span className="text-blue-700 font-semibold">Telah Diwisuda</span>
            </div>
          </motion.div>

          {/* Secondary High School Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                <BookOpen size={20} />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-bold mb-2">
                {portfolioData.education[1].period}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {portfolioData.education[1].institution}
              </h3>
              <p className="text-xs font-semibold text-slate-500 mb-4">
                Jurusan {portfolioData.education[1].major}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {portfolioData.education[1].description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Capaian:
                </h4>
                <ul className="space-y-2">
                  {portfolioData.education[1].achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-slate-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              Pendidikan Menengah Atas
            </div>
          </motion.div>

        </div>

        {/* Verified Documents & Academic Credentials Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                <ShieldCheck size={16} />
                <span>Dokumen & Sertifikasi Terverifikasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Integritas & Keaslian Dokumen
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Seluruh data akademik, riwayat kepengurusan, dan sertifikat magang DPRD didasarkan pada dokumen resmi yang sah dan dapat diverifikasi langsung.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-blue-300 font-mono block mb-1">{cert.year}</span>
                    <h4 className="text-xs font-bold text-white leading-tight mb-1">{cert.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">{cert.issuer}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mt-2">
                    <FileCheck size={11} />
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
