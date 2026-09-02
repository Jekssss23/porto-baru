import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/config';
import { Mail, MapPin, Phone } from 'lucide-react';

const IconMapper = ({ name, className }) => {
  switch (name) {
    case 'mail': return <Mail className={className} strokeWidth={1.5} />;
    case 'map-pin': return <MapPin className={className} strokeWidth={1.5} />;
    case 'phone': return <Phone className={className} strokeWidth={1.5} />;
    case 'instagram': 
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'linkedin': 
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case 'github': 
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    default: return null;
  }
};

const About = () => {
  const [isTvOn, setIsTvOn] = useState(true);

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col pr-0 lg:pr-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {portfolioData.about.greeting}
            </h2>
            
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed mb-12 max-w-xl">
              {portfolioData.about.description}
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-8">
              {portfolioData.about.connectTitle}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {portfolioData.about.contacts.map((contact, index) => (
                <motion.a 
                  key={contact.id} 
                  href={contact.link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center space-x-3 text-gray-500 hover:text-black transition-colors group"
                >
                   <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                     <IconMapper name={contact.icon} className="w-5 h-5 text-gray-700" />
                   </div>
                   <span className="text-sm font-medium tracking-wide">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Photo TV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center justify-center w-full h-[400px] md:h-[500px] mt-10 lg:mt-0"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="relative w-72 h-64 md:w-80 md:h-72 cursor-pointer"
              animate={{ 
                y: [0, -15, 0],
                rotateX: [15, 12, 15],
                rotateY: [-25, -20, -25],
                rotateZ: [5, 4, 5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* 3D Layers for thickness (bevel) */}
              {[...Array(25)].map((_, i) => {
                const isFront = i === 24;
                const isBack = i === 0;
                return (
                  <div 
                    key={i} 
                    className={`absolute inset-0 rounded-[2.5rem] ${isFront ? 'bg-white shadow-xl border border-gray-100' : 'bg-[#DCD8C8]'}`}
                    style={{ 
                      transform: `translateZ(${i * 2}px)`,
                      boxShadow: isBack ? "-20px 30px 50px rgba(0,0,0,0.15)" : "none"
                    }} 
                  >
                    {isFront && (
                      <div 
                        className="w-full h-full p-5 flex flex-row items-center gap-4 absolute inset-0"
                        style={{ transform: "translateZ(1px)" }}
                      >
                        
                        {/* Screen */}
                        <div className={`w-[75%] h-full rounded-2xl overflow-hidden shadow-[inset_0_4px_15px_rgba(0,0,0,0.5)] relative transition-colors duration-700 ${isTvOn ? 'bg-[#E53E3E]' : 'bg-[#111111]'}`}>
                          <img 
                            src="/assets/profile.jpg" 
                            alt="Profile" 
                            className={`w-full h-full object-cover scale-105 transition-all duration-700 ${isTvOn ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                          />
                          
                          {/* TV Scanline / Screen Glare Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                          {!isTvOn && <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>}
                        </div>

                        {/* Buttons Area */}
                        <div className="w-[25%] h-full flex flex-col items-center justify-center gap-6">
                          {/* Vertical Slot */}
                          <div className="w-1.5 h-16 bg-[#EAE7DF] rounded-full shadow-[inset_0_3px_6px_rgba(0,0,0,0.15)]"></div>
                          {/* Orange Power Button */}
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsTvOn(!isTvOn);
                            }}
                            className={`w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-90 active:shadow-inner ${isTvOn ? 'bg-[#FF6B00] shadow-[0_3px_8px_rgba(255,107,0,0.5)]' : 'bg-red-800 shadow-md'}`}
                            aria-label="Toggle TV Power"
                          >
                             <div className={`w-2 h-2 rounded-full blur-[1px] transition-colors ${isTvOn ? 'bg-white/70' : 'bg-black/20'}`}></div>
                          </button>
                        </div>
                        
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
