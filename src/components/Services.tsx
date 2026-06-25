import { Section, FadeIn } from './ui/Section';

const services = [
  'Residential Interior',
  'Commercial Interior',
  'Office Interior',
  'Bedroom Design',
  'Living Room Design',
  'Modular Kitchen',
  'False Ceiling',
  'Lighting Design',
  'Furniture Planning',
  '3D Visualization',
  'Renovation',
  'Turnkey Interior Solutions'
];

export function Services() {
  return (
    <Section id="services" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-light italic mb-4">Our Premium Services</h2>
          <div className="w-16 h-px bg-accent/50 mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} direction="up">
              <div className="group glass p-6 flex items-center justify-center text-center h-32 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                <h3 className="relative z-10 font-sans font-medium text-sm lg:text-base group-hover:text-white transition-colors duration-500">{service}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
