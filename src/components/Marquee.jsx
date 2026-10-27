import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/config';

const Marquee = () => {
  return (
    <section className="py-24 bg-foreground overflow-hidden flex items-center">
      <div className="relative w-full flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap text-background"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Render the text multiple times to ensure continuous flow */}
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-bold tracking-tighter uppercase px-4">
              {portfolioData.marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
