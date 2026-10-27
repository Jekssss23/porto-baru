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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:py-32 px-5 sm:px-8 overflow-hidden"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-slate-200/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity, Headline, Bio, and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold w-fit mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{portfolioData.personal.status}</span>
            </div>

            {/* Name & Degree */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                {portfolioData.personal.name}
              </h1>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-slate-900 text-white text-base sm:text-lg font-bold tracking-wide">
                {portfolioData.personal.degree}
              </span>
            </div>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-5 leading-snug">
              {portfolioData.personal.role}
            </h2>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              {portfolioData.personal.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#works"
                onClick={(e) => handleSmoothScroll(e, '#works')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>{portfolioData.hero.ctaPrimary}</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Mail size={16} className="text-slate-500" />
                <span>{portfolioData.hero.ctaSecondary}</span>
              </a>

              <a
                href={portfolioData.personal.cvUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-600 hover:text-blue-600 bg-transparent hover:bg-blue-50/60 rounded-xl transition-colors duration-200"
              >
                <FileText size={16} />
                <span>{portfolioData.hero.ctaCv}</span>
              </a>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
              {portfolioData.hero.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Professional Profile Photo with Visual Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow / Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-slate-200/50 to-indigo-500/20 blur-lg opacity-70" />

              {/* Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl aspect-4/5">
                <img
                  src={portfolioData.personal.photo}
                  alt="Ahmad Ridho Zakiy, S.Kom."
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Gradient Overlay at the Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold tracking-tight">Ahmad Ridho Zakiy</p>
                    <p className="text-xs text-slate-200 flex items-center gap-1">
                      <MapPin size={12} className="text-blue-400" />
                      {portfolioData.personal.location}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-blue-600/90 text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    S.Kom.
                  </span>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Sparkles size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-slate-900 leading-none">UPI YPTK Padang</span>
                  <span className="text-[10px] text-slate-500 font-medium">Sistem Informasi</span>
                </div>
              </motion.div>

              {/* Floating Badge Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-slate-900 leading-none">Full-Stack & Analyst</span>
                  <span className="text-[10px] text-slate-500 font-medium">Web Development</span>
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
