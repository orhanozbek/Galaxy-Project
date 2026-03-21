import React from 'react';
import { motion } from 'framer-motion';
import { ARCHETYPE_LIST } from '../../constants';

const Archetypes = () => {
  return (
    <section id="archetypes" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-l-4 border-purple-600 pl-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Cosmic <br /><span className="italic text-purple-400/40">Archetypes.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="hidden md:block text-[10px] font-bold uppercase tracking-[0.25em] text-white/25 max-w-xs text-right">
            Each archetype defines how you orbit, attract, and connect.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ARCHETYPE_LIST.map((arch, i) => {
            const IconComp = arch.Icon;
            return (
              <motion.div key={arch.key}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -16 }}
                className="archetype-card group relative overflow-hidden p-8 min-h-[440px] flex flex-col">
                {/* Gradient blob */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${arch.gradient} blur-[80px] opacity-0 group-hover:opacity-25 transition-opacity duration-700`} />
                <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 80% 10%, ${arch.glow}, transparent 60%)` }} />

                {/* Icon */}
                <div className="mb-auto relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                    style={{ background: arch.glow, border: `1px solid ${arch.border}` }}>
                    <IconComp size={26} style={{ color: arch.border.replace('0.3', '1') }} />
                  </div>
                  <div className="text-[8px] font-black uppercase tracking-[0.45em] text-white/25 mb-2">{arch.tagline}</div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-3">{arch.name}</h3>
                  <p className="text-white/35 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-400 mb-5">{arch.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {arch.traits.slice(0, 2).map(t => (
                      <span key={t} className="px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.25em] text-white/30"
                        style={{ background: arch.glow, border: `1px solid ${arch.border}` }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Archetypes;
