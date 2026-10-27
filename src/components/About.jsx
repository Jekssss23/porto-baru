import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BarChart3, Users2, Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/config';

const getHighlightIcon = (iconName) => {
  switch (iconName) {
    case 'graduation-cap':
      return <GraduationCap className="text-blue-600" size={24} />;
    case 'code':
      return <Code2 className="text-indigo-600" size={24} />;
    case 'chart-bar':
      return <BarChart3 className="text-cyan-600" size={24} />;
    case 'users':
      return <Users2 className="text-emerald-600" size={24} />;
    default:
      return <Code2 className="text-blue-600" size={24} />;
  }
};

const getContactIcon = (id) => {
  switch (id) {
    case 'email':
      return <Mail size={16} className="text-slate-600" />;
    case 'whatsapp':
      return <WhatsAppIcon size={16} className="text-emerald-600" />;
    case 'location':
      return <MapPin size={16} className="text-rose-600" />;
    case 'github':
      return <GithubIcon size={16} className="text-slate-800" />;
    case 'linkedin':
      return <LinkedinIcon size={16} className="text-blue-600" />;
    case 'instagram':
      return <InstagramIcon size={16} className="text-pink-600" />;
    default:
      return <Mail size={16} className="text-slate-600" />;
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-5 sm:px-8 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            {portfolioData.about.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {portfolioData.about.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            {portfolioData.about.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Natural Professional Story & Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="prose prose-slate max-w-none space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              {portfolioData.about.paragraphs.map((p, index) => (
                <p key={index} className="text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Contact & Verification Badges */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Koneksi & Tautan Resmi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.about.contacts.map((contact) => (
                  <a
                    key={contact.id}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200/90 hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                        {getContactIcon(contact.id)}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {contact.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                          {contact.text}
                        </span>
                      </div>
                    </div>
                    {contact.link.startsWith('http') && (
                      <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 ml-2" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Structured Pillars */}
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
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-3.5">
                  {getHighlightIcon(item.icon)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
