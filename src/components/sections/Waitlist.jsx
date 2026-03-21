import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const Waitlist = ({ email, setEmail, submitted, submitting, handleSubmit }) => {
  return (
    <section className="py-40 px-6 md:px-12 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-purple-400/40 mb-8">
            <Star size={32} />
          </motion.div>
          <h2 className="font-black uppercase tracking-tighter leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
            Claim Your
          </h2>
          <h2 className="font-black uppercase tracking-tighter leading-none italic text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-indigo-600 mb-16"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
            Coordinate.
          </h2>

          <form onSubmit={handleSubmit} className="relative group max-w-md mx-auto">
            <div className="absolute -inset-px rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.3), rgba(99,102,241,0.3), rgba(168,85,247,0.3))' }} />
            <div className="relative flex rounded-full border border-purple-500/20 bg-purple-900/10 p-2 backdrop-blur-xl">
              {!submitted ? (
                <>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter email frequency..."
                    className="flex-1 bg-transparent px-6 py-4 outline-none text-white placeholder-white/20 font-bold tracking-widest text-xs" />
                  <button type="submit" disabled={submitting}
                    className="bg-purple-600 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 transition-colors disabled:opacity-50 shrink-0">
                    {submitting ? 'Syncing…' : 'Initiate'}
                  </button>
                </>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex-1 flex items-center justify-center gap-3 py-4 text-purple-400 font-black uppercase tracking-[0.3em] text-[11px]">
                  <CheckCircle2 size={18} /> Welcome to the Galaxy
                </motion.div>
              )}
            </div>
          </form>
          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/15">
            Beta access strictly limited to early adopters.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
