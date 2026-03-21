import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-16 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
      <div className="text-xl font-black italic tracking-tighter text-white/20">GALAXY.</div>
      <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-white/15">
        {['Privacy', 'X (Twitter)', '© 2026'].map(l => (
          <span key={l} className="hover:text-purple-400 transition-colors cursor-pointer">{l}</span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
