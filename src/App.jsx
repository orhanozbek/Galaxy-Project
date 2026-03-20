import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Target, Moon, Eye } from 'lucide-react';

const GalaxyLanding = () => {
  const [email, setEmail] = useState('');

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen stardust selection:bg-lime-400 selection:text-black relative overflow-hidden">
      
      {/* Background Orbit Visuals */}
      <div className="absolute top-0 right-0 w-full h-screen pointer-events-none -z-10 opacity-40">
        <div className="absolute top-[30%] right-[10%]">
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>
          <div className="orbit-ring orbit-ring-3"></div>
        </div>
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter italic">GALAXY.</div>
        <div className="flex gap-4 items-center">
          <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition">Giriş</button>
          <button className="neon-btn px-6 py-2.5 text-xs flex items-center gap-2">
            Yörüngeye Gir <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      <section className="pt-48 pb-24 px-6 text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 border border-lime-400/30 rounded-full text-[10px] font-bold tracking-[0.2em] text-lime-400 mb-8 uppercase bg-lime-400/5">
            <Sparkles size={12} /> Yeni Nesil Flört Deneyimi
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter mb-6 leading-[0.85]">
            Sıradan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Değilsin.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl mx-auto text-gray-400 text-lg mb-10 font-medium leading-relaxed">
            "The Best You" algoritmasıyla tanışın. Kaydırmayı bırakın, yıldız haritanızın uyumlu olduğu ruhlarla eşleşin.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="neon-btn px-10 py-5 text-lg shadow-[0_0_40px_rgba(204,255,0,0.2)] flex items-center gap-3 w-full sm:w-auto justify-center group">
              Karakter Testini Başlat <Zap size={20} className="group-hover:scale-125 transition-transform" />
            </button>
            <button className="px-10 py-5 text-lg font-bold uppercase tracking-wider text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors w-full sm:w-auto justify-center">
              Nasıl Çalışır?
            </button>
          </motion.div>

        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-24 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: <Zap size={40} className="text-lime-400" />, title: 'Supernova', desc: 'Enerjinle tüm galaksiyi aydınlat.' },
            { icon: <Eye size={40} className="text-purple-400" />, title: 'Nebula', desc: 'Gizemli ve derin bağlar kur.' },
            { icon: <Target size={40} className="text-blue-400" />, title: 'Starboy', desc: 'Kendi yörüngende parlamaya devam et.' },
            { icon: <Moon size={40} className="text-white" />, title: 'Eclipse', desc: 'Nadir ve unutulmaz karşılaşmalar.' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="glow-card p-10 flex flex-col items-center text-center group cursor-pointer">
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase italic tracking-wide">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto glow-card p-1 bg-gradient-to-br from-lime-400/30 via-transparent to-purple-500/30 overflow-hidden rounded-[40px]"
        >
          <div className="bg-[#0B0E14] rounded-[38px] p-10 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-lime-400/10 blur-[100px] rounded-full"></div>

            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[1.1] relative z-10">
              Evrenin En İyi <br /> Versiyonunla <br /> Tanış.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
              {['#AstroCompatibility', '#NoGhosting', '#DeepConnections'].map((tag, i) => (
                <span key={i} className="px-5 py-2 border border-white/10 rounded-full text-xs font-bold bg-white/5 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg italic relative z-10">
              "Galaxy, sadece bir uygulama değil; senin en iyi halini keşfetme yolculuğundur."
            </p>

            <div className="max-w-md mx-auto relative z-10">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresini gir..." 
                  className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all font-medium"
                  required
                />
                <button type="submit" className="neon-btn px-8 py-4 w-full sm:w-auto flex justify-center items-center font-bold">
                  Katıl
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 font-medium">Lansman öncesi erken erişim listesi.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 relative z-10">
        <div className="text-3xl font-black italic opacity-20 mb-6 tracking-tighter">GALAXY.</div>
        <p className="text-[10px] tracking-[0.5em] uppercase text-gray-600 font-bold">
          &copy; 2026 Crafted for the best version of you.
        </p>
      </footer>
    </div>
  );
};

export default GalaxyLanding;
