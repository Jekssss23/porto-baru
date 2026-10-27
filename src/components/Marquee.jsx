import React from 'react';
import { motion } from 'framer-motion';

const words = [
  "SISTEM INFORMASI",
  "FULL-STACK WEB",
  "ANALISIS KUALITAS LAYANAN",
  "DATABASE ARCHITECTURE",
  "REACT & NEXT.JS",
  "LARAVEL & NODE.JS",
  "USER-CENTERED DESIGN",
  "CLEAN CODE"
];

const Marquee = () => {
  return (
    <section className="py-6 bg-slate-900 border-y border-slate-800 overflow-hidden flex items-center select-none" aria-hidden="true">
      <div className="relative w-full flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...words, ...words].map((word, i) => (
            <div key={i} className="flex items-center gap-8 text-slate-300 font-bold tracking-widest text-xs uppercase">
              <span>{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
