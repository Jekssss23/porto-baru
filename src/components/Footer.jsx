import React from 'react';
import { portfolioData } from '../data/config';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 px-6 md:px-12 border-t border-stone-300/70 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm font-medium">
          © {portfolioData.footer.year} {portfolioData.footer.name}. All Rights Reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-6">
            {portfolioData.footer.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="text-xs text-gray-400 hover:text-foreground uppercase tracking-widest font-semibold transition-colors flex items-center gap-1.5"
            aria-label="Kembali ke atas"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
