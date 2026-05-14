import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react';

import { team } from '../data';

const Team = () => {
  return (
    <section id="team" className="py-32 bg-white text-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark/[0.01] -skew-x-12 translate-x-20" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Our Core</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9]">
              THE MEN IN <br />
              <span className="text-primary italic">THE MACHINE</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group bg-light rounded-[3rem] p-10 md:p-16 border border-dark/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-dark/5 rounded-[3rem] p-4 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold tracking-[0.3em] text-primary mb-3">
                    {member.role}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 font-medium">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {member.skills.map(skill => (
                      <span key={skill} className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 bg-dark/5 rounded-full text-gray-400">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-6">
                    <a href="#" className="text-dark hover:text-primary transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-dark hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-dark hover:text-primary transition-colors"><Github size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
