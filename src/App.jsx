import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Target, ShieldCheck, Orbit, Compass, UserCheck } from 'lucide-react';

// Custom Cursor Component
const CustomCursor = () => {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15; // Smooth trailing effect
      ringY += (mouseY - ringY) * 0.15;
      
      if(dot) dot.style.transform = "translate(\px, \px)";
      if(ring) ring.style.transform = "translate(\px, \px)";
      
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const addHover = () => document.body.classList.add('hovering');
    const removeHover = () => document.body.classList.remove('hovering');

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animate);

    // Add event listeners to all interactive elements
    const links = document.querySelectorAll('a, button, input, .interactive');
    links.forEach(link => {
      link.addEventListener('mouseenter', addHover);
      link.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', addHover);
        link.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" className="hidden md:block"></div>
      <div id="cursor-ring" className="hidden md:block"></div>
    </>
  );
};

const GalaxyLanding = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text Reveal Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };
  const wordVars = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
  };

  return (
    <div className="min-h-screen relative selection:bg-lime-400 selection:text-black font-sans">
      <CustomCursor />
      <div className="noise" />
      <div className="spotlight" />
      
      <motion.div style={{ y: y1 }} className="sphere sphere-1" />
      <motion.div style={{ y: y2 }} className="sphere sphere-2" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-3xl font-black italic tracking-tighter text-white">GALAXY.</div>
        <div className="hidden md:flex gap-10 items-center">
          <a href="#concept" className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors interactive">Manifesto</a>
          <a href="#features" className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors interactive">System</a>
          <button className="bg-lime-400 text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-colors interactive">
            Enter Orbit
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section style={{ opacity: opacityHero }} className="relative pt-32 pb-20 px-6 md:px-12 min-h-screen flex items-center z-20">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div className="lg:col-span-7" variants={containerVars} initial="hidden" animate="visible">
            <motion.div variants={wordVars} className="inline-flex items-center gap-2 px-4 py-2 border border-lime-400/20 rounded-full text-[10px] font-black tracking-[0.3em] text-lime-400 mb-8 uppercase backdrop-blur-md">
              <Sparkles size={12} /> The Anti-Swipe Application
            </motion.div>
            
            <h1 className="text-6xl md:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              <motion.span variants={wordVars} className="block">Connect</motion.span>
              <motion.span variants={wordVars} className="block">Through</motion.span>
              <motion.span variants={wordVars} className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 italic">Resonance.</motion.span>
            </h1>
            
            <motion.p variants={wordVars} className="max-w-lg text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
              Looks fade, frequencies endure. Galaxy maps your digital soul and aligns you with people in the exact same orbit.
            </motion.p>
            
            <motion.div variants={wordVars} className="flex flex-col sm:flex-row gap-6">
              <button className="bg-lime-400 text-black px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3 interactive shadow-[0_0_40px_rgba(204,255,0,0.3)]">
                Calculate My Orbit <Orbit size={18} />
              </button>
              <button className="px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest border border-white/20 hover:bg-white/5 transition-colors interactive">
                Read the Manifesto
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side Visual */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-[400px] h-[400px]"
            >
              <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-12 border-[0.5px] border-lime-400/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-24 border-[0.5px] border-white/10 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-0 bg-lime-400/5 blur-[80px] rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-32 h-32 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-lime-400">
                <Orbit size={48} className="animate-[spin_10s_linear_infinite]" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy / Features Grid */}
      <section id="features" className="px-6 md:px-12 pb-40 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              The Physics <br/> <span className="text-gray-500 italic">Of Connection.</span>
            </h2>
            <div className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 max-w-xs text-right">
              Powered by our proprietary Archetype Engine.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6" onMouseLeave={() => setHoveredCard(null)}>
            {[
              { icon: <Compass size={32} />, title: "Trajectory Matching", desc: "We analyze your digital habits to find users moving in the same direction." },
              { icon: <ShieldCheck size={32} />, title: "Absolute Matter", desc: "No ghosts, no bots. Verified frequencies only. Complete privacy until mutual resonance." },
              { icon: <UserCheck size={32} />, title: "Archetype Sync", desc: "Are you a Supernova or a Nebula? Discover your true form and who complements it." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={glass-panel p-10 interactive relative overflow-hidden transition-all duration-500 \}
              >
                <div className="text-lime-400 mb-12 opacity-80">{card.icon}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{card.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Call to Action */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-black/40 backdrop-blur-lg relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-lime-400 mb-8 flex justify-center">
            <Zap size={48} className="animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
            Secure Your <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Coordinates.</span>
          </h2>
          
          <form className="relative flex flex-col md:flex-row w-full max-w-2xl mx-auto interactive group" onSubmit={(e) => e.preventDefault()}>
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex w-full bg-black rounded-full border border-white/10 p-2">
              <input 
                type="email" 
                placeholder="Enter your email to join the waitlist..." 
                className="flex-1 bg-transparent px-8 py-5 outline-none text-white placeholder-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm"
                required
              />
              <button type="submit" className="bg-white text-black px-8 md:px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-lime-400 transition-colors">
                Initiate
              </button>
            </div>
          </form>
          <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">Beta access is strictly limited to early adopters.</p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center z-30 relative bg-black">
        <div className="text-xl font-black italic tracking-tighter text-white/30 mb-6 md:mb-0">GALAXY.</div>
        <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">
          <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
          <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
          <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
        </div>
      </footer>
    </div>
  );
};

export default GalaxyLanding;
