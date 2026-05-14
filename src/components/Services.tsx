import React from 'react';
import { motion } from 'motion/react';
import { Globe, Cpu, Smartphone, Shield, Layers, Zap, Database, Search } from 'lucide-react';

import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white text-dark overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Capabilities</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-8">
              ENGINEERED FOR <br />
              <span className="text-gray-400 italic">EXCELLENCE</span>
            </h2>
          </div>
          <div className="pb-4">
            <p className="text-xl text-gray-500 max-w-md leading-relaxed border-l border-dark/10 pl-8 font-medium">
              We architect digital solutions that don't just work today, but evolve with your growth tomorrow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-light rounded-[3rem] overflow-hidden border border-dark/5 hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-500" />
                <div className="absolute top-8 right-8 text-[10px] font-black font-mono text-white tracking-[0.2em] uppercase bg-dark/40 px-6 py-2 rounded-full backdrop-blur-xl border border-white/10">
                  {service.category} // 0{index + 1}
                </div>
              </div>

              <div className="p-12 flex-grow flex flex-col">
                <h3 className="text-3xl font-display font-bold mb-6 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium group-hover:text-dark transition-colors">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-8 border-t border-dark/5 flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black tracking-widest text-dark/40 uppercase px-5 py-2 bg-dark/5 rounded-full border border-dark/10 group-hover:border-primary/20 group-hover:text-primary transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
