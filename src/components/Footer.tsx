import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-dark pt-32 pb-12 overflow-hidden border-t border-dark/5 relative">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-dark flex items-center justify-center rounded-2xl shadow-xl shadow-primary/10">
                <Cpu className="text-white w-7 h-7" />
              </div>
              <span className="text-3xl font-display font-bold tracking-tighter">
                wwbderoa
              </span>
            </div>
            <p className="text-xl text-gray-500 max-w-sm mb-12 leading-relaxed font-medium">
              We architect the next generation of digital products. High-performance engineering for ambitious brands.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark transition-colors">
                <span>GITHUB</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark transition-colors">
                <span>LINKEDIN</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark transition-colors">
                <span>TWITTER</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-dark/20">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">Mission</a></li>
              <li><a href="#services" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="#portfolio" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">Selected Work</a></li>
              <li><a href="#team" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">Core Team</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-dark/20">Communication</h4>
            <ul className="space-y-6">
              <li>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Inquiries</p>
                <a href="mailto:hello@wwbderoa.com" className="text-lg font-bold hover:text-primary transition-colors flex items-center space-x-2">
                  <span>hello@wwbderoa.com</span>
                </a>
              </li>
              <li>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Location</p>
                <p className="text-sm font-medium text-gray-500">
                  India Base // Global Ops<br />
                  UTC+5:30
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-dark/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-8">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              © 2024 WWBDEROA STUDIO
            </p>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
              <span className="text-[8px] font-black text-gray-400 tracking-[0.3em] uppercase">System: Operational</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Built by Bose & Sudharsan</span>
            <div className="w-px h-4 bg-dark/10" />
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest italic">V1.0.42</span>
          </div>
        </div>
      </div>
      
      {/* Massive background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-black text-dark/[0.01] whitespace-nowrap pointer-events-none select-none tracking-tighter uppercase italic">
        wwbderoa
      </div>
    </footer>
  );
};

export default Footer;
