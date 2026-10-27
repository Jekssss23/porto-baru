import React from 'react';
import { motion } from 'framer-motion';

const words = [
  "SISTEM INFORMASI",
  "FULL-STACK WEB",
  "ANALISIS KUALITAS LAYANAN (WEBQUAL & IPA)",
  "DATABASE ARCHITECTURE",
  "REACT & NEXT.JS",
  "LARAVEL & NODE.JS",
  "USER-CENTERED DESIGN",
  "CLEAN ARCHITECTURE"
];

const Marquee = () => {
  return (
    <section className="py-7 bg-slate-950/80 border-y border-white/5 overflow-hidden flex items-center select-none backdrop-blur-md" aria-hidden="true">
      <div className="relative w-full flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 32,
            repeat: Infinity,
          }}
        >
          {[...words, ...words].map((word, i) => (
            <div key={i} className="flex items-center gap-10 text-slate-400 font-bold tracking-widest text-xs uppercase font-mono">
              <span className="hover:text-sky-400 transition-colors">{word}</span>
              <span className="w-2 h-2 rounded-full bg-sky-500/80 shadow-[0_0_8px_rgba(56,189,248,0.6)] shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
