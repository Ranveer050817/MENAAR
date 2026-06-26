import { motion } from 'motion/react';
import { Section, FadeIn } from './ui/Section';

export function About() {
  return (
    <Section id="about" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <FadeIn direction="right">
              <div className="relative z-10 before:absolute before:inset-0 before:border before:border-accent before:translate-x-4 before:translate-y-4 before:-z-10">
                <img 
                  src="/Hall.jpg" 
                  alt="Modern elegant living room" 
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                />
              </div>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2">
            <FadeIn direction="left">
              <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Discover Our Studio</span>
              <h2 className="text-3xl md:text-5xl font-light italic mb-6">About Menaar Designs</h2>
              <p className="text-primary/70 font-sans font-light text-lg mb-8 leading-relaxed">
                Menaar Designs creates timeless, elegant and functional interiors tailored to every client's lifestyle. We specialize in residential, commercial, office, retail and luxury interior spaces with attention to every detail.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-primary p-6 shadow-lg text-white">
                  <h4 className="text-4xl font-light italic mb-2">
                    250<span className="text-white/40">+</span>
                  </h4>
                  <p className="text-[9px] text-accent font-sans uppercase tracking-[0.2em]">Projects Completed</p>
                </div>
                <div className="glass p-6">
                  <h4 className="text-4xl font-light italic text-primary mb-2">
                    100<span className="text-primary/40">%</span>
                  </h4>
                  <p className="text-[9px] text-primary/40 font-sans uppercase tracking-[0.2em]">Client Satisfaction</p>
                </div>
                <div className="glass p-6">
                  <h4 className="text-4xl font-light italic text-primary mb-2">
                    7<span className="text-primary/40">+</span>
                  </h4>
                  <p className="text-[9px] text-primary/40 font-sans uppercase tracking-[0.2em]">Years Experience</p>
                </div>
                <div className="glass p-6">
                  <h4 className="text-4xl font-light italic text-primary mb-2">
                    24<span className="text-primary/40">×7</span>
                  </h4>
                  <p className="text-[9px] text-primary/40 font-sans uppercase tracking-[0.2em]">Support</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}
