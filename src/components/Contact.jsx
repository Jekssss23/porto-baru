import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/config';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-5 sm:px-8 bg-slate-50/70">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            {portfolioData.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {portfolioData.contact.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {portfolioData.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Card 1: Email Channel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                <Mail size={24} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Kanal Email Resmi
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {portfolioData.contact.email}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Untuk pertanyaan formal, tawaran rekrutmen perusahaan, atau dokumen kerja sama proyek.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs"
              >
                <Send size={14} />
                <span>Kirim Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                aria-label="Salin alamat email"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-700">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
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
            className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <MessageSquare size={24} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Kanal WhatsApp Cepat
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {portfolioData.contact.whatsapp}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Untuk diskusi cepat, konsultasi awal kebutuhan aplikasi web, atau respons instan.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={portfolioData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs"
              >
                <Phone size={14} />
                <span>Chat via WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Location & Social Badges Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <MapPin size={16} className="text-rose-500 shrink-0" />
            <span>Berbasis di <strong className="text-slate-900">{portfolioData.contact.location}</strong></span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {portfolioData.contact.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : '_self'}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{social.name}</span>
                {social.url.startsWith('http') && <ExternalLink size={11} className="text-slate-400" />}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
