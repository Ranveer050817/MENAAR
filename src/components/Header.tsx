import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled ? "bg-white/30 backdrop-blur-md border-accent/20 py-4 shadow-sm" : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex flex-col justify-center">
            <span className="text-2xl md:text-3xl font-serif font-bold text-[#C5A059] tracking-wider leading-none">MENAAR</span>
            <span className={cn("text-[10px] uppercase tracking-[0.3em] font-sans mt-1", isScrolled ? "text-primary/60" : "text-white/60")}>designs</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-widest font-sans font-semibold transition-colors hover:text-accent relative group",
                  isScrolled ? "text-primary/70" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className={cn(
                "px-6 py-2.5 rounded-sm text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 border",
                isScrolled 
                  ? "bg-accent text-white border-accent hover:bg-transparent hover:text-accent"
                  : "bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-primary"
              )}
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-serif text-primary hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 px-8 py-3 bg-accent text-white rounded-none text-sm font-medium hover:bg-primary transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
