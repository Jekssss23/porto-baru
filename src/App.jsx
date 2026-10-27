import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Skills />
        <Experience />
        <Education />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
