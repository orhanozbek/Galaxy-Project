import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="overflow-hidden border-y border-white/[0.04] py-5 relative z-10">
      <motion.div className="flex gap-14 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
        {[...Array(2)].flatMap(() =>
          ['Find Your Frequency', 'Connect Through Resonance', 'Beyond The Swipe', 'Celestial Archetypes', 'Discover Your Orbit', 'Not Just Ordinary'].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-14 text-[9px] font-black uppercase tracking-[0.45em] text-white/15">
              {t} <span className="text-purple-500/50 text-[10px]">✦</span>
            </span>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Marquee;
