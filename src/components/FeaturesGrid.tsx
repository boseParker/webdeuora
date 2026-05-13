import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Smartphone, CreditCard, Zap, Share2, Headphones } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Live Chat",
    description: "Provide real-time support to your visitors instantly.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Responsive Design",
    description: "Your website looks perfect on every screen size.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Gateway",
    description: "Secure and seamless transactions for your customers.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Loading",
    description: "Extreme optimization for maximum performance.",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Integration",
    description: "Connect your brand across all social platforms.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Technical Support",
    description: "Dedicated assistance whenever you need help.",
    color: "bg-red-50 text-red-600"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4 text-gray-400">
            Website Features For
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter text-primary">
            Business Website & E-Commerce Website
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-light p-8 rounded-[2.5rem] border border-dark/5 flex flex-col items-center text-center group hover:shadow-2xl shadow-black/5 transition-all duration-500"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${feature.color}`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-3 tracking-tight">{feature.title}</h4>
              <p className="text-gray-500 text-sm font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
