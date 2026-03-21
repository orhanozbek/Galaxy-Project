import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout & UI
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Visuals
import CustomCursor from './components/visuals/CustomCursor';
import ParticleCanvas from './components/visuals/ParticleCanvas';
import OrbitVisual from './components/visuals/OrbitVisual';

// Sections
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Stats from './components/sections/Stats';
import Archetypes from './components/sections/Archetypes';
import HowItWorks from './components/sections/HowItWorks';
import Waitlist from './components/sections/Waitlist';

// Quiz
import QuizModal from './components/quiz/QuizModal';

const GalaxyLanding = () => {
  const [loading, setLoading] = useState(true);
  const [quizOpen, setQuizOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setEmail('');
    }, 1400);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="pre" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-[#050508] text-white relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
          <CustomCursor />
          <ParticleCanvas />
          <div className="spotlight" />
          <div className="noise" />

          {/* Ambient blobs */}
          <div className="fixed top-[-15%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] bg-purple-600/10 pointer-events-none animate-float" />
          <div className="fixed bottom-[5%] right-[-8%] w-[50vw] h-[50vw] rounded-full blur-[160px] bg-indigo-600/10 pointer-events-none animate-float" style={{ animationDelay: '-8s' }} />

          <Navbar setQuizOpen={setQuizOpen} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

          <main>
            <Hero setQuizOpen={setQuizOpen} />
            <Marquee />
            <Stats />
            <Archetypes />
            <HowItWorks />
            <Waitlist 
              email={email} 
              setEmail={setEmail} 
              submitted={submitted} 
              submitting={submitting} 
              handleSubmit={handleSubmit} 
            />
          </main>

          <Footer />

          <AnimatePresence>
            {quizOpen && <QuizModal key="quiz" onClose={() => setQuizOpen(false)} />}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default GalaxyLanding;
