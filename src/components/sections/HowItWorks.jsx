import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Radio, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { 
      n: '01', 
      title: 'Take the Test', 
      desc: 'Our proprietary algorithm analyzes your cosmic signature through 5 deep-dive questions to reveal your celestial archetype.',
      icon: <Compass className="text-purple-400" size={24} />
    },
    { 
      n: '02', 
      title: 'Discover Your Orbit', 
      desc: 'Once identified, we map your resonance profile. You’ll see who you naturally gravitate towards and who is in your orbit.',
      icon: <Radio className="text-fuchsia-400" size={24} />
    },
    { 
      n: '03', 
      title: 'Find Your Frequency', 
      desc: 'Skip the small talk. Connect with individuals who share your alignment and start a conversation that actually matters.',
      icon: <Users className="text-indigo-400" size={24} />
    },
  ];

  return (
    <section id="how" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/[0.01] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-500/60 mb-4 block">The Methodology</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              How The<br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Orbit Works.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/30 max-w-sm text-lg font-medium leading-relaxed"
          >
            We've replaced the swipe with a gravitational matching system based on psychological archetypes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-white/[0.03] group-hover:text-purple-500/10 transition-colors duration-500">{step.n}</span>
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/40 group-hover:text-white/60 text-base leading-relaxed transition-colors duration-300">
                  {step.desc}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
