import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/config';

const Timeline = ({ title, items, isEducation }) => (
  <div className="flex flex-col">
    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">{title}</h3>
    <div className="relative border-l-2 border-gray-100 ml-3 space-y-10">
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8"
        >
          {/* Dot */}
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7.5px] top-2 transition-colors duration-300 hover:bg-foreground" />
          <h4 className="text-lg md:text-xl font-bold text-gray-800">
            {isEducation ? item.institution : item.company}
          </h4>
          <p className="text-sm md:text-base text-gray-500 font-medium mt-1">
            {isEducation ? item.major : item.role}
          </p>
          <span className="text-xs text-gray-400 mt-2 block tracking-wider uppercase">
            {item.period}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const ToolsSection = () => (
  <div className="flex flex-col">
    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Tools</h3>
    <div className="relative w-full h-48 md:h-64 flex items-center justify-start md:justify-center perspective-[1200px]">
      <motion.div 
        initial={{ opacity: 0, rotateX: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, rotateX: 30, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-64 md:w-80 h-48 md:h-56 rounded-[2.5rem] bg-[#ffffff] border border-gray-100 flex items-center justify-center hover:rotate-y-[-5deg] hover:rotate-x-[35deg] transition-transform duration-700 ease-out cursor-pointer"
        style={{ 
          transformStyle: "preserve-3d", 
          transform: "rotateX(45deg) rotateY(-15deg) rotateZ(10deg)",
        }}
      >
        {/* Thick 3D Tray Base Layers */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`tray-${i}`}
            className="absolute inset-0 rounded-[2.5rem]" 
            style={{ 
              backgroundColor: i === 14 ? "#FFFFFF" : "#EBEBE6",
              transform: `translateZ(${-i * 2}px)`, 
              boxShadow: i === 14 ? "inset 0 -4px 10px rgba(0,0,0,0.03)" : i === 0 ? "0 30px 40px rgba(0,0,0,0.15)" : "none",
              border: i === 14 ? "1px solid rgba(0,0,0,0.05)" : "none"
            }} 
          />
        ))}

        {/* The Grid of Icons inside the tray */}
        <div className="grid grid-cols-3 gap-5 md:gap-8 p-6 relative z-10" style={{ transform: "translateZ(2px)", transformStyle: "preserve-3d" }}>
           {portfolioData.resume.tools.map((tool, index) => {
             const isTopRow = index < 3;
             return (
               <div key={index} className="relative w-12 h-12 md:w-14 md:h-14">
                 {/* Recessed Socket (The Hole) */}
                 <div 
                   className="absolute inset-0 rounded-xl md:rounded-2xl bg-[#5c1010] shadow-[inset_0_12px_25px_rgba(0,0,0,1),inset_0_2px_5px_rgba(0,0,0,0.8)] border border-black/20"
                   style={{ transform: "translateZ(-2px)" }}
                 />
                 
                 {/* Idle Bobbing Wrapper */}
                 <motion.div 
                   animate={{
                     y: [-20 - (index * 2), -35 + (index % 3 * 4), -20 - (index * 2)],
                     x: [0, index % 2 === 0 ? 4 : -4, 0],
                     rotateX: [index * 3, -(index % 2 * 5), index * 3],
                     rotateY: [-(index * 2), index % 3 * 4, -(index * 2)],
                     rotateZ: [index % 2 === 0 ? 5 : -8, index % 3 === 0 ? -4 : 6, index % 2 === 0 ? 5 : -8]
                   }}
                   transition={{
                     duration: 3 + (index * 0.6),
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   className="w-full h-full relative cursor-pointer z-10"
                   style={{ transformStyle: "preserve-3d" }}
                 >
                   {/* Interactive Spring Hover Wrapper */}
                   <motion.div
                     animate={{ 
                       translateZ: 45, 
                       rotateX: 20, 
                       rotateY: -10,
                       scale: 1
                     }}
                     whileHover={{ 
                       translateZ: 140, 
                       rotateX: Math.random() * 80 - 40, 
                       rotateY: Math.random() * 80 - 40, 
                       scale: 1.3
                     }}
                     transition={{ 
                       type: "spring", 
                       stiffness: 400, 
                       damping: 15 
                     }}
                     className="w-full h-full relative"
                     style={{ transformStyle: "preserve-3d" }}
                   >
                    {/* 3D Keycap Layers */}
                    {[...Array(25)].map((_, i) => {
                      const isTop = i === 24;
                      const isBottom = i === 0;
                      const scale = 1 - ((i / 24) * 0.15); // Slanted SA profile
                      return (
                        <div 
                          key={i}
                          className={`w-full h-full absolute inset-0 rounded-xl md:rounded-2xl ${isTop ? 'border border-white/60 backdrop-blur-md' : ''}`}
                          style={{
                            backgroundColor: isTop ? tool.topColor : tool.sideColor,
                            transform: `translateZ(${i * 2}px) scale(${scale})`,
                            boxShadow: isBottom ? "0px 20px 30px rgba(0,0,0,0.4)" : "none",
                          }}
                        >
                          {isTop && (
                            <div className="w-full h-full flex items-center justify-center p-2.5 md:p-3 relative z-20">
                              <img 
                                src={tool.src} 
                                alt={tool.name} 
                                className="w-full h-full object-contain drop-shadow-md" 
                                style={{ filter: 'brightness(0) invert(1)' }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                   </motion.div>
                 </motion.div>
               </div>
             );
           })}
        </div>
      </motion.div>
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="flex flex-col">
    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Skills</h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-2">
      {portfolioData.resume.skillsList.map((skill, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="flex items-center space-x-3 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-foreground transition-colors duration-300" />
          <span className="text-sm md:text-base font-medium text-gray-600 group-hover:text-black transition-colors duration-300">{skill}</span>
        </motion.li>
      ))}
    </ul>
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="py-24 md:py-32 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-[#FCFBF8] rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#F0EEE5]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Top Left: Education */}
            <Timeline 
              title="Education" 
              items={portfolioData.resume.education} 
              isEducation={true} 
            />
            
            {/* Top Right: Organization */}
            <Timeline 
              title="Organization" 
              items={portfolioData.resume.organizations} 
              isEducation={false} 
            />
            
            {/* Bottom Left: Tools */}
            <ToolsSection />
            
            {/* Bottom Right: Skills */}
            <SkillsSection />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
