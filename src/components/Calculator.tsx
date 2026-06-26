import React, { useState } from 'react';
import { Section, FadeIn } from './ui/Section';
import { RefreshCcw } from 'lucide-react';

export function Calculator() {
  const [area, setArea] = useState<number | ''>('');
  const [service, setService] = useState<number>(7);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (typeof area === 'number' && area > 0) {
      setResult(area * service);
    }
  };

  const handleReset = () => {
    setArea('');
    setService(7);
    setResult(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Section id="calculator" className="bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <span className="text-accent font-sans font-bold text-[10px] tracking-[0.2em] uppercase mb-3 block">Estimate</span>
          <h2 className="text-4xl md:text-5xl font-light italic text-primary mb-4">Project Budget Calculator</h2>
          <p className="text-primary/60 font-sans font-light max-w-2xl mx-auto">
            Get an instant estimated cost for your design project.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass p-8 md:p-12 rounded-sm border-t-2 border-t-accent shadow-xl relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label htmlFor="area" className="block text-sm font-sans font-medium text-primary mb-2">Total Area (Square Feet)</label>
                  <input 
                    type="number" 
                    id="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="Enter area in sq.ft"
                    className="w-full bg-surface border border-border px-4 py-3 font-sans text-primary focus:outline-none focus:border-accent transition-colors rounded-sm"
                    min="1"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-sans font-medium text-primary mb-2">Select Service</label>
                  <div className="relative">
                    <select 
                      id="service"
                      value={service}
                      onChange={(e) => setService(Number(e.target.value))}
                      className="w-full bg-surface border border-border px-4 py-3 font-sans text-primary focus:outline-none focus:border-accent transition-colors appearance-none rounded-sm"
                    >
                      <option value={7}>2D Design (₹7 per sq.ft)</option>
                      <option value={40}>3D Design (₹40 per sq.ft)</option>
                      <option value={1300}>Rental Package (₹1300 per sq.ft)</option>
                      <option value={1600}>Premium Luxury (₹1600 per sq.ft)</option>
                    </select>
                    {/* Select arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary/50">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleCalculate}
                    disabled={area === '' || area <= 0}
                    className="flex-1 bg-primary text-white font-sans text-xs tracking-widest uppercase py-4 px-8 hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Calculate Estimate
                  </button>
                  <button 
                    onClick={handleReset}
                    className="bg-surface text-primary p-4 border border-border hover:border-accent hover:text-accent transition-colors duration-300 flex items-center justify-center"
                    aria-label="Reset calculator"
                  >
                    <RefreshCcw size={18} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className={`p-8 border border-border rounded-sm transition-all duration-500 bg-white shadow-sm h-full flex flex-col justify-center ${result !== null ? 'border-accent/50 scale-100 opacity-100' : 'scale-95 opacity-80'}`}>
                  <h3 className="text-sm font-sans uppercase tracking-widest text-primary/60 mb-2">Estimated Budget</h3>
                  
                  <div className="text-4xl md:text-5xl font-light italic text-primary mb-6 transition-all duration-300 flex items-center">
                    {result !== null ? formatCurrency(result) : <span className="text-primary/20">₹ 0</span>}
                  </div>
                  
                  <div className="h-px w-full bg-border mb-4"></div>
                  
                  <p className="text-xs font-sans text-primary/50 leading-relaxed italic">
                    *This is an approximate estimate. Final quotation may vary depending on project scope and site conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
