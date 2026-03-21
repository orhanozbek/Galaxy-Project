import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onDone }) => {
  useEffect(() => { const t = setTimeout(onDone, 2200); return () => clearTimeout(t); }, [onDone]);
  return (
    <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050508]"
      exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
      <div className="text-center select-none">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="text-6xl mb-6">🌌</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl font-black italic tracking-tighter mb-8 text-white">
          GALAXY<motion.span initial={{ color: '#fff' }} animate={{ color: '#A855F7' }}
            transition={{ delay: 0.9, duration: 0.5 }}>.</motion.span>
        </motion.h1>
        <div className="w-36 h-0.5 bg-white/10 mx-auto rounded-full overflow-hidden">
          <motion.div className="h-full bg-purple-500 rounded-full" style={{ originX: 0 }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.3 }} />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
