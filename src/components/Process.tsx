import { Section, FadeIn } from './ui/Section';

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your vision, requirements, and budget.' },
  { num: '02', title: 'Planning', desc: 'Detailed space planning and layout finalization.' },
  { num: '03', title: '3D Design', desc: 'Visualizing the space with photorealistic 3D renders.' },
  { num: '04', title: 'Material Selection', desc: 'Curating the finest materials and finishes.' },
  { num: '05', title: 'Execution', desc: 'Turnkey execution with strict quality control.' },
  { num: '06', title: 'Final Delivery', desc: 'Handover of your dream space on time.' },
];

export function Process() {
  return (
    <Section id="process" className="bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-light italic mb-4">Our Process</h2>
          <div className="w-16 h-px bg-accent/50 mx-auto"></div>
        </FadeIn>

        <div className="relative">
          {/* Main Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up" className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 glass border-white/40 rounded-full flex items-center justify-center font-sans text-xl font-light text-primary/40 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300 mb-6 group-hover:shadow-[0_0_20px_rgba(200,169,106,0.3)] group-hover:scale-110 relative z-10">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-light italic font-serif mb-2">{step.title}</h3>
                  <p className="text-primary/60 font-sans text-sm font-light leading-relaxed px-2">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
