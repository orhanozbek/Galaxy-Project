import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Target, ShieldCheck, UserCheck, Star, Orbit, Eclipse, Atom, X, CheckCircle2 } from 'lucide-react';

const CharacterTest = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    { q: "Uzak bir galakside olsaydın, ilk tercihin ne olurdu?", options: ["Bir yıldızın doğuşunu izlemek", "Kara delikleri keşfetmek", "Kendi sistemini kurmak", "Işık hızında süzülmek"] },
    { q: "Enerjin en çok ne zaman parlar?", options: ["Kaosun ortasında", "Derin sessizlikte", "Yeni bir şey yaratırken", "Başkalarına yol gösterirken"] },
    { q: "Ruhun hangi kozmik elementi temsil ediyor?", options: ["Sıcak Plazma", "Karanlık Madde", "Yıldız Tozu", "Kozmik Dalga"] }
  ];

  const handleAnswer = (idx) => {
    const nextAnswers = [...answers, idx];
    if (step < questions.length - 1) {
      setAnswers(nextAnswers);
      setStep(step + 1);
    } else {
      const sum = nextAnswers.reduce((a, b) => a + b, 0);
      const archetypes = ["Supernova", "Nebula", "Quasar", "Pulsar"];
      setResult(archetypes[sum % 4]);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/80"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        className="glass w-full max-w-2xl p-12 relative overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors">
          <X size={24} />
        </button>

        {!result ? (
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-400">Step {step + 1} of 3</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">
                {questions[step].q}
              </h3>
            </div>
            <div className="grid gap-4">
              {questions[step].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAnswer(i)}
                  className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm font-medium tracking-wide group"
                >
                  <span className="mr-4 opacity-30 group-hover:text-purple-400">0{i+1}</span> {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-10 py-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block p-6 rounded-full bg-purple-600/20 text-purple-400">
              <Star size={64} className="animate-pulse" />
            </motion.div>
            <div className="space-y-4">
              <h3 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Your Orbit is {result}</h3>
              <p className="text-gray-400 text-lg">Resonance confirmed. You are perfectly aligned with the {result} archetype.</p>
            </div>
            <button onClick={onClose} className="bg-white text-black px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all shadow-xl">
              Complete Initiation
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const GalaxyLanding = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1500);
  };

  const archetypes = [
    { id: 'supernova', title: 'Supernova', icon: <Star />, color: 'from-violet-500 to-fuchsia-600', desc: 'Explosive energy, natural leader, life of every orbit.' },
    { id: 'nebula', title: 'Nebula', icon: <Orbit />, color: 'from-indigo-500 to-purple-600', desc: 'Mysterious, creative, birthing new ideas and connections.' },
    { id: 'quasar', title: 'Quasar', icon: <Eclipse />, color: 'from-blue-600 to-indigo-700', desc: 'Intense focus, intellectual, emitting powerful wisdom.' },
    { id: 'pulsar', title: 'Pulsar', icon: <Atom />, color: 'from-purple-600 to-violet-800', desc: 'Reliable, rhythmic, the steady heart of the galaxy.' }
  ];

  return (
    <div className="min-h-screen bg-[#050508] relative overflow-hidden selection:bg-purple-500 selection:text-white text-white">
      <div className="spotlight" />
      <div className="noise" />
      
      <AnimatePresence>
        {isQuizOpen && <CharacterTest isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />}
      </AnimatePresence>

      <div className="fixed top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-purple-600/10 blur-[180px] rounded-full animate-float pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-5%] w-[60vw] h-[60vw] bg-indigo-600/10 blur-[180px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '-7s' }} />

      <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black italic tracking-tighter">GALAXY.</div>
        <div className="hidden md:flex gap-12 items-center">
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-purple-400 transition-colors">Mission</a>
          <button 
            onClick={() => setIsQuizOpen(true)}
            className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all duration-500"
          >
            Enter Orbit
          </button>
        </div>
      </nav>

      <section className="relative pt-48 md:pt-64 pb-32 px-6 md:px-12 z-10">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-purple-500/20 rounded-full text-[9px] font-black tracking-[0.5em] text-purple-400 mb-12 uppercase bg-purple-500/5 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <Sparkles size={12} /> The Best You, Beyond Frequency
            </div>
            
            <h1 className="text-6xl md:text-[11rem] font-black uppercase tracking-tighter leading-[0.75] mb-16">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500 italic">Frequency.</span>
            </h1>
            
            <p className="max-w-2xl text-gray-400 text-lg md:text-2xl font-medium leading-relaxed mb-16 mx-auto md:mx-0">
              Stop swiping. Start resonating. Galaxy matches souls through celestial archetypes and cosmic alignment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start">
              <button 
                onClick={() => setIsQuizOpen(true)}
                className="bg-purple-600 text-white px-14 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-purple-500 hover:scale-105 transition-all shadow-[0_0_70px_rgba(168,85,247,0.3)]"
              >
                Initiate Orbit <Zap size={18} />
              </button>
              <button className="px-14 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.3em] border border-white/10 hover:bg-white/5 transition-colors">
                The Protocol
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 border-l-4 border-purple-600 pl-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Cosmic <br /> <span className="italic opacity-30 text-purple-400">Archetypes.</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {archetypes.map((arch) => (
              <motion.div key={arch.id} whileHover={{ y: -20 }} className="glass group relative overflow-hidden p-10 min-h-[480px] flex flex-col justify-end">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${arch.color} blur-[70px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000`} />
                <div className="mb-auto text-purple-400 opacity-40 group-hover:opacity-100 transition-all transform group-hover:scale-125 group-hover:rotate-12 duration-700">
                  {React.cloneElement(arch.icon, { size: 56 })}
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">{arch.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-purple-100 transition-colors duration-500">{arch.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-64 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter mb-20 leading-none">Claim Your <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-indigo-900">Coordinate.</span></h2>
          
          <div className="max-w-2xl mx-auto p-2 rounded-full bg-purple-900/5 border border-purple-500/20 backdrop-blur-3xl focus-within:border-purple-500/50 transition-all duration-700 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
            {!isSubmitted ? (
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleWaitlistSubmit}>
                <input 
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email frequency..." 
                  className="flex-1 bg-transparent px-10 py-6 outline-none text-white text-[11px] font-black uppercase tracking-widest placeholder:text-gray-700"
                />
                <button 
                  disabled={isSubmitting}
                  className="bg-purple-600 text-white px-14 py-6 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-purple-500 transition-all disabled:opacity-50 shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
                >
                  {isSubmitting ? "Syncing..." : "Initiate"}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-4 py-6 text-purple-400 font-black uppercase tracking-[0.3em] text-[12px]">
                <CheckCircle2 size={24} /> Welcome to the Galaxy
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-24 flex justify-between items-center border-t border-white/5 bg-[#050508] relative z-10">
        <div className="text-2xl font-black italic tracking-tighter">GALAXY.</div>
        <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">
          {['Privacy', 'X (Twitter)'].map(link => <a key={link} href="#" className="hover:text-purple-400 transition-colors">{link}</a>)}
        </div>
      </footer>
    </div>
  );
};

export default GalaxyLanding;
