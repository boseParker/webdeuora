import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

import { reviews } from '../data';

const Testimonials = () => {
  return (
    <section id="reviews" className="py-32 bg-light overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Voices</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
            REAL CLIENT <span className="text-gray-400 italic">REVIEWS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-black/[0.02] border border-dark/5 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex space-x-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="relative mb-10">
                <MessageSquare className="absolute -top-4 -left-4 w-12 h-12 text-primary opacity-10" />
                <p className="text-gray-500 font-medium leading-relaxed italic relative z-10">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-dark/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 ring-2 ring-primary/20 group-hover:ring-primary transition-all">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold leading-none mb-1">{review.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
