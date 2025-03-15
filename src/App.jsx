import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import { ThemeProvider } from "./context/ThemeContext"; // Import useTheme here
import Layout from "./components/Layout";
import UseCase from "./components/UseCase";

// A child component to handle theme-dependent rendering
const MainAppContent = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Features />
      <UseCase />
      <CTA />
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
