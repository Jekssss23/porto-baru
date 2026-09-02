import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/config';
import { PenTool } from 'lucide-react';

const floatingLogos = [
  { 
    id: 1, 
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg", 
    alt: "JavaScript", 
    top: "22%", left: "4%", size: "w-10 h-10 md:w-20 md:h-20", delay: 2.5, rotation: 15,
    topColor: "#FACC15", sideColor: "#CA8A04", iconFilter: "brightness(0) opacity(0.8)"
  },
  { 
    id: 2, 
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", 
    alt: "React", 
    top: "22%", right: "4%", size: "w-12 h-12 md:w-24 md:h-24", delay: 3.0, rotation: -20,
    topColor: "#3B82F6", sideColor: "#2563EB", iconFilter: "brightness(0) invert(1) opacity(0.9)"
  },
  { 
    id: 3, 
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", 
    alt: "Figma", 
    top: "48%", left: "2%", size: "w-8 h-8 md:w-16 md:h-16", delay: 3.2, rotation: -30,
    topColor: "#A855F7", sideColor: "#9333EA", iconFilter: "brightness(0) invert(1) opacity(0.9)"
  },
  { 
    id: 4, 
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", 
    alt: "GitHub", 
    top: "48%", right: "2%", size: "w-8 h-8 md:w-16 md:h-16", delay: 3.8, rotation: 35,
    topColor: "#171515", sideColor: "#000000", iconFilter: "brightness(0) invert(1) opacity(0.9)"
  },
  { 
    id: 5, 
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg", 
    alt: "HTML5", 
    bottom: "8%", left: "5%", size: "w-10 h-10 md:w-20 md:h-20", delay: 3.5, rotation: -15,
    topColor: "#EF4444", sideColor: "#DC2626", iconFilter: "brightness(0) invert(1) opacity(0.9)"
  },
  { 
    id: 6, 
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", 
    alt: "Vue", 
    bottom: "8%", right: "5%", size: "w-8 h-8 md:w-16 md:h-16", delay: 4.0, rotation: 25,
    topColor: "#10B981", sideColor: "#059669", iconFilter: "brightness(0) invert(1) opacity(0.9)"
  },
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20"
    >
      {/* Floating 3D CSS Colorful Keycaps */}
      {floatingLogos.map((logo) => (
        <motion.div
          key={logo.id}
          initial={{ opacity: 0, scale: 0, rotateX: 60, rotateY: 30 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
            rotateX: [40, 50, 40],
            rotateY: [-20, -10, -20],
            rotateZ: [logo.rotation, logo.rotation - 10, logo.rotation]
          }}
          transition={{ 
            opacity: { duration: 1, delay: logo.delay },
            scale: { duration: 1, delay: logo.delay, type: "spring" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
            rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: logo.delay }
          }}
          className={`absolute ${logo.size} block z-0 pointer-events-none`}
          style={{ 
            top: logo.top, left: logo.left, right: logo.right, bottom: logo.bottom,
            transformStyle: "preserve-3d", perspective: "1000px" 
          }}
        >
          <div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
            {[...Array(25)].map((_, i) => {
              const isTop = i === 24;
              const isBottom = i === 0;
              const scale = 1 - ((i / 24) * 0.15); // Slanted SA profile
              return (
                <div 
                  key={i}
                  className="w-full h-full absolute inset-0 rounded-xl md:rounded-2xl"
                  style={{
                    backgroundColor: isTop ? logo.topColor : logo.sideColor,
                    transform: `translateZ(${i * 2}px) scale(${scale})`,
                    boxShadow: isBottom ? "0px 20px 30px rgba(0,0,0,0.15)" : "none",
                  }}
                >
                  {isTop && (
                    <div className="w-full h-full flex items-center justify-center p-3 md:p-4">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="w-full h-full object-contain"
                        style={{ filter: logo.iconFilter }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}

      <motion.div 
        style={{ y, opacity }}
        className="w-full flex flex-col items-center text-center z-10"
      >
        <div className="overflow-visible mb-6 md:mb-10 w-full px-4 flex justify-center relative mt-10">
          
          <motion.div
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center relative"
          >
            {/* '2026' floating above 'to' */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 2.8 }}
              className="absolute -top-12 md:-top-20 right-[42%] text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground/80 z-20"
            >
              {portfolioData.hero.year}
            </motion.div>

            {/* 'Porto' in Sans-serif with staggered letters */}
            <h1 className="text-[18vw] md:text-[12vw] lg:text-[12rem] font-bold tracking-tighter text-foreground leading-none z-10 flex">
              {"Porto".split('').map((char, index) => (
                <motion.span
                  key={`porto-${index}`}
                  initial={{ opacity: 0, scale: 0, rotate: -30, y: 50 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + (index * 0.15), // Starts at 1.2s
                    type: "spring", stiffness: 200, damping: 10
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            
            {/* 'folio' in Script with staggered letters */}
            <h1 className="text-[20vw] md:text-[14vw] lg:text-[14rem] text-foreground leading-none flex items-center -ml-[4vw] md:-ml-[3vw] lg:-ml-[2.5rem] mt-[6vw] md:mt-[4vw] lg:mt-[3rem] z-20" style={{ fontFamily: 'var(--font-script)' }}>
              {"folio".split('').map((char, index) => (
                <motion.span
                  key={`folio-${index}`}
                  initial={{ opacity: 0, scale: 0, rotate: 30, y: -50 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2.0 + (index * 0.15), // Starts at 2.0s after Porto
                    type: "spring", stiffness: 200, damping: 10
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.9, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-gray-500 max-w-2xl mb-14 font-light tracking-wide px-4"
        >
          {portfolioData.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#works"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-medium text-white bg-foreground rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-black/20"
          >
            <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-widest">
              {portfolioData.hero.cta}
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gray-800 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
