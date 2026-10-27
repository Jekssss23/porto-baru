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
    <div className="relative min-h-screen bg-[#090D16] text-slate-100 selection:bg-sky-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Ambient Lighting Gradients */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-10 w-[600px] h-[500px] bg-sky-600/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <Navbar />
      <main className="relative z-10">
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
