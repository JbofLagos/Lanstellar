import React from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A071A] to-[#1A1433] font-bricolageGrotesque w-full flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
