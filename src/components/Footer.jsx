import React from 'react';
import { portfolioData } from '../data/config';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm font-medium">
          © {portfolioData.footer.year} {portfolioData.footer.name}. All Rights Reserved.
        </div>
        
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
      </div>
    </footer>
  );
};

export default Footer;
