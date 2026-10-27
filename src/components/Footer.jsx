import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/config';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-slate-900 text-slate-400 py-12 px-5 sm:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          
          {/* Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs tracking-wider">
                ARZ
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {portfolioData.footer.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {portfolioData.footer.tagline}
            </p>
          </div>

          {/* Quick Anchor Navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
            {portfolioData.footer.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors shrink-0"
            aria-label="Kembali ke bagian atas halaman"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {portfolioData.footer.year} {portfolioData.footer.name}. Seluruh Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ahmadridhoz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-ridho-zakiy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://instagram.com/rdhjack06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="mailto:ridhojack77@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Kirim Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://wa.me/6283846305996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
