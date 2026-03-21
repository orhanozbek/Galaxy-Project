import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../ui/Counter';

const Stats = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { to: 4, suffix: '', label: 'Archetypes' },
          { to: 50, suffix: 'K+', label: 'On Waitlist' },
          { to: 94, suffix: '%', label: 'Match Accuracy' },
          { to: 5, suffix: '', label: 'Questions' },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <div className="text-5xl md:text-6xl font-black tracking-tighter text-purple-400">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className="text-[9px] font-bold uppercase tracking-[0.38em] text-white/20 mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
