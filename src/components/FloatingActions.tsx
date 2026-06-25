import { useState, useEffect } from 'react';
import { Instagram, Phone, ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { cn } from '../lib/utils';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className={cn(
            "w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-all duration-300 transform",
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919234525598"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>

        {/* Call */}
        <a
          href="tel:+919234525598"
          className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Call"
        >
          <Phone size={20} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/menaar_designs_?igsh=MXN1cGUwOHNkZHpyZg=="
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>
    </>
  );
}
