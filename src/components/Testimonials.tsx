import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Section, FadeIn } from './ui/Section';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "Menaar Designs completely transformed our apartment into a luxurious haven. Their attention to detail and material selection is unparalleled."
  },
  {
    name: "Priya Singh",
    role: "Villa Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "From 3D design to the final execution, the process was seamless. They delivered on time and the quality exceeded our expectations."
  },
  {
    name: "Amit Patel",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    text: "Our new office space looks incredibly premium and modern. The Menaar team was professional and understood our brand aesthetic perfectly."
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Section id="testimonials" className="bg-primary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-light italic mb-4">What They Say</h2>
          <div className="w-16 h-px bg-accent/50 mx-auto"></div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="glass-dark p-8 md:p-12 text-center relative rounded-xl backdrop-blur-xl">
                    <div className="flex justify-center gap-1 mb-6 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-light font-serif leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center flex-col">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-accent"
                      />
                      <h4 className="font-serif font-light text-lg">{testimonial.name}</h4>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-sans font-bold">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white transition-colors backdrop-blur-sm z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white transition-colors backdrop-blur-sm z-10"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === selectedIndex ? 'w-8 bg-accent' : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => emblaApi?.scrollTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
