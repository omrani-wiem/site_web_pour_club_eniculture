import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Poles from './components/Poles';
import Valeurs from './components/valeur';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Poles />
      <Valeurs />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
