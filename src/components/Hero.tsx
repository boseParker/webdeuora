import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Terminal, Rocket, Github, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-light">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-dark text-white rounded-full mb-8">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Now Available for 2024 Projects
                </span>
              </div>
              
              <h1 className="text-7xl md:text-[120px] font-display font-bold leading-[0.85] tracking-[-0.04em] mb-10">
                CRAFTING <br />
                <span className="text-primary italic">DIGITAL</span> FAST <br />
                EXPERIENCES
              </h1>
              
                <div className="flex flex-col md:flex-row md:items-center gap-12 mb-12">
                <p className="text-lg text-gray-500 max-w-sm leading-relaxed font-medium">
                  At <span className="text-dark font-bold">Webzo</span>, we specialize in high-performance web systems and bespoke software architectures. Led by Bose & Sudharsan.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-dark">Available for Q2 2024</span>
                  </div>
                  <div className="text-[10px] font-mono text-gray-400">
                    STARTING AT ₹5,999/-
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <a
                  href="#portfolio"
                  className="group bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-dark transition-all hover:-translate-y-1 shadow-2xl shadow-primary/20"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-primary/20 hover:border-primary transition-all flex items-center text-dark"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Coding" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay labels */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl border border-black/5 rotate-[-5deg]">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Architecture</p>
                <p className="text-sm font-bold">Cloud-Native / Serverless</p>
              </div>

              <div className="absolute bottom-10 -right-10 bg-dark text-white p-6 rounded-xl shadow-xl rotate-[3deg] border border-white/10 backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1 text-center whitespace-nowrap">Core Performance</p>
                <p className="text-sm font-bold text-center">99+ PageSpeed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
