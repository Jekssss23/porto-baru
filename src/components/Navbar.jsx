import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/config';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'works', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Proyek', href: '#works', id: 'works' },
    { name: 'Keahlian', href: '#skills', id: 'skills' },
    { name: 'Pengalaman', href: '#experience', id: 'experience' },
    { name: 'Pendidikan', href: '#education', id: 'education' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex justify-between items-center">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            aria-label="Ahmad Ridho Zakiy Homepage"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white font-bold text-xs tracking-wider transition-transform duration-300 group-hover:scale-105 shadow-xs">
              ARZ
            </span>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Ahmad Ridho Zakiy
              </span>
              <span className="text-[11px] font-semibold text-blue-600 tracking-wide uppercase">
                {portfolioData.personal.degree}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/80 border border-slate-200/80 p-1.5 rounded-full shadow-xs backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:border-slate-900 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span>Hubungi</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs">
                      ARZ
                    </span>
                    <span className="text-sm font-bold text-slate-900">Navigasi</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                    aria-label="Tutup menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-6 flex flex-col space-y-1.5">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className={`px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-600 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs"
                >
                  <Mail size={16} />
                  <span>Kirim Pesan / Kontak</span>
                </a>
                <div className="flex items-center justify-center gap-2 text-xs text-emerald-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{portfolioData.personal.status}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
