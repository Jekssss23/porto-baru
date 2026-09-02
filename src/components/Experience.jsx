import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/config';

const Experience = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-20 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 md:left-[20%]" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col md:flex-row md:items-start pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-foreground md:left-[calc(20%-5.5px)] ring-4 ring-background" />

              <div className="md:w-[20%] text-gray-500 font-mono mb-4 md:mb-0 md:pr-8">
                {exp.year}
              </div>
              
              <div className="md:w-[80%] md:pl-12">
                <h3 className="text-2xl font-semibold mb-3">{exp.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
