import React, { useState } from 'react';
import { Section, FadeIn } from './ui/Section';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    projectType: 'Residential',
    budget: 'Under ₹5 Lakhs',
    message: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      setError('Please fill in all required fields before submitting.');
      return;
    }

    const text = `🏠 NEW INTERIOR DESIGN ENQUIRY

👤 Name:
${formData.name}

📞 Phone:
${formData.phone}

📧 Email:
${formData.email}

📍 Project Address:
${formData.address}

🏡 Project Type:
${formData.projectType}

💰 Budget:
${formData.budget}

📝 Message:
${formData.message || 'N/A'}`;

    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      projectType: 'Residential',
      budget: 'Under ₹5 Lakhs',
      message: ''
    });

    const url = `https://wa.me/919234525598?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-background to-alt-section">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-widest mb-3 block">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-light italic mb-6">Start Your Project</h2>
              <p className="text-primary/70 font-sans font-light mb-10">
                Fill out the form below to request a free consultation or ask any questions you might have.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-md" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-md" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-md" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Address *</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-md resize-none" placeholder="Enter your complete project address..."></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-md appearance-none">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Office</option>
                      <option>Retail</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-md appearance-none">
                      <option>Under ₹5 Lakhs</option>
                      <option>₹5L - ₹15L</option>
                      <option>₹15L - ₹30L</option>
                      <option>Above ₹30L</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-surface border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all rounded-md resize-none" placeholder="Tell us about your space..."></textarea>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-red-50 text-red-600 px-4 py-3 rounded-md flex items-center gap-2 border border-red-100"
                    >
                      <AlertCircle size={18} />
                      <span className="text-sm font-medium">{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="pt-2">
                  <button type="submit" className="px-8 py-4 bg-accent text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-transparent border border-accent hover:text-accent transition-all duration-300 rounded-md text-center w-full">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>

          {/* Contact Info & Map */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <FadeIn direction="left" delay={0.2} className="h-full flex flex-col">
              <div className="glass-dark text-white p-8 md:p-12 mb-8 rounded-xl backdrop-blur-xl">
                <h3 className="text-2xl font-light italic mb-8 border-b border-white/10 pb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <a href="https://maps.google.com/maps?q=Ratu%20Rd,%20chowk,%20Ranchi,%20Jharkhand%20834005" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <MapPin className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-bold mb-1 text-white group-hover:text-accent transition-colors">Address</h4>
                        <p className="text-gray-400 font-light group-hover:text-accent transition-colors">Menaar Designs<br/>Ratu Rd, chowk,<br/>Ranchi, Jharkhand 834005</p>
                      </div>
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-gray-400 font-light">+91 92345 25598</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-400 font-light">asifarman566@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Business Hours</h4>
                      <p className="text-gray-400 font-light">Open 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex-grow w-full min-h-[300px] bg-surface relative overflow-hidden group cursor-pointer" onClick={() => window.open('https://maps.google.com/maps?q=Ratu%20Rd,%20chowk,%20Ranchi,%20Jharkhand%20834005', '_blank')}>
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-accent text-white font-sans text-xs uppercase tracking-widest font-bold">Get Directions</span>
                </div>
                <iframe 
                  src="https://maps.google.com/maps?q=Ratu%20Rd,%20chowk,%20Ranchi,%20Jharkhand%20834005&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', inset: 0, pointerEvents: 'none' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Menaar Designs Location"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}
