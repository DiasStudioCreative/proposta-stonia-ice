import React from 'react';
import Hero from './components/Hero';
import Recognition from './components/Recognition';
import ProposalSection from './components/ProposalSection';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Recognition />
      <ProposalSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App; 