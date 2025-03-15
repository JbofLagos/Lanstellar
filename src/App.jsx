import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext"; // Import useTheme here
import Layout from "./components/Layout";

// A child component to handle theme-dependent rendering
const MainAppContent = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </Layout>
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
