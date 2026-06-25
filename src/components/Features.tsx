import { Section, FadeIn } from './ui/Section';
import { PenTool, Maximize, Crown, Box, Key, Clock } from 'lucide-react';

const features = [
  { icon: PenTool, title: 'Creative Interior Concepts', desc: 'Bespoke designs tailored to your lifestyle and personal taste.' },
  { icon: Maximize, title: 'Space Planning', desc: 'Optimizing layouts for maximum functionality and flow.' },
  { icon: Crown, title: 'Luxury Finishes', desc: 'Curated materials that exude elegance and premium quality.' },
  { icon: Box, title: '3D Design Visualization', desc: 'Realistic renders so you can see your space before execution.' },
  { icon: Key, title: 'Turnkey Execution', desc: 'End-to-end management from bare shell to final handover.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Committed timelines with strict adherence to project schedules.' },
];

export function Features() {
  return (
    <Section id="features" className="bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-light italic leading-snug mb-4">The Menaar Difference</h2>
          <div className="w-16 h-px bg-accent/50 mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group glass p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-500 relative overflow-hidden h-full rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div>
                  <feature.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <h3 className="text-xl font-light mb-3 font-serif">{feature.title}</h3>
                  <p className="text-primary/60 font-sans text-sm font-light leading-relaxed mb-6">{feature.desc}</p>
                </div>
                <div className="mt-auto text-primary/40 text-[10px] font-sans uppercase tracking-widest flex justify-between items-end border-t border-primary/5 pt-4">
                  <span>Step 0{idx + 1}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
