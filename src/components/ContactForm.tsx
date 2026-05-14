import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Mail, MapPin, ArrowRight } from 'lucide-react';

import { siteConfig } from '../data';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.enum(["web", "software", "ecommerce", "marketing"]),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsDone(true);
    reset();
    setTimeout(() => setIsDone(false), 8000);
  };

  return (
    <section id="contact" className="py-32 bg-light relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-display font-black text-dark/[0.02] select-none pointer-events-none whitespace-nowrap">
        GET IN TOUCH
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Contact</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-10">
                READY TO <br />
                <span className="text-gray-400">EVOLVE?</span>
              </h2>
              
              <p className="text-xl text-gray-500 mb-16 max-w-sm leading-relaxed">
                Whether you have a fully-formed idea or just a spark, we're here to help you build it.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-dark rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Direct Communication</p>
                    <p className="text-xl font-bold">{siteConfig.email}</p>
                    <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-dark rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Our Base</p>
                    <p className="text-xl font-bold">{siteConfig.location.split(' // ')[0]}</p>
                    <p className="text-sm text-gray-400 mt-1">Available for global logistics</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-black/5 ring-1 ring-black/[0.02]"
            >
              <AnimatePresence mode="wait">
                {isDone ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="text-green-600 w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-display font-bold mb-4 tracking-tight">MISSION RECEIVED</h3>
                    <p className="text-gray-500 text-lg max-w-xs">Our team has been briefed. We will reach out shortly.</p>
                    <button 
                      onClick={() => setIsDone(false)}
                      className="mt-12 text-dark font-black border-b-2 border-dark pb-1 text-sm uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      SEND ANOTHER BRIEF
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Identity</label>
                        <input
                          {...register("name")}
                          placeholder="Your Name"
                          className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-transparent focus:border-dark transition-all outline-none font-medium placeholder:text-gray-300"
                        />
                        {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Secure Email</label>
                        <input
                          {...register("email")}
                          placeholder="hello@example.com"
                          className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-transparent focus:border-dark transition-all outline-none font-medium placeholder:text-gray-300"
                        />
                        {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                        <input
                          {...register("phone")}
                          placeholder="+91 00000 00000"
                          className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-transparent focus:border-dark transition-all outline-none font-medium placeholder:text-gray-300"
                        />
                        {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Project Spectrum</label>
                        <select
                          {...register("service")}
                          className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-transparent focus:border-dark transition-all outline-none font-medium appearance-none"
                        >
                          <option value="web">Business Website</option>
                          <option value="ecommerce">E-Commerce Website</option>
                          <option value="software">Custom Software</option>
                          <option value="marketing">Digital Marketing</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Project Brief</label>
                      <textarea
                        {...register("message")}
                        placeholder="Tell us about the challenges you're facing..."
                        rows={5}
                        className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-transparent focus:border-dark transition-all outline-none resize-none font-medium placeholder:text-gray-300"
                      />
                      {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-xl hover:bg-dark transition-all flex items-center justify-center space-x-4 shadow-xl shadow-primary/20 disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Transmit Brief</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
