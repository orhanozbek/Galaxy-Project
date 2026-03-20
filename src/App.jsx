import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Target, Moon, Eye, Share2, ShieldCheck } from 'lucide-react';

const GalaxyLanding = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-lime-400 selection:text-black">
      {/* Background Layer */}
      <div className="spotlight" />
      <motion.div style={{ y: y1 }} className="sphere sphere-1" />
      <motion.div style={{ y: y2 }} className="sphere sphere-2" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] px-10 py-8 flex justify-between items-center">
        <div className="text-3xl font-black italic tracking-tighter">G.</div>
        <div className="flex gap-10 items-center">
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition">Concept</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition">About</a>
          <button className="neon-btn px-8 py-3 text-[10px] flex items-center gap-3">
            Enter Orbit <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative pt-40 pb-20 px-10 min-h-screen flex items-center">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center z-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-lime-400/30 rounded-full text-[9px] font-bold tracking-[0.3em] text-lime-400 mb-10 uppercase">
              <Sparkles size={10} /> Experience The Better You
            </div>
            <h1 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-10">
              Not Just <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500 italic">Ordinary.</span>
            </h1>
            <p className="max-w-md text-gray-500 text-xl font-medium leading-relaxed mb-12">
              Forget standard profiles. We use celestial archetypes to map your soul's resonance.
            </p>
            <div className="flex gap-6">
              <button className="neon-btn px-12 py-6 text-sm flex items-center gap-4 group">
                Take the Test <Zap size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Abstract Star System Visual */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-[500px] h-[500px] mx-auto">
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-10 border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-20 border border-lime-400/20 rounded-full" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-lime-400/10 blur-[100px] rounded-full"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">🪐</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Deck - Horizontal Cards */}
      <section className="section-overlap px-10 pb-40">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Share2 size={24} />, 
                title: "Resonance", 
                tag: "Algorithm",
                desc: "We don't match faces, we match frequencies. Our 'Orbit' system calculates compatibility based on 12 core traits." 
              },
              { 
                icon: <ShieldCheck size={24} />, 
                title: "Dark Matter", 
                tag: "Privacy",
                desc: "Incognito by default. Your profile only reveals its full brilliance to those you choose to enter orbit with." 
              },
              { 
                icon: <Target size={24} />, 
                title: "Pulse", 
                tag: "Discovery",
                desc: "Real-time interest clusters. Find people who are experiencing the same moment as you, right now." 
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-panel p-12 group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-lime-400/10 transition-colors" />
                <div className="mb-10 text-lime-400">{card.icon}</div>
                <div className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">{card.tag}</div>
                <h3 className="text-3xl font-black uppercase italic mb-6 tracking-tight">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">{card.desc}</p>
                <div className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Archetype Section */}
      <section className="py-40 px-10 bg-white/5 backdrop-blur-3xl border-y border-white/5 relative z-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-20">
            Find Your <span className="italic text-gray-500">Archetype.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {['Supernova', 'Nebula', 'Starboy', 'Eclipse'].map((type, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-gray-700 hover:text-lime-400 transition-colors cursor-pointer"
              >
                {type}.
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call - Immersive Form */}
      <section className="py-60 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 leading-none">
            Your Galaxy <br /> Awaits.
          </h2>
          <div className="flex flex-col md:flex-row gap-4 p-2 glass-panel rounded-full max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Email your frequency..." 
              className="flex-1 bg-transparent px-8 py-4 outline-none text-white placeholder-gray-700 font-bold uppercase tracking-widest text-xs"
            />
            <button className="neon-btn px-12 py-4 text-xs">Join Waitlist</button>
          </div>
        </div>
      </section>

      <footer className="px-10 py-20 flex flex-col md:flex-row justify-between items-center border-t border-white/5 opacity-30">
        <div className="text-xl font-black italic tracking-tighter mb-10 md:mb-0">GALAXY.</div>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
          <span>© 2026</span>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default GalaxyLanding;
