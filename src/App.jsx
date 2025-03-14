import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; // Import useTheme here

// A child component to handle theme-dependent rendering
const MainAppContent = () => {
  const { isDarkMode } = useTheme(); // Now this works with the import

  return (
    <div
      className={`min-h-screen font-bricolageGrotesque w-full flex flex-col ${
        isDarkMode ? "bg-gradient-to-b from-[#0A071A] to-[#1A1433]" : "bg-white"
      }`}
    >
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}

export default App;