import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

import { projects } from '../data';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-px bg-dark" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">Our Work</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">
              SELECTED <br />
              <span className="text-gray-400 italic">PROJECTS</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">02</span>
            <div className="w-12 h-px bg-dark/10" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Count</span>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 group-hover:shadow-black/20 transition-all duration-700 ring-1 ring-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white text-dark w-16 h-16 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 p-4">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">Client: {project.client}</span>
                  <div className="w-4 h-[1px] bg-dark/20" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">{project.category}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 bg-dark text-white rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-dark pb-2 hover:border-primary transition-colors"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
