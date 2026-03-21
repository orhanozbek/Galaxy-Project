import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OrbitVisual = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div ref={containerRef} className="relative w-[400px] h-[400px] flex items-center justify-center">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-purple-600 blur-[100px] pointer-events-none" 
      />

      {/* Outer Orbit */}
      <motion.div 
        style={{ rotate }}
        className="absolute inset-0 rounded-full border border-purple-500/10 border-dashed"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400/40" />
      </motion.div>

      {/* Middle Orbit */}
      <motion.div 
        style={{ rotate: rotateReverse }}
        className="absolute inset-[60px] rounded-full border border-fuchsia-500/10"
      >
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(232,121,249,0.5)]" />
      </motion.div>

      {/* Inner Orbit */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[120px] rounded-full border border-white/5"
      >
        <div className="absolute bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
      </motion.div>

      {/* Core */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[140px] h-[140px] rounded-full flex items-center justify-center overflow-hidden group"
      >
        {/* Core Glass Effect */}
        <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-2xl border border-white/10 rounded-full group-hover:border-purple-500/40 transition-colors duration-500" />
        
        {/* Core Content */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          >
            🌌
          </motion.div>
          <div className="mt-2 text-[8px] font-black uppercase tracking-[0.4em] text-purple-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Center
          </div>
        </div>

        {/* Inner Core Glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent opacity-50" />
      </motion.div>

      {/* Floating Particles around core */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute w-[180px] h-[180px]"
        >
          <div 
            className="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-white/20"
            style={{ transform: `rotate(${i * 120}deg)` }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default OrbitVisual;
