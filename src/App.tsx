import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <Services />
        <Pricing />
        <Portfolio />
        <Team />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917039040997" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-dark px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-dark/5">
          Need Help? Speak to us here!
        </div>
      </a>
    </div>
  );
}
