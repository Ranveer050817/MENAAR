import { motion } from 'motion/react';
import { FadeIn } from './ui/Section';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with slight zoom animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/90 to-[#F5F0E8]/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2560" 
          alt="Luxury Interior Design" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 max-w-7xl text-center">
        <FadeIn delay={0.2} className="max-w-4xl mx-auto">
          <span className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-sans font-bold block drop-shadow-md">Interior Design & Decoration Studio</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary leading-tight mb-6">
            Transform Your Dream Space <br className="hidden md:block"/> 
            <span className="text-accent italic">Into Reality</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-secondary-text font-sans font-light mb-10 tracking-wide">
            Luxury interior design solutions crafted for homes, offices, villas & commercial spaces across Ranchi.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 rounded-sm bg-accent text-white font-sans font-bold uppercase text-xs tracking-widest hover:bg-transparent border border-accent hover:text-accent transition-all duration-300 flex items-center justify-center group"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-4 rounded-sm bg-white/50 backdrop-blur-md text-primary border border-border shadow-sm font-sans font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 text-center"
          >
            View Portfolio
          </a>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-secondary-text text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary-text/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
