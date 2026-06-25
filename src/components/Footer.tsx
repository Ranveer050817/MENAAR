import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-transparent text-primary pt-20 pb-10 border-t border-primary/10 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="#home" className="flex items-center mb-6 block">
              <img src="/MENAAR.jpg" alt="Menaar Designs" className="h-16 w-auto object-contain" />
            </a>
            <p className="text-primary/70 font-sans font-light leading-relaxed mb-6">
              "Designing Spaces That Inspire Living." We craft luxurious, elegant, and timeless interiors for residential and commercial spaces.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/menaar_designs_?igsh=MXN1cGUwOHNkZHpyZg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-accent transition-colors text-primary hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/919234525598" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-accent transition-colors text-primary hover:text-white">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-sans font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Portfolio', 'Process', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-primary/70 hover:text-accent transition-colors font-sans font-light flex items-center before:content-[''] before:w-0 before:h-[1px] before:bg-accent before:mr-0 hover:before:w-4 hover:before:mr-2 before:transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-sans font-bold mb-6 text-primary">Services</h4>
            <ul className="space-y-3">
              {['Residential Interior', 'Commercial Interior', 'Office Design', 'Modular Kitchen', '3D Visualization', 'Turnkey Solutions'].map((service) => (
                <li key={service}>
                  <span className="text-primary/70 font-sans font-light flex items-center before:content-[''] before:w-1 before:h-1 before:bg-accent/50 before:rounded-full before:mr-3">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-sans font-bold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.google.com/maps?q=Ratu%20Rd,%20chowk,%20Ranchi,%20Jharkhand%20834005" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-primary/70 font-sans font-light hover:text-accent transition-colors group">
                  <MapPin className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                  <span>Menaar Designs, Ratu Rd, chowk, Ranchi, Jharkhand 834005</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary/70 font-sans font-light">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <span>+91 92345 25598</span>
              </li>
              <li className="flex items-center gap-3 text-primary/70 font-sans font-light">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <span>asifarman566@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-primary/50 font-sans font-light tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} Menaar Designs. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
