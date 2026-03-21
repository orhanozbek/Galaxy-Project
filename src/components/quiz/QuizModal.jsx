import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { QUESTIONS, ARCHETYPES } from '../../constants';

const QuizModal = ({ onClose }) => {
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sel, setSel] = useState(null);
  const [result, setResult] = useState(null);

  const q = QUESTIONS[qi];
  const isLast = qi === QUESTIONS.length - 1;

  const next = () => {
    if (!sel) return;
    const na = { ...answers, [qi]: sel };
    if (isLast) {
      const counts = { supernova: 0, nebula: 0, quasar: 0, pulsar: 0 };
      Object.values(na).forEach(v => counts[v]++);
      const winner = Object.entries(counts).sort(([, a], [, b]) => b - a)[0][0];
      setResult(ARCHETYPES[winner]);
    } else {
      setAnswers(na); setQi(qi + 1); setSel(null);
    }
  };

  const reset = () => { setQi(0); setAnswers({}); setSel(null); setResult(null); };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
      style={{ background: 'rgba(5,5,8,0.92)', backdropFilter: 'blur(24px)' }}>

      <motion.div initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="quiz-panel w-full max-w-2xl relative overflow-hidden">

        {/* Close */}
        <button onClick={onClose}
          className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors z-10">
          <X size={20} />
        </button>

        {!result ? (
          <div className="p-10 md:p-12">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                {QUESTIONS.map((_, i) => (
                  <div key={i} className="h-1 rounded-full transition-all duration-400"
                    style={{
                      width: i === qi ? 28 : 10,
                      background: i < qi ? '#A855F7' : i === qi ? 'rgba(168,85,247,0.6)' : 'rgba(255,255,255,0.1)'
                    }} />
                ))}
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                {qi + 1} / {QUESTIONS.length}
              </span>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div key={qi}
                initial={{ x: '5%', opacity: 0 }} animate={{ x: '0%', opacity: 1 }}
                exit={{ x: '-5%', opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.9] }}>
                <p className="text-[9px] font-black uppercase tracking-[0.45em] text-purple-400/60 mb-3">
                  {q.context}
                </p>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-8 text-white">
                  {q.q}
                </h3>
                <div className="grid gap-3">
                  {q.options.map((opt, i) => (
                    <motion.button key={opt.value}
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => setSel(opt.value)}
                      className={`quiz-option text-left transition-all duration-250 ${sel === opt.value ? 'selected' : ''}`}>
                      <span className="quiz-num">0{i + 1}</span>
                      <span className="text-sm font-medium leading-snug">{opt.text}</span>
                      {sel === opt.value && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}
                          className="ml-auto shrink-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                          <Check size={11} strokeWidth={3} className="text-white" />
                        </motion.span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <div className="flex justify-end mt-8">
              <button onClick={next}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300
                  ${sel ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                       : 'bg-white/5 text-white/20 pointer-events-none'}`}>
                {isLast ? 'Reveal My Archetype' : 'Next'} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          // Result
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 md:p-12">
            <div className="absolute inset-0 rounded-[28px] opacity-10 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 0%, ${result.glow}, transparent 60%)` }} />

            <p className="text-[9px] font-black uppercase tracking-[0.45em] text-white/25 text-center mb-5">
              Your celestial archetype
            </p>

            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-7xl text-center mb-4 select-none">
              {result.emoji}
            </motion.div>

            <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center mb-2"
              style={{ background: `linear-gradient(135deg, #A855F7, #6366F1)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {result.name}.
            </motion.h2>

            <p className="text-center text-[10px] font-bold uppercase tracking-[0.38em] text-white/30 mb-8">
              {result.tagline}
            </p>

            <p className="text-white/50 text-base leading-relaxed text-center mb-8">{result.desc}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {result.traits.map(t => (
                <span key={t} className="px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5
                  text-[9px] font-black uppercase tracking-[0.3em] text-purple-300/60">{t}</span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[{ label: 'Most Compatible', name: result.compatible, positive: true },
                { label: 'Least Compatible', name: result.incompatible, positive: false }
              ].map(({ label, name, positive }) => {
                const a = ARCHETYPES[name.toLowerCase()];
                return (
                  <div key={label} className="quiz-compat-card text-center p-5">
                    <p className="text-[8px] font-black uppercase tracking-[0.38em] text-white/20 mb-2">{label}</p>
                    <div className="text-3xl mb-1 select-none">{a?.emoji}</div>
                    <p className={`text-sm font-black uppercase ${positive ? 'text-purple-400' : 'text-white/25'}`}>{name}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={onClose}
                className="flex-1 bg-purple-600 text-white py-4 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-purple-500 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                Join the Waitlist
              </button>
              <button onClick={reset}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/10 text-[11px] font-black uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors">
                <RotateCcw size={12} /> Retake
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default QuizModal;
