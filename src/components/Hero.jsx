import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/config';

const Hero = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:py-36 px-5 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Identity & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold w-fit mb-6 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>{portfolioData.personal.status}</span>
            </div>

            {/* Name & Academic Degree */}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                {portfolioData.personal.name}
              </h1>
              <span className="inline-flex items-center px-3.5 py-1 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 text-base sm:text-lg font-black tracking-wider shadow-lg shadow-sky-500/20">
                {portfolioData.personal.degree}
              </span>
            </div>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-slate-200 to-indigo-300 mb-6 leading-snug">
              {portfolioData.personal.role}
            </h2>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-9 max-w-2xl">
              {portfolioData.personal.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#works"
                onClick={(e) => handleSmoothScroll(e, '#works')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 rounded-2xl transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>{portfolioData.hero.ctaPrimary}</span>
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-white/15 hover:border-white/30 rounded-2xl transition-all duration-300 shadow-md hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Mail size={17} className="text-sky-400" />
                <span>{portfolioData.hero.ctaSecondary}</span>
              </a>

              <a
                href={portfolioData.personal.cvUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-slate-400 hover:text-white bg-transparent hover:bg-white/5 rounded-2xl transition-colors duration-200"
              >
                <FileText size={17} />
                <span>{portfolioData.hero.ctaCv}</span>
              </a>
            </div>

            {/* Key Stats Bar with Glass Effect */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md">
              {portfolioData.hero.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Photo Card with Glow & Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Ambient Glow Rim */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-purple-500/30 blur-2xl opacity-70 pointer-events-none" />

              {/* Photo Card Container */}
              <div className="relative p-1.5 rounded-[2.5rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-[2.2rem] overflow-hidden bg-slate-900 aspect-4/5 border border-white/10">
                  <img
                    src={portfolioData.personal.photo}
                    alt="Ahmad Ridho Zakiy, S.Kom."
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700 ease-out"
                    loading="eager"
                    fetchPriority="high"
                  />

                  {/* Gradient Darkening Overlay at the Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-transparent pointer-events-none" />

                  {/* Bottom Photo Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none flex items-center justify-between">
                    <div>
                      <p className="text-base font-extrabold tracking-tight">Ahmad Ridho Zakiy</p>
                      <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
                        <MapPin size={13} className="text-sky-400" />
                        {portfolioData.personal.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-sky-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                      S.Kom.
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-2 sm:-right-4 bg-slate-900/90 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-2.5 shadow-2xl shadow-black/80 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Sparkles size={17} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">UPI YPTK Padang</span>
                  <span className="text-[11px] text-sky-400 font-medium">Sistem Informasi</span>
                </div>
              </motion.div>

              {/* Floating Badge Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 bg-slate-900/90 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-2.5 shadow-2xl shadow-black/80 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={17} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">Full-Stack & Analyst</span>
                  <span className="text-[11px] text-emerald-400 font-medium">Web Development</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
