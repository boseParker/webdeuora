import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';

import { siteConfig } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="section-container">
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? 'premium-blur shadow-2xl shadow-black/5 px-8' : 'bg-transparent'
        }`}>
          <a href="#" className="flex items-center space-x-3 group">
            <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-500 ${
              isScrolled ? 'bg-dark scale-90' : 'bg-dark'
            }`}>
              <Cpu className="text-white w-6 h-6 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-dark transition-all active:scale-95 shadow-lg shadow-primary/20"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-dark/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 premium-blur shadow-2xl rounded-[2rem] flex flex-col space-y-6 md:hidden overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                className="text-2xl font-display font-bold text-dark border-b border-dark/5 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              href="#contact"
              className="bg-primary text-white p-6 rounded-2xl text-center font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
