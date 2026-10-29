import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/config';
import { MessageCircle, ArrowRight, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 uppercase mb-4 block">
            {portfolioData.contact.badge || "Hubungi Saya"}
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight mb-6">
            {portfolioData.contact.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-xl mx-auto font-normal leading-relaxed">
            {portfolioData.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href={portfolioData.contact.whatsapp || portfolioData.contact.link || `mailto:${portfolioData.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-semibold text-white bg-foreground rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3 text-sm md:text-base font-semibold">
              <MessageCircle size={20} />
              <span>{portfolioData.contact.ctaWhatsapp || portfolioData.contact.cta || "Chat via WhatsApp"}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
            <div className="absolute inset-0 bg-stone-800 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out" />
          </a>

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="group relative inline-flex items-center justify-center px-8 md:px-9 py-4 md:py-5 font-semibold text-foreground bg-white border border-stone-300/80 hover:border-foreground rounded-full overflow-hidden transition-all text-sm md:text-base shadow-2xs hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Mail size={18} />
              <span>{portfolioData.contact.ctaEmail || "Kirim Email Langsung"}</span>
            </span>
          </a>
        </motion.div>

        {/* Quick Social & Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-stone-500 font-medium"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-stone-200/50 border border-stone-300/60">
            📍 Padang, Sumatera Barat
          </span>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200/80 hover:border-foreground text-stone-700 hover:text-foreground transition-colors shadow-2xs"
          >
            LinkedIn Profile ↗
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200/80 hover:border-foreground text-stone-700 hover:text-foreground transition-colors shadow-2xs"
          >
            GitHub (@Jekssss23) ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
