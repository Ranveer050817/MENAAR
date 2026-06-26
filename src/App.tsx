/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WorkingDrawings } from './components/WorkingDrawings';
import { Portfolio } from './components/Portfolio';
import { Calculator } from './components/Calculator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PageLoader } from './components/PageLoader';
import { Cursor } from './components/Cursor';

export default function App() {
  return (
    <div className="relative font-sans text-primary selection:bg-accent selection:text-white">
      <Cursor />
      <PageLoader />
      <Header />
      
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Process />
        <WorkingDrawings />
        <Portfolio />
        <Calculator />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
