import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Works from './components/Works'
import Marquee from './components/Marquee'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-gray-200 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Works />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
