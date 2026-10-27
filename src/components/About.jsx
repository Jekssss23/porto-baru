import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BarChart3, Users2, Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/config';

const getHighlightIcon = (iconName) => {
  switch (iconName) {
    case 'graduation-cap':
      return <GraduationCap className="text-sky-400" size={24} />;
    case 'code':
      return <Code2 className="text-indigo-400" size={24} />;
    case 'chart-bar':
      return <BarChart3 className="text-cyan-400" size={24} />;
    case 'users':
      return <Users2 className="text-emerald-400" size={24} />;
    default:
      return <Code2 className="text-sky-400" size={24} />;
  }
};

const getContactIcon = (id) => {
  switch (id) {
    case 'email':
      return <Mail size={16} className="text-sky-400" />;
    case 'whatsapp':
      return <WhatsAppIcon size={16} className="text-emerald-400" />;
    case 'location':
      return <MapPin size={16} className="text-rose-400" />;
    case 'github':
      return <GithubIcon size={16} className="text-white" />;
    case 'linkedin':
      return <LinkedinIcon size={16} className="text-blue-400" />;
    case 'instagram':
      return <InstagramIcon size={16} className="text-pink-400" />;
    default:
      return <Mail size={16} className="text-sky-400" />;
  }
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-5 sm:px-8 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5">
            {portfolioData.about.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {portfolioData.about.title}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            {portfolioData.about.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Natural Professional Story & Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl shadow-xl space-y-5 text-slate-300 text-base md:text-lg leading-relaxed font-normal">
              {portfolioData.about.paragraphs.map((p, index) => (
                <p key={index} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Contact & Verification Badges */}
            <div className="p-7 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                Koneksi & Tautan Resmi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.about.contacts.map((contact) => (
                  <a
                    key={contact.id}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/50 hover:bg-sky-500/[0.07] transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-white/10 group-hover:bg-slate-800 transition-colors">
                        {getContactIcon(contact.id)}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          {contact.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate group-hover:text-sky-400 transition-colors">
                          {contact.text}
                        </span>
                      </div>
                    </div>
                    {contact.link.startsWith('http') && (
                      <ExternalLink size={14} className="text-slate-500 group-hover:text-sky-400 transition-colors shrink-0 ml-2" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Bento Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {portfolioData.about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getHighlightIcon(item.icon)}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
