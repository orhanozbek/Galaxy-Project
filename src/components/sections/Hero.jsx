import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';
import OrbitVisual from '../visuals/OrbitVisual';
import Magnetic from '../ui/Magnetic';

const Hero = ({ setQuizOpen }) => {
  const ease = [0.16, 1, 0.3, 1];
  
  return (
    <section className="relative pt-36 md:pt-44 pb-24 px-6 md:px-12 z-10 min-h-screen flex items-center overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-[20%] right-[-5%] w-[40%] h-[60%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 16 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-[11px] font-medium tracking-wider mb-10"
          >
            <Sparkles size={12} className="text-purple-400" /> a fresh start on a new app
          </motion.div>

          <h1 className="font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white"
            style={{ fontSize: 'clamp(3rem, 7.5vw, 7rem)' }}>
            <div className="overflow-hidden py-1 w-fit">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease }}
              >
                Beyond
              </motion.span>
            </div>
            <div className="overflow-hidden py-1 w-fit">
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 italic pr-6"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease }}
              >
                Frequency.
              </motion.span>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease }}
            className="text-white/40 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-12"
          >
            Stop the infinite loop. Galaxy uses gravitational resonance to match you with souls that actually align with your orbit.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease }} 
            className="flex flex-wrap gap-6"
          >
            <Magnetic strength={0.2}>
              <button 
                onClick={() => setQuizOpen(true)}
                className="group bg-white text-black px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-purple-500 hover:text-white transition-all duration-500"
              >
                Start Your Journey <Zap size={14} className="group-hover:fill-current" />
              </button>
            </Magnetic>

            <Magnetic strength={0.15}>
              <a 
                href="#how"
                className="px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-white/10 hover:border-white/30 transition-all text-white/60 hover:text-white flex items-center gap-3"
              >
                The Algorithm <ArrowRight size={14} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right — orbit */}
        <motion.div 
          className="hidden lg:flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }} 
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Subtle background ring for the visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/[0.03] rounded-full pointer-events-none" />
          <OrbitVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.6em] text-white/20">Discovery</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500/40 via-purple-500/10 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
