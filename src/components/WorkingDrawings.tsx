import { Section, FadeIn } from './ui/Section';

const drawings = [
  {
    id: 1,
    title: "Electrical Working Drawing",
    desc: "Detailed electrical layout showing switch points, lighting, sockets, and wiring plans.",
    image: "/workflow.jpg" // placeholder for architecture/drawing
  },
  {
    id: 2,
    title: "Plumbing Working Drawing",
    desc: "Technical plumbing layout showing water supply, drainage, and sanitary connections.",
    image: "/plumbing.jpg" // placeholder
  },
  {
    id: 3,
    title: "Furniture Working Drawing",
    desc: "Detailed furniture and carpentry drawings with dimensions for accurate execution.",
    image: "/furniture.jpg" // placeholder
  }
];

export function WorkingDrawings() {
  return (
    <Section id="working-drawings" className="bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Technical Plans</span>
          <h2 className="text-3xl md:text-4xl font-light italic mb-4">Working Drawings</h2>
          <p className="text-secondary-text font-sans font-light max-w-2xl mb-16">
            Explore our meticulous technical execution plans that ensure your design is brought to reality with absolute precision.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {drawings.map((item, index) => (
            <FadeIn key={item.id} delay={0.2 + index * 0.1}>
              <div className="bg-card rounded-[20px] overflow-hidden shadow-[0_8px_30px_-4px_rgba(200,169,106,0.08)] border border-border group hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-80 md:h-[420px] bg-alt-section overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
