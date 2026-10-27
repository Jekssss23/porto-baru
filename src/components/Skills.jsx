import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/config';
import { ArrowUpRight } from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            My Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="text-gray-400 font-mono text-sm mb-12">
                {String(index + 1).padStart(2, '0')} —
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                {skill.title}
              </h3>

              <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-blue-600" size={24} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
