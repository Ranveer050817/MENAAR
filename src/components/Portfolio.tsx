import { useState } from 'react';
import { Section, FadeIn } from './ui/Section';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

type PortfolioItem = {
  id: number;
  category: string;
  img: string;
  title?: string;
  location?: string;
  description?: string;
};

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Retail', 'Luxury Home', 'Architecture', 'Exterior Design'];

const portfolio: PortfolioItem[] = [
  { id: 1, category: 'Living Room', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Bedroom', img: '/luxbed.jpg' },
  { id: 3, category: 'Kitchen', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Office', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Luxury Home', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 7, category: 'Living Room', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
  { id: 8, category: 'Bedroom', img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800' },
  { id: 9, category: 'Living Room', img: '/TV.jpg.png' },
  { id: 10, category: 'Living Room', img: '/Hall.jpg' },
  { id: 11, category: 'Bedroom', img: '/bedroom.jpg' },
  { id: 12, category: 'Kitchen', img: '/kitchen.jpg' },
  { id: 13, category: 'Office', img: '/office.jpg' },
  { id: 14, category: 'Luxury Home', img: '/luxuryhome.jpg' },

  // Architecture
  { id: 15, category: 'Architecture', title: 'Modern Bungalow', location: 'Palm Springs, CA', description: 'A sleek, contemporary bungalow with open spaces and natural light.', img: '/bangalow.jpg' },
  { id: 16, category: 'Architecture', title: 'Tech Hub Headquarters', location: 'Silicon Valley, CA', description: 'Innovative office complex designed for collaboration and sustainability.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },

  // Exterior Design
  { id: 17, category: 'Exterior Design', title: 'Minimalist Frontage', location: 'Seattle, WA', description: 'Clean exterior lines with a striking mix of timber and concrete materials.', img: '/house.jpg' },
  { id: 18, category: 'Exterior Design', title: 'Zen Garden Retreat', location: 'Kyoto, JP', description: 'Harmonious outdoor space with water features and native plantings.', img: '/home.jpg' },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeTab === 'All' ? portfolio : portfolio.filter(p => p.category === activeTab);

  return (
    <Section id="portfolio" className="bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Selected Works</span>
          <h2 className="text-3xl md:text-4xl font-light italic mb-4">Our Portfolio</h2>
          <div className="w-16 h-px bg-accent/50 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 text-[10px] uppercase tracking-widest font-sans font-bold transition-all rounded-sm border ${
                  activeTab === cat 
                    ? 'bg-accent text-white border-accent' 
                    : 'bg-transparent text-primary/60 border-primary/20 hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={item.category} 
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out rounded-xl"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center rounded-xl">
                  <span className="text-white font-sans font-bold text-xs tracking-[0.2em] uppercase">{item.category}</span>
                  {item.title && <h3 className="text-white text-lg md:text-xl font-serif italic mt-2 mb-1">{item.title}</h3>}
                  {item.location && <p className="text-white/70 text-xs font-sans mb-3">{item.location}</p>}
                  {item.description && <p className="text-white/80 text-sm font-sans font-light max-w-xs">{item.description}</p>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
