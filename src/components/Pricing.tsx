import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Rocket, Zap, Crown, Settings } from 'lucide-react';

import { plans } from '../data';

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Rocket': return <Rocket className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Crown': return <Crown className={className} />;
    case 'Settings': return <Settings className={className} />;
    default: return <Info className={className} />;
  }
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Website Service Plans</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
            CHOOSE YOUR <span className="text-primary italic">PLAN</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Transparent pricing for businesses of all sizes. No hidden costs. 100% money-back guarantee on all plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[2.5rem] border ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10 relative z-10' : 'border-dark/5'} ${plan.color} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl shadow-primary/30">
                  Popular
                </div>
              )}
              
              <div className="mb-8 text-center">
                <div className="flex justify-center mb-6">
                  <IconComponent name={plan.icon} className={`w-8 h-8 ${plan.popular ? 'text-primary' : ''}`} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-1 tracking-tight">{plan.name}</h3>
                <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-4">{plan.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                  )}
                  <span className="text-4xl font-black">{plan.price}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-green-600 w-3 h-3" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] text-center transition-all ${
                  plan.popular 
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-dark' 
                    : 'bg-dark text-white hover:bg-primary'
                }`}
              >
                Inquiry Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
