import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/config';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 sm:px-8 relative">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5">
            {portfolioData.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {portfolioData.contact.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            {portfolioData.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          
          {/* Card 1: Email Channel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 shadow-2xl hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-105 transition-transform">
                <Mail size={26} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5 font-mono">
                Kanal Email Resmi
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {portfolioData.contact.email}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-7">
                Untuk pertanyaan formal, peluang kerja full-time, diskusi teknis, atau dokumen kerja sama proyek.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/10">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-md shadow-sky-500/20"
              >
                <Send size={15} />
                <span>Kirim Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                aria-label="Salin alamat email"
              >
                {copiedEmail ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-400">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: WhatsApp Channel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 shadow-2xl hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                <MessageSquare size={26} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5 font-mono">
                Kanal WhatsApp Cepat
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {portfolioData.contact.whatsapp}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-7">
                Untuk diskusi cepat, konsultasi awal kebutuhan pengembangan web, atau respons instan.
              </p>
            </div>

            <div className="pt-5 border-t border-white/10">
              <a
                href={portfolioData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-500/20"
              >
                <ArrowUpRight size={16} />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Location & Social Badges Bar */}
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
              <MapPin size={17} />
            </div>
            <span>Berbasis di <strong className="text-white font-bold">{portfolioData.contact.location}</strong></span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {portfolioData.contact.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : '_self'}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{social.name}</span>
                {social.url.startsWith('http') && <ExternalLink size={12} className="text-slate-500" />}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
