import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, FadeIn } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How much does interior design consultation cost?",
    a: "Our initial consultation is completely free. We discuss your vision, requirements, and provide a rough estimate. Detailed design fees depend on the project scope."
  },
  {
    q: "How long does a typical project take?",
    a: "A standard residential project takes between 45 to 90 days from design approval to final handover, depending on the complexity and scope of work."
  },
  {
    q: "Do you provide turnkey interior solutions?",
    a: "Yes, we handle everything from conceptual design, 3D visualization, material procurement, to complete on-site execution and final handover."
  },
  {
    q: "Can you work with my existing furniture?",
    a: "Absolutely. We can integrate your cherished pieces into the new design, ensuring they complement the overall aesthetic perfectly."
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve Ranchi and surrounding areas in Jharkhand, but we are open to discussing projects in other cities depending on the scale."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-light italic mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-px bg-accent/50 mx-auto"></div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" className="!w-full">
              <div className="glass overflow-hidden rounded-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/40 transition-colors"
                >
                  <span className="font-serif font-light text-lg pr-8">{faq.q}</span>
                  {openIndex === idx ? (
                    <Minus className="text-accent flex-shrink-0" size={20} />
                  ) : (
                    <Plus className="text-primary/40 flex-shrink-0" size={20} />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-primary/70 font-sans font-light leading-relaxed border-t border-primary/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
