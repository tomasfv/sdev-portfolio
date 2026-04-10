import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css'

import Hero from './Hero';
import Services from './Services';
import About from './About';
import WorkGallery from './WorkGallery';
import Skills from './Skills';
import Contact from './Contact';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WorkGallery />
      <Skills />
      <Contact />
      <footer className="text-center p-3 bg-body-tertiary">
        <div>© 2025. All Rights Reserved.</div>
      </footer>
    </>
  );
}
