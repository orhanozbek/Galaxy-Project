import React, { useEffect } from 'react';
import { Zap } from 'lucide-react';

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.getElementById('c-dot');
    let mx = 0, my = 0;
    
    const tick = () => {
      // Offset by half the icon size (16px / 2 = 8px)
      if (dot) dot.style.transform = `translate(${mx - 8}px, ${my - 8}px)`;
      requestAnimationFrame(tick);
    };

    const onMove = (e) => { 
      mx = e.clientX; 
      my = e.clientY; 
    };

    const hi = () => document.body.classList.add('cur-hover');
    const lo = () => document.body.classList.remove('cur-hover');

    document.addEventListener('mousemove', onMove);
    requestAnimationFrame(tick);

    const updateListeners = () => {
      const els = document.querySelectorAll('a, button, input, [role="button"]');
      els.forEach(el => {
        el.addEventListener('mouseenter', hi);
        el.addEventListener('mouseleave', lo);
      });
    };

    updateListeners();
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="c-dot" className="hidden md:flex pointer-events-none">
      <Zap size={16} fill="currentColor" />
    </div>
  );
};

export default CustomCursor;
