import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Globe } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const Navbar = ({ setQuizOpen, mobileOpen, setMobileOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.05] py-4' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2 group cursor-none">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
            <Globe size={16} className="text-white" />
          </div>
          <div className="text-xl font-black uppercase tracking-tighter text-white">GALAXY<span className="text-purple-500">.</span></div>
        </div>

        <div className="hidden md:flex gap-12 items-center">
          <a href="#archetypes" className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">Archetypes</a>
          <a href="#how" className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">Methodology</a>
          <Magnetic strength={0.2}>
            <button 
              onClick={() => setQuizOpen(true)}
              className="bg-white text-black px-8 py-3.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] hover:bg-purple-500 hover:text-white transition-all duration-500 shadow-xl"
            >
              Get Started
            </button>
          </Magnetic>
        </div>

        <button className="md:hidden text-white/60 hover:text-white transition-colors" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#050508] flex flex-col items-center justify-center gap-12 p-12"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/30 blur-[120px] rounded-full" />
            </div>

            {[['Archetypes', '#archetypes'], ['Methodology', '#how']].map(([l, h]) => (
              <a 
                key={l} 
                href={h} 
                onClick={() => setMobileOpen(false)}
                className="text-5xl font-black uppercase tracking-tighter text-white hover:text-purple-400 transition-colors"
              >
                {l}
              </a>
            ))}
            
            <button 
              onClick={() => { setMobileOpen(false); setQuizOpen(true); }}
              className="w-full bg-white text-black py-6 rounded-full text-sm font-black uppercase tracking-widest mt-8"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
