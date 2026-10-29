import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/config';
import { MessageCircle, ArrowRight, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            {portfolioData.contact.headline}
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {portfolioData.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={portfolioData.contact.link || `mailto:${portfolioData.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-medium text-white bg-foreground rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3 text-base md:text-lg font-semibold">
              <MessageCircle size={20} />
              <span>{portfolioData.contact.cta}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 bg-gray-800 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out" />
          </a>

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="group relative inline-flex items-center justify-center px-8 py-5 font-medium text-foreground bg-transparent border-2 border-foreground/20 hover:border-foreground rounded-full overflow-hidden transition-all text-base md:text-lg font-semibold"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Mail size={19} />
              <span>Email Langsung</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
